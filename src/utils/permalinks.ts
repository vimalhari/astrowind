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
  // Other properties for MenuItem
  [key: string]: any; // Allow other properties
}

interface Menu {
  [key: string]: MenuItem | MenuItem[];
}

export const applyGetPermalinks = (menu: Menu | MenuItem | undefined = {}): Menu | MenuItem | any => {
  if (Array.isArray(menu)) {
    return menu.map((item) => applyGetPermalinks(item));
  }

  if (typeof menu === 'object' && menu !== null) {
    const obj: Record<string, any> = {};

    for (const key in menu) {
      if (menu.hasOwnProperty(key)) {
        const item = menu[key];

        if (key === 'href') {
          if (typeof item === 'string') {
            obj[key] = getPermalink(item);
          } else if (item && item.hasOwnProperty('type')) {
            try {
              if (item.type === 'home') {
                obj[key] = getHomePermalink();
              } else if (item.type === 'blog') {
                obj[key] = getBlogPermalink();
              } else if (item.type === 'asset') {
                if (item.url) {
                  obj[key] = getAsset(item.url);
                } else {
                  console.warn("Missing URL for asset:", item);
                  obj[key] = item.href; // Keep original or assign a default
                }
              } else if (item.url) {
                obj[key] = getPermalink(item.url, item.type);
              } else {
                 obj[key] = item.href
              }
            } catch (error) {
              console.error("Error generating permalink for:", item, error);
              obj[key] = item.href; // Keep original or handle differently
            }
          } else {
            obj[key] = item?.href;
          }
        } else {
          obj[key] = applyGetPermalinks(item);
        }
      }
    }
    return obj;
  }

  return menu;
};