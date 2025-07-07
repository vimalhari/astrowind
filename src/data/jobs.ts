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
    id: 'wp-dev-001',
    title: 'WordPress Developer',
    department: 'Development',
    location: 'London, UK',
    type: 'full-time',
    experience: '2-4 years',
    isActive: true,
    postedDate: '2025-01-05',
    description:
      'We are seeking a skilled WordPress Developer to join our dynamic team. You will be responsible for developing custom WordPress themes, plugins, and maintaining existing WordPress websites for our diverse client base.',
    requirements: [
      'Strong proficiency in PHP, MySQL, HTML5, CSS3, and JavaScript',
      'Extensive experience with WordPress theme and plugin development',
      'Knowledge of WordPress REST API and custom post types',
      'Familiarity with page builders like Elementor, Gutenberg',
      'Experience with version control systems (Git)',
      'Understanding of responsive design principles',
      'Knowledge of SEO best practices',
      'Experience with WooCommerce is a plus',
    ],
    responsibilities: [
      'Develop custom WordPress themes and plugins from scratch',
      'Customize existing themes and plugins to meet client requirements',
      'Optimize WordPress websites for performance and security',
      'Collaborate with designers to implement pixel-perfect designs',
      'Troubleshoot and debug WordPress issues',
      'Maintain and update existing WordPress websites',
      'Ensure websites are responsive across all devices',
      'Implement SEO best practices',
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance coverage',
      'Professional development opportunities',
      'Flexible working hours',
      'Remote work options',
      '25 days annual leave plus bank holidays',
      'Modern office in Central London',
      'Performance-based bonuses',
    ],
    salaryRange: '£35,000 - £50,000',
  },
  {
    id: 'frontend-dev-001',
    title: 'Frontend Developer (React/Angular/Astro)',
    department: 'Development',
    location: 'London, UK',
    type: 'full-time',
    experience: '3-5 years',
    isActive: true,
    postedDate: '2025-01-03',
    description:
      'Join our frontend development team and work with cutting-edge technologies including React, Angular, and Astro. You will be responsible for creating exceptional user experiences and building high-performance web applications.',
    requirements: [
      'Strong proficiency in JavaScript/TypeScript',
      'Extensive experience with React.js and its ecosystem',
      'Solid understanding of Angular (version 12+)',
      'Experience with Astro framework is highly preferred',
      'Proficiency in HTML5, CSS3, and modern CSS frameworks (Tailwind CSS)',
      'Knowledge of state management (Redux, NgRx, Zustand)',
      'Experience with build tools (Webpack, Vite, etc.)',
      'Familiarity with testing frameworks (Jest, Cypress)',
      'Understanding of responsive design and cross-browser compatibility',
      'Experience with Git and agile development methodologies',
    ],
    responsibilities: [
      'Develop modern, responsive web applications using React, Angular, and Astro',
      'Collaborate with UX/UI designers to implement pixel-perfect designs',
      'Write clean, maintainable, and efficient code',
      'Optimize applications for maximum speed and scalability',
      'Implement automated testing strategies',
      'Participate in code reviews and maintain coding standards',
      'Stay updated with latest frontend technologies and best practices',
      'Work closely with backend developers to integrate APIs',
    ],
    benefits: [
      'Competitive salary package',
      'Health and dental insurance',
      'Learning and development budget',
      'Flexible working arrangements',
      'Hybrid work model',
      '28 days annual leave',
      'Modern development tools and equipment',
      'Team building activities and social events',
    ],
    salaryRange: '£45,000 - £65,000',
  },
  {
    id: 'fullstack-dev-001',
    title: 'Full Stack Web Developer',
    department: 'Development',
    location: 'London, UK / Remote',
    type: 'full-time',
    experience: '4-6 years',
    isActive: false,
    postedDate: '2024-12-15',
    description:
      'We are looking for an experienced Full Stack Developer with expertise in both frontend and backend technologies. You will work on diverse projects ranging from corporate websites to complex web applications.',
    requirements: [
      'Strong proficiency in JavaScript/TypeScript and Python or PHP',
      'Experience with React, Angular, or Vue.js',
      'Knowledge of Node.js, Express.js, or similar backend frameworks',
      'Database experience (MySQL, PostgreSQL, MongoDB)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with cloud platforms (AWS, Google Cloud, or Azure)',
      'Knowledge of containerization (Docker)',
      'Familiarity with CI/CD pipelines',
      'Understanding of web security best practices',
    ],
    responsibilities: [
      'Design and develop full-stack web applications',
      'Create and maintain APIs and database schemas',
      'Implement responsive frontend interfaces',
      'Ensure application performance and security',
      'Deploy applications to cloud platforms',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in technical architecture decisions',
    ],
    benefits: [
      'Competitive salary and equity options',
      'Comprehensive health benefits',
      'Professional development budget',
      'Flexible work-from-home policy',
      '30 days annual leave',
      'Latest technology stack',
      'Conference attendance opportunities',
      'Stock options program',
    ],
    salaryRange: '£55,000 - £75,000',
  },
  {
    id: 'ui-ux-designer-001',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'London, UK / Remote',
    type: 'full-time',
    experience: '2-4 years',
    isActive: true,
    postedDate: '2025-01-07',
    description: 'We are looking for a creative UI/UX Designer to join our design team. You will be responsible for creating user-centered designs and improving user experiences across our digital products.',
    requirements: [
      'Proficiency in design tools like Figma, Adobe XD, or Sketch',
      'Strong understanding of user-centered design principles',
      'Experience with wireframing and prototyping',
      'Knowledge of responsive design and mobile-first approach',
      'Understanding of accessibility standards (WCAG)',
      'Basic knowledge of HTML/CSS is a plus',
      'Portfolio showcasing UI/UX projects',
      'Excellent communication and collaboration skills'
    ],
    responsibilities: [
      'Create wireframes, mockups, and interactive prototypes',
      'Conduct user research and usability testing',
      'Design user interfaces for web and mobile applications',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems and style guides',
      'Present design concepts to stakeholders',
      'Stay updated with latest design trends and best practices',
      'Optimize user journeys and conversion funnels'
    ],
    benefits: [
      'Competitive salary package',
      'Creative and inspiring work environment',
      'Latest design tools and software licenses',
      'Professional development and conference attendance',
      'Flexible working arrangements',
      '25 days annual leave plus bank holidays',
      'Health insurance coverage',
      'Team building activities and design workshops'
    ],
    salaryRange: '£35,000 - £50,000'
  }
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
