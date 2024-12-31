import slugify from 'limax';

import { SITE, APP_BLOG } from 'astrowind:config';

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  switch (type) {
    case 'home':
      permalink = getHomePermalink();
      break;

    case 'blog':
      permalink = getBlogPermalink();
      break;

    case 'asset':
      permalink = getAsset(slug);
      break;

    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;

    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;

    case 'post':
      permalink = createPath(trimSlash(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

/** */
interface MenuItem {
  type?: 'home' | 'blog' | 'asset';
  url?: string;
  href?: string;
  [key: string]: unknown;
}

interface Menu {
  [key: string]: MenuItem | MenuItem[];
}

// Helper function to handle permalink generation based on item type
const generatePermalink = (item: MenuItem): string => {
  if (!item.type) {
    return item.href || '';
  }

  try {
    switch (item.type) {
      case 'home':
        return getHomePermalink();
      case 'blog':
        return getBlogPermalink();
      case 'asset':
        return item.url ? getAsset(item.url) : item.href || '';
      default:
        return item.url ? getPermalink(item.url, item.type) : item.href || '';
    }
  } catch (error) {
    console.error('Error generating permalink for:', item, error);
    return item.href || '';
  }
};

// Type guard to check if an object is of type MenuItem
const isMenuItem = (item: unknown): item is MenuItem => {
  return item !== null && typeof item === 'object' && ('href' in item || 'type' in item || 'url' in item);
};

export const applyGetPermalinks = (menu: Menu | MenuItem | MenuItem[] = []): Menu | MenuItem | MenuItem[] => {
  // Handle array of MenuItems
  if (Array.isArray(menu)) {
    return menu.map((item) => applyGetPermalinks(item) as MenuItem);
  }

  // Handle single MenuItem
  if (isMenuItem(menu)) {
    const processedItem: MenuItem = { ...menu };
    if ('href' in processedItem) {
      processedItem.href = generatePermalink(processedItem);
    }
    return processedItem;
  }

  // Handle Menu object
  if (typeof menu === 'object' && menu !== null) {
    const result: Menu = {};

    for (const [key, value] of Object.entries(menu)) {
      if (Array.isArray(value)) {
        result[key] = value.map((item) => applyGetPermalinks(item) as MenuItem);
      } else if (isMenuItem(value)) {
        const processedItem = { ...value };
        if ('href' in processedItem) {
          processedItem.href = generatePermalink(processedItem);
        }
        result[key] = processedItem;
      } else {
        result[key] = value;
      }
    }

    return result;
  }

  return menu;
};
