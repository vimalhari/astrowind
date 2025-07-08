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
    description:
      'We are looking for a creative UI/UX Designer to join our design team. You will be responsible for creating user-centered designs and improving user experiences across our digital products.',
    requirements: [
      'Proficiency in design tools like Figma, Adobe XD, or Sketch',
      'Strong understanding of user-centered design principles',
      'Experience with wireframing and prototyping',
      'Knowledge of responsive design and mobile-first approach',
      'Understanding of accessibility standards (WCAG)',
      'Basic knowledge of HTML/CSS is a plus',
      'Portfolio showcasing UI/UX projects',
      'Excellent communication and collaboration skills',
    ],
    responsibilities: [
      'Create wireframes, mockups, and interactive prototypes',
      'Conduct user research and usability testing',
      'Design user interfaces for web and mobile applications',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems and style guides',
      'Present design concepts to stakeholders',
      'Stay updated with latest design trends and best practices',
      'Optimize user journeys and conversion funnels',
    ],
    benefits: [
      'Competitive salary package',
      'Creative and inspiring work environment',
      'Latest design tools and software licenses',
      'Professional development and conference attendance',
      'Flexible working arrangements',
      '25 days annual leave plus bank holidays',
      'Health insurance coverage',
      'Team building activities and design workshops',
    ],
    salaryRange: '£35,000 - £50,000',
  },
  {
    id: 'angular-dev-001',
    title: 'Angular Developer',
    department: 'Development',
    location: 'Chennai, India / Remote',
    type: 'full-time',
    experience: '2-5 years',
    isActive: true,
    postedDate: '2025-07-08',
    description:
      'We are seeking a skilled Angular Developer to join our growing development team in India. You will be responsible for developing dynamic web applications using Angular and TypeScript, working closely with our UK-based team.',
    requirements: [
      'Strong proficiency in Angular (version 12+) and TypeScript',
      'Solid understanding of JavaScript ES6+',
      'Experience with Angular CLI, RxJS, and NgRx',
      'Proficiency in HTML5, CSS3, and SCSS',
      'Knowledge of responsive design principles',
      'Experience with RESTful APIs and HTTP client',
      'Familiarity with Git version control',
      'Understanding of Angular testing frameworks (Jasmine, Karma)',
      'Experience with build tools and CI/CD pipelines',
      'Good communication skills in English',
    ],
    responsibilities: [
      'Develop and maintain Angular applications',
      'Write clean, efficient, and well-documented code',
      'Collaborate with cross-functional teams across different time zones',
      'Implement responsive and accessible user interfaces',
      'Optimize applications for performance and scalability',
      'Participate in code reviews and maintain coding standards',
      'Debug and troubleshoot application issues',
      'Stay updated with Angular best practices and new features',
    ],
    benefits: [
      'Competitive salary package (INR based)',
      'Health insurance for employee and family',
      'Professional development and training opportunities',
      'Flexible working hours to collaborate with UK team',
      'Work-from-home options',
      '21 days annual leave plus Indian holidays',
      'Performance-based bonuses',
      'Modern development tools and equipment',
    ],
    salaryRange: '₹6,00,000 - ₹12,00,000',
  },
  {
    id: 'astro-dev-001',
    title: 'Astro Developer',
    department: 'Development',
    location: 'Chennai, India / Remote',
    type: 'full-time',
    experience: '1-4 years',
    isActive: true,
    postedDate: '2025-07-08',
    description:
      'Join our innovative team as an Astro Developer! We are looking for a passionate developer to work with the modern Astro framework, building fast and efficient websites and web applications for our international clients.',
    requirements: [
      'Experience with Astro framework and its core concepts',
      'Strong proficiency in JavaScript/TypeScript',
      'Knowledge of HTML5, CSS3, and modern CSS frameworks (Tailwind CSS)',
      'Experience with component-based architecture',
      'Understanding of static site generation (SSG) and server-side rendering (SSR)',
      'Familiarity with React, Vue, or Svelte components',
      'Experience with Markdown and MDX',
      'Knowledge of Git and collaborative development',
      'Understanding of web performance optimization',
      'Good English communication skills',
    ],
    responsibilities: [
      'Develop modern websites and web applications using Astro',
      'Build reusable components and maintain component libraries',
      'Optimize websites for performance and SEO',
      'Collaborate with designers to implement pixel-perfect designs',
      'Integrate with headless CMS and external APIs',
      'Ensure cross-browser compatibility and responsive design',
      'Write maintainable and well-documented code',
      'Work with international teams and clients',
    ],
    benefits: [
      'Competitive salary package (INR based)',
      'Comprehensive health insurance',
      'Learning and development budget',
      'Flexible working arrangements',
      'Remote work opportunities',
      '21 days annual leave plus Indian holidays',
      'Latest development tools and technologies',
      'International project exposure',
    ],
    salaryRange: '₹4,00,000 - ₹10,00,000',
  },
  {
    id: 'it-sales-001',
    title: 'IT Sales Specialist',
    department: 'Sales',
    location: 'London, UK (Hybrid)',
    type: 'contract',
    experience: '2-6 years',
    isActive: true,
    postedDate: '2025-07-08',
    description:
      'We are seeking a dynamic IT Sales Specialist to join our sales team. This is a commission-only role with excellent earning potential for the right candidate. You will be responsible for generating leads, building client relationships, and closing deals for our IT services.',
    requirements: [
      'Proven track record in IT sales or technology sales',
      'Strong understanding of web development, digital marketing, and IT services',
      'Excellent communication and presentation skills',
      'Experience with CRM systems and sales processes',
      'Self-motivated and target-driven approach',
      'Ability to build and maintain client relationships',
      'Knowledge of the UK IT market and business landscape',
      'Negotiation and closing skills',
      "Bachelor's degree in Business, Marketing, or related field preferred",
    ],
    responsibilities: [
      'Generate and qualify leads through various channels',
      'Build and maintain relationships with potential clients',
      'Present our IT services and solutions to prospects',
      'Negotiate contracts and close deals',
      'Collaborate with technical teams to understand client requirements',
      'Maintain accurate records in CRM system',
      'Achieve monthly and quarterly sales targets',
      'Attend networking events and industry conferences',
    ],
    benefits: [
      'Commission-only structure with high earning potential',
      'Uncapped commission potential',
      'Comprehensive sales training program',
      'Flexible hybrid working arrangement',
      'Professional development opportunities',
      'Networking and industry conference support',
      'Performance incentives and bonuses',
      'Company car allowance or travel expenses',
    ],
    salaryRange: 'Commission Only (OTE: £40,000 - £80,000+)',
  },
  {
    id: 'senior-dev-001',
    title: 'Senior Full Stack Developer',
    department: 'Development',
    location: 'London, UK / Remote',
    type: 'full-time',
    experience: '5+ years',
    isActive: false,
    postedDate: '2025-06-15',
    description:
      'We are looking for a Senior Full Stack Developer to lead our development projects and mentor junior developers. This position requires extensive experience with modern web technologies and strong leadership skills.',
    requirements: [
      'Extensive experience with React, Node.js, and TypeScript',
      'Strong knowledge of database design and optimization',
      'Experience with cloud platforms (AWS, Azure, or Google Cloud)',
      'Leadership and mentoring experience',
      'Understanding of software architecture and design patterns',
      'Experience with DevOps and CI/CD pipelines',
      'Strong problem-solving and analytical skills',
      'Excellent communication and collaboration skills',
    ],
    responsibilities: [
      'Lead development of complex web applications',
      'Mentor and guide junior developers',
      'Make technical architecture decisions',
      'Conduct code reviews and ensure quality standards',
      'Collaborate with stakeholders on project requirements',
      'Research and implement new technologies',
      'Optimize application performance and scalability',
      'Participate in strategic planning and technical roadmap',
    ],
    benefits: [
      'Senior-level salary package',
      'Equity participation program',
      'Comprehensive benefits package',
      'Professional development budget',
      'Flexible remote work policy',
      '30 days annual leave',
      'Conference and training attendance',
      'Leadership development opportunities',
    ],
    salaryRange: '£65,000 - £85,000',
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
