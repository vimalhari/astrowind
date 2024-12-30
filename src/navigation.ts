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
        // {
        //   text: 'Startup',
        //   href: getPermalink('/homes/startup'),
        // },
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
      text: 'Services',
      links: [
        { text: 'Website Development', href: getPermalink('/website-development') },
        // { text: 'Graphic Design', href: getPermalink('/graphic-design') },
        // { text: 'Video Production', href: getPermalink('/video-production') },

        // { text: 'Digital Marketing', href: getPermalink('/digital-marketing') },
        // { text: 'Social Media Marketing', href: getPermalink('/social-media-marketing') },

        // { text: 'IT Solutions', href: getPermalink('/it-solutions') },
        // { text: 'Cloud Services', href: getPermalink('/cloud-services') },
        // { text: 'Automation', href: getPermalink('/automation') },
        // { text: 'ETL / Data Processing', href: getPermalink('/etl-data-processing') }, 
      ],
    },
    // {
    //   text: 'Design',
    //   links: [
    //     { text: 'Web Design', href: getPermalink('/web-design') },
    //     { text: 'UX Design', href: getPermalink('/ux-design') },
    //     { text: 'Graphic Design', href: getPermalink('/graphic-design') },
    //     { text: 'Video Production', href: getPermalink('/video-production') },
    //   ],
    // },
    // {
    //   text: 'Development',
    //   links: [
    //     { text: 'Web Development', href: getPermalink('/web-development') },
    //     { text: 'Mobile App Development', href: getPermalink('/mobile-app') },
    //     { text: 'Software Development', href: getPermalink('/software-development') },
    //     { text: 'Ecommerce Solutions', href: getPermalink('/ecommerce-solutions') },
    //     { text: 'Hugo Static Site', href: getPermalink('/hugo-static-site') },
    //     { text: 'Astro Site', href: getPermalink('/astro-site') },
    //     { text: 'WordPress', href: getPermalink('/wordpress') }, 
    //     { text: 'Automation', href: getPermalink('/automation') },
    //     { text: 'ETL / Data Processing', href: getPermalink('/etl-data-processing') },
    //   ],
    // },
    // {
    //   text: 'Digital Marketing',
    //   links: [
    //     { text: 'SEO', href: getPermalink('/seo') },
    //     { text: 'Social Media Marketing', href: getPermalink('/social-media-marketing') }, 
    //     { text: 'Content Marketing', href: getPermalink('/content-marketing') }, 
    //   ],
    // },
    // {
    //   text: 'Technical',
    // links: [
    //   { text: 'IT Support', href: getPermalink('/it-support') },
    //   { text: 'IT Solutions', href: getPermalink('/it-solutions') },
    //   { text: 'Cloud Services', href: getPermalink('/cloud-services') },
    //   { text: 'Cybersecurity', href: getPermalink('/cyber-security') },
    //   { text: 'Cloud Infrastructure', href: getPermalink('/cloud-infrastructure') },
    //   { text: 'Office 365', href: getPermalink('/office-365') },
    // ],
    // },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Website Development', href: '/website-development' },
    //     { text: 'Security', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Customer stories', href: '#' },
    //     { text: 'Pricing', href: '#' },
    //     { text: 'Resources', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/criztec_it' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/criztec_technologies' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/criztec.technologies' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `© 2024 <a> Crizaze Business Services Ltd. </a>All rights reserved. <br>Registered in England & Wales. Company No. <a class="text-blue-600 underline dark:text-muted" href="https://find-and-update.company-information.service.gov.uk/company/15494238"> 15494238. </a>`,
};

// class="text-blue-600 underline dark:text-muted" href="https://criztec.com/"

// the below line is to add image in front of footer notes
// <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>