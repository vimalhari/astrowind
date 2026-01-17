// Enhanced sitemap with additional SEO properties
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from 'criztec:config';

const staticPages = [
  '',
  'about',
  'careers',
  'contact',
  'services',
  'web-app-development',
  'digital-marketing',
  'seo',
  'mobile-app',
  'website-development',
  'content-marketing',
  'socialmedia-marketing',
  'it-support',
  'astro-site',
  'django-development',
  'ruby-on-rails-development',
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('post');
  const jobs = await getCollection('jobs', ({ id, data }) => !data.draft && !id.startsWith('_') && data.isActive);

  const joinUrl = (base: string, pathname: string) => {
    const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const trimmedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    return trimmedPath ? `${trimmedBase}/${trimmedPath}` : trimmedBase;
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages
  .map((page) => {
    const url = page === '' ? SITE.site : `${joinUrl(SITE.site, page)}/`;
    const priority = page === '' ? '1.0' : '0.8';
    const changefreq = page === '' ? 'weekly' : 'monthly';

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <mobile:mobile/>
  </url>`;
  })
  .join('\n')}
${posts
  .map((post) => {
    const url = `${joinUrl(SITE.site, post.id)}/`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${post.data.publishDate ? new Date(post.data.publishDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <mobile:mobile/>
  </url>`;
  })
  .join('\n')}
${jobs
  .map((job) => {
    const url = `${joinUrl(SITE.site, `careers/${job.id}`)}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${job.data.postedDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <mobile:mobile/>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
