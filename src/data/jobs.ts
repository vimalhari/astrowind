export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  isActive: boolean;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salaryRange?: string;
}

export const jobListings: JobListing[] = [
  {
    id: 'digital-marketing-001',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'India, Remote',
    type: 'full-time',
    experience: '2-5 years',
    isActive: true,
    postedDate: '2025-09-08',
    description:
      'We are seeking a dynamic Digital Marketing Specialist to join our India-based remote team. You will be responsible for developing and executing comprehensive digital marketing strategies for our international clients, focusing on SEO, content marketing, social media, and paid advertising campaigns.',
    requirements: [
      'Bachelor\'s degree in Marketing, Digital Marketing, or related field',
      'Proven experience in digital marketing with measurable results',
      'Strong knowledge of SEO, SEM, and Google Analytics',
      'Experience with social media marketing across multiple platforms',
      'Proficiency in Google Ads, Facebook Ads, and other PPC platforms',
      'Content marketing and copywriting skills',
      'Understanding of email marketing and automation tools',
      'Knowledge of marketing automation platforms (HubSpot, Mailchimp, etc.)',
      'Excellent analytical and reporting skills',
      'Strong English communication skills for international clients',
    ],
    responsibilities: [
      'Develop and implement digital marketing strategies for international clients',
      'Create and manage SEO-optimized content across various platforms',
      'Execute and optimize paid advertising campaigns (Google Ads, Facebook, LinkedIn)',
      'Manage social media presence and community engagement',
      'Analyze campaign performance and provide detailed reports',
      'Collaborate with the design team for marketing materials',
      'Conduct keyword research and competitive analysis',
      'Manage email marketing campaigns and lead nurturing sequences',
      'Stay updated with latest digital marketing trends and best practices',
      'Work closely with international teams across different time zones',
    ],
    benefits: [
      'Competitive salary package (INR based)',
      'Comprehensive health insurance for employee and family',
      'Professional development and certification support',
      'Flexible remote working arrangement',
      'International client project exposure',
      '21 days annual leave plus Indian holidays',
      'Performance-based bonuses and incentives',
      'Access to premium marketing tools and software',
      'Learning budget for courses and certifications',
      'Career growth opportunities in international markets',
    ],
    salaryRange: '₹4,00,000 - ₹8,00,000',
  },
  {
    id: 'fullstack-astro-dev-001',
    title: 'Full Stack Developer with Astro Framework Knowledge',
    department: 'Development',
    location: 'India, Remote',
    type: 'full-time',
    experience: '3-6 years',
    isActive: true,
    postedDate: '2025-09-08',
    description:
      'Join our innovative development team as a Full Stack Developer with expertise in the Astro framework! We are looking for a passionate developer to work on cutting-edge web applications and websites for our international clients, combining modern frontend technologies with robust backend solutions.',
    requirements: [
      'Strong experience with Astro framework and its core concepts',
      'Proficiency in JavaScript/TypeScript and modern web technologies',
      'Full-stack development experience with Node.js, Express, or similar backend frameworks',
      'Knowledge of HTML5, CSS3, and modern CSS frameworks (Tailwind CSS)',
      'Experience with React, Vue, or Svelte components within Astro',
      'Database experience (MySQL, PostgreSQL, MongoDB)',
      'Understanding of static site generation (SSG) and server-side rendering (SSR)',
      'Experience with RESTful APIs and GraphQL',
      'Knowledge of version control systems (Git) and collaborative development',
      'Understanding of web performance optimization and SEO best practices',
      'Experience with cloud platforms (AWS, Vercel, Netlify)',
      'Strong English communication skills for international collaboration',
    ],
    responsibilities: [
      'Develop modern, high-performance websites and web applications using Astro',
      'Build and maintain both frontend and backend components',
      'Create reusable components and maintain component libraries',
      'Integrate with headless CMS, databases, and external APIs',
      'Optimize websites for performance, SEO, and Core Web Vitals',
      'Collaborate with designers to implement pixel-perfect, responsive designs',
      'Write clean, maintainable, and well-documented code',
      'Ensure cross-browser compatibility and accessibility standards',
      'Participate in code reviews and maintain coding standards',
      'Work with international teams and clients across different time zones',
      'Deploy and maintain applications on various hosting platforms',
      'Stay updated with latest web development trends and Astro ecosystem',
    ],
    benefits: [
      'Competitive salary package (INR based)',
      'Comprehensive health insurance for employee and family',
      'Professional development and training opportunities',
      'Flexible remote working arrangement',
      'International project exposure and collaboration',
      '21 days annual leave plus Indian holidays',
      'Performance-based bonuses and career advancement opportunities',
      'Access to latest development tools and technologies',
      'Learning budget for courses, conferences, and certifications',
      'Modern development equipment and home office setup support',
    ],
    salaryRange: '₹6,00,000 - ₹12,00,000',
  },
];

// =============================================================================
// 📝 HOW TO MANAGE JOBS - QUICK REFERENCE GUIDE
// =============================================================================
//
// ➕ TO ADD A NEW JOB:
// 1. Copy an existing job object as a template
// 2. Change the 'id' to something unique (format: 'department-role-###')
// 3. Update all the fields with your job details
// 4. Set 'isActive: true' for currently hiring positions
// 5. Set 'postedDate' to today's date in 'YYYY-MM-DD' format
// 6. Save the file and rebuild/restart the dev server
//
// ✏️ TO EDIT A JOB:
// 1. Find the job in the array above
// 2. Modify any field you want to change
// 3. Save the file and rebuild/restart the dev server
//
// ❌ TO REMOVE A JOB:
// 1. Either delete the entire job object from the array
// 2. OR set 'isActive: false' to hide it but keep the data
//
// 🔄 TO REACTIVATE A JOB:
// 1. Find the job and set 'isActive: true'
// 2. Update the 'postedDate' to current date
//
// 💡 TIP: Each job needs a unique 'id'. Use format like:
// - 'dev-react-001', 'dev-php-002', 'des-ui-001', 'mar-seo-001'
//
// =============================================================================

export const getActiveJobs = () => jobListings.filter((job) => job.isActive);

export const getJobsByLocation = (location: string) =>
  jobListings.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()));

export const getJobsByDepartment = (department: string) =>
  jobListings.filter((job) => job.department.toLowerCase() === department.toLowerCase());

export const getJobById = (id: string) => jobListings.find((job) => job.id === id);
