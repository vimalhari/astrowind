import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
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
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
    {
      text: 'Design',
      links: [
        { text: 'Web Design', href: getPermalink('/web-design') },
        // { text: 'UX Design', href: getPermalink('/ux-design') },
        // { text: 'Graphic Design', href: getPermalink('/graphic-design') },
        // { text: 'Video Production', href: getPermalink('/video-production') },
      ],
    },
    {
      text: 'Development',
      links: [
        { text: 'Website Development', href: getPermalink('/website-development') },
        { text: 'Mobile App Development', href: getPermalink('/mobile-app') },
        // { text: 'Software Development', href: getPermalink('/software-development') },
        // { text: 'Ecommerce Solutions', href: getPermalink('/ecommerce-solutions') },
        // { text: 'Hugo Static Site', href: getPermalink('/hugo-static-site') },
        { text: 'Astro Site Development', href: getPermalink('/astro-site') },
        // { text: 'WordPress', href: getPermalink('/wordpress') },
        // { text: 'Automation', href: getPermalink('/automation') },
        // { text: 'ETL / Data Processing', href: getPermalink('/etl-data-processing') },
      ],
    },
    {
      text: 'Digital Marketing',
      links: [
        { text: 'Digital Marketing', href: getPermalink('/digital-marketing') },
        { text: 'SEO', href: getPermalink('/seo') },
        { text: 'Social Media Marketing', href: getPermalink('/socialmedia-marketing') },
        { text: 'Content Marketing', href: getPermalink('/content-marketing') },
      ],
    },
    {
      text: 'Technical',
      links: [
        { text: 'IT Support', href: getPermalink('/it-support') },
        // { text: 'IT Solutions', href: getPermalink('/it-solutions') },
        // { text: 'Cloud Services', href: getPermalink('/cloud-services') },
        // { text: 'Cybersecurity', href: getPermalink('/cyber-security') },
        // { text: 'Cloud Infrastructure', href: getPermalink('/cloud-infrastructure') },
        // { text: 'Office 365', href: getPermalink('/office-365') },
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
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Design Services',
      links: [
        { text: 'Web Design', href: getPermalink('/web-design') },
        { text: 'All Services', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Development',
      links: [
        { text: 'Website Development', href: getPermalink('/website-development') },
        { text: 'Mobile App Development', href: getPermalink('/mobile-app') },
        { text: 'Astro Site Development', href: getPermalink('/astro-site') },
      ],
    },
    {
      title: 'Digital Marketing',
      links: [
        { text: 'Digital Marketing', href: getPermalink('/digital-marketing') },
        { text: 'SEO Services', href: getPermalink('/seo') },
        { text: 'Social Media Marketing', href: getPermalink('/socialmedia-marketing') },
        { text: 'Content Marketing', href: getPermalink('/content-marketing') },
      ],
    },
    {
      title: 'Support & Resources',
      links: [
        { text: 'IT Support', href: getPermalink('/it-support') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Help Center', href: getPermalink('/contact') },
      ],
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
