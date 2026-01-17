import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { cities } from './data/cities';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Websites',
          links: [
            {
              text: 'Astro Websites',
              href: getPermalink('/astro-site'),
              description: 'Lightning-fast marketing sites',
            },
            {
              text: 'WordPress Websites',
              href: getPermalink('/website-development'),
              description: 'Easy-to-edit CMS sites',
            },
          ],
        },
        {
          text: 'Web & Mobile Apps',
          links: [
            { text: 'Django Apps', href: getPermalink('/django-development'), description: 'Python web applications' },
            {
              text: 'Ruby on Rails Apps',
              href: getPermalink('/ruby-on-rails-development'),
              description: 'Rails web applications',
            },
            { text: 'Mobile Apps', href: getPermalink('/mobile-app'), description: 'iOS & Android apps' },
          ],
        },
        {
          text: 'Automation',
          links: [
            {
              text: 'Business Automation (n8n)',
              href: getPermalink('/business-automation'),
              description: 'Workflow automation',
            },
          ],
        },
        {
          text: 'Marketing',
          links: [
            {
              text: 'Digital Marketing',
              href: getPermalink('/digital-marketing'),
              description: 'Full-service marketing',
            },
            { text: 'SEO', href: getPermalink('/seo'), description: 'Search engine optimization' },
            {
              text: 'Social Media',
              href: getPermalink('/socialmedia-marketing'),
              description: 'Social media marketing',
            },
            {
              text: 'Content Marketing',
              href: getPermalink('/content-marketing'),
              description: 'Content strategy & creation',
            },
          ],
        },
        {
          text: 'Design',
          links: [{ text: 'Logo Design', href: getPermalink('/logo-design'), description: 'Brand identity & logos' }],
        },
        {
          text: 'IT Services',
          links: [
            {
              text: 'Managed IT Support',
              href: getPermalink('/it-support'),
              description: 'Google Workspace, Microsoft 365 & more',
            },
          ],
        },
      ],
    },
    {
      text: 'Case Studies',
      href: getPermalink('/case-studies'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Company',
      href: getPermalink('/#'),
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Careers',
          href: getPermalink('/careers'),
        },
      ],
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Websites',
      links: [
        { text: 'Astro Websites', href: getPermalink('/astro-site') },
        { text: 'WordPress Websites', href: getPermalink('/website-development') },
      ],
    },
    {
      title: 'Web & Mobile Apps',
      links: [
        { text: 'Django Apps', href: getPermalink('/django-development') },
        { text: 'Ruby on Rails Apps', href: getPermalink('/ruby-on-rails-development') },
        { text: 'Mobile Apps', href: getPermalink('/mobile-app') },
      ],
    },
    {
      title: 'Automation',
      links: [{ text: 'Business Automation (n8n)', href: getPermalink('/business-automation') }],
    },
    {
      title: 'Marketing',
      links: [
        { text: 'Digital Marketing', href: getPermalink('/digital-marketing') },
        { text: 'SEO Services', href: getPermalink('/seo') },
        { text: 'Social Media Marketing', href: getPermalink('/socialmedia-marketing') },
        { text: 'Content Marketing', href: getPermalink('/content-marketing') },
      ],
    },
    {
      title: 'Design',
      links: [{ text: 'Logo Design', href: getPermalink('/logo-design') }],
    },
    {
      title: 'IT Services',
      links: [{ text: 'Managed IT Support', href: getPermalink('/it-support') }],
    },
    {
      title: 'Locations',
      links: cities.map((city) => ({
        text: city.name,
        href: getPermalink(`/locations/${city.slug}/website-development`),
      })),
    },
  ],
  secondaryLinks: [
    { text: 'Terms & Conditions', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Sitemap', href: getPermalink('/sitemap-enhanced.xml') },
    { text: 'Accessibility', href: getPermalink('/contact') },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/criztec-technologies',
    },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/criztec_it' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/criztec_technologies' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/criztec.technologies' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/vimalhari' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© 2025 Crizaze Business Services Ltd. All rights reserved. <br>Registered in England & Wales. Company No. <a class="text-blue-600 underline dark:text-muted" href="https://find-and-update.company-information.service.gov.uk/company/15494238" target="_blank" rel="noopener noreferrer">15494238</a>. <br class="block sm:hidden"><span class="hidden sm:inline">|</span> Professional web development, digital marketing & IT services.`,
};

// class="text-blue-600 underline dark:text-muted" href="https://criztec.com/"

// the below line is to add image in front of footer notes
// <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://criztec.com/favicon/favicon-32x32.png" alt="Criztec logo" loading="lazy"></img>
