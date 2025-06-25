// City data for dynamic web development landing pages
export interface CityData {
  name: string;
  slug: string;
  region: string;
  postcode: string;
  headline: string;
  subheading: string;
  metaDescription: string;
  metaKeywords: string[];
  heroDescription: string;
  aboutContent: string;
  servicesIntro: string;
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
  demographics: { population?: number; businessCount?: number; avgIncome?: string };
  nearbyAreas: string[];
  localLandmarks: string[];
  keyIndustries: string[];
  testimonialFocus?: string;
  caseStudyTags?: string[];
  serviceEmphasis?: string[];
}

export const cities: CityData[] = [
  {
    name: 'Slough',
    slug: 'slough',
    region: 'Berkshire',
    postcode: 'SL1',
    headline: 'Professional Web Development Services in Slough',
    subheading: 'Transform your business with cutting-edge websites designed for Slough companies',
    metaDescription:
      'Expert web development services in Slough, Berkshire. Custom websites, e-commerce solutions, and digital transformation for local businesses. Get your quote today.',
    metaKeywords: [
      'web development Slough',
      'website design Slough',
      'Slough web developers',
      'custom websites Berkshire',
      'e-commerce Slough',
      'responsive design',
      'digital transformation',
    ],
    heroDescription:
      "Partner with Slough's leading web development agency to create powerful, responsive websites that drive business growth and engage your customers.",
    aboutContent:
      "Based in the heart of Berkshire, we understand the unique business landscape of Slough. From the bustling trading estate to innovative tech companies, we've helped businesses across all sectors establish their digital presence.",
    servicesIntro:
      'Our comprehensive web development services are tailored to meet the diverse needs of Slough businesses, from start-ups to established enterprises.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.5906!3d51.5105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876749c7fb5db39%3A0x3e7b7b7b7b7b7b7b!2sSlough%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.5105, lng: -0.5906 },
    demographics: {
      population: 164793,
      businessCount: 8500,
      avgIncome: '£35,000',
    },
    nearbyAreas: ['Windsor', 'Maidenhead', 'Uxbridge', 'Heathrow', 'Langley'],
    localLandmarks: ['Slough Trading Estate', 'The Curve', 'Salt Hill Park', 'Slough High Street'],
    keyIndustries: ['Manufacturing', 'Logistics', 'Technology', 'Automotive', 'Pharmaceuticals'],
    testimonialFocus: 'manufacturing and tech companies',
    caseStudyTags: ['e-commerce', 'corporate-website', 'manufacturing'],
    serviceEmphasis: ['Custom Web Applications', 'E-commerce Solutions', 'Corporate Websites'],
  },
  {
    name: 'Windsor',
    slug: 'windsor',
    region: 'Berkshire',
    postcode: 'SL4',
    headline: 'Elegant Web Development Services in Windsor',
    subheading: "Premium website solutions for Windsor's distinguished business community",
    metaDescription:
      'Professional web development in Windsor, Berkshire. Elegant, high-performance websites for tourism, hospitality, and luxury businesses. Royal Borough approved quality.',
    metaKeywords: [
      'web development Windsor',
      'website design Windsor',
      'Windsor web developers',
      'tourism websites',
      'hospitality web design',
      'luxury brand websites',
      'Royal Borough',
    ],
    heroDescription:
      'Create sophisticated websites that reflect the prestige and heritage of Windsor, designed to attract visitors and showcase your business excellence.',
    aboutContent:
      'Serving the Royal Borough of Windsor and Maidenhead, we specialize in creating elegant digital solutions that match the sophistication of this historic town.',
    servicesIntro:
      "From luxury hospitality websites to heritage tourism platforms, our services cater to Windsor's unique business landscape.",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.6132!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sWindsor%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.4816, lng: -0.6132 },
    demographics: {
      population: 32203,
      businessCount: 2800,
      avgIncome: '£45,000',
    },
    nearbyAreas: ['Slough', 'Maidenhead', 'Eton', 'Old Windsor', 'Datchet'],
    localLandmarks: ['Windsor Castle', 'Windsor Great Park', 'Eton College', 'River Thames', 'Windsor High Street'],
    keyIndustries: ['Tourism', 'Hospitality', 'Retail', 'Heritage', 'Professional Services'],
    testimonialFocus: 'tourism and hospitality businesses',
    caseStudyTags: ['tourism', 'hospitality', 'heritage'],
    serviceEmphasis: ['Tourism Websites', 'Hotel & Restaurant Sites', 'Heritage Platforms'],
  },
  {
    name: 'Reading',
    slug: 'reading',
    region: 'Berkshire',
    postcode: 'RG1',
    headline: 'Innovative Web Development Services in Reading',
    subheading: "Cutting-edge digital solutions for Reading's thriving tech and business hub",
    metaDescription:
      'Leading web development company in Reading, Berkshire. Modern websites for tech companies, startups, and enterprises. Agile development and digital innovation.',
    metaKeywords: [
      'web development Reading',
      'website design Reading',
      'Reading web developers',
      'tech company websites',
      'startup web development',
      'enterprise solutions',
      'digital innovation',
    ],
    heroDescription:
      "Power your business with innovative web solutions designed for Reading's dynamic tech ecosystem and thriving business community.",
    aboutContent:
      'Located in the Thames Valley tech corridor, Reading is home to numerous multinational companies and innovative startups. We understand the fast-paced, technology-driven environment.',
    servicesIntro:
      "Our agile development approach and cutting-edge technologies make us the perfect partner for Reading's ambitious businesses.",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.9781!3d51.4543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sReading%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.4543, lng: -0.9781 },
    demographics: {
      population: 318014,
      businessCount: 15000,
      avgIncome: '£38,000',
    },
    nearbyAreas: ['Wokingham', 'Bracknell', 'Maidenhead', 'Henley-on-Thames', 'Caversham'],
    localLandmarks: [
      'Oracle Shopping Centre',
      'Reading Abbey',
      'Forbury Gardens',
      'River Thames',
      'Reading Festival site',
    ],
    keyIndustries: [
      'Technology',
      'Financial Services',
      'Telecommunications',
      'Software Development',
      'Pharmaceuticals',
    ],
    testimonialFocus: 'tech startups and enterprise companies',
    caseStudyTags: ['saas', 'fintech', 'enterprise'],
    serviceEmphasis: ['SaaS Platforms', 'Enterprise Applications', 'Startup MVPs'],
  },
  {
    name: 'Maidenhead',
    slug: 'maidenhead',
    region: 'Berkshire',
    postcode: 'SL6',
    headline: 'Professional Web Development Services in Maidenhead',
    subheading: "Bespoke websites for Maidenhead's discerning business community",
    metaDescription:
      'Expert web development in Maidenhead, Berkshire. Custom websites for professional services, retail, and local businesses. Thames Valley web specialists.',
    metaKeywords: [
      'web development Maidenhead',
      'website design Maidenhead',
      'Maidenhead web developers',
      'professional services websites',
      'Thames Valley',
      'bespoke web design',
      'local business websites',
    ],
    heroDescription:
      'Elevate your Maidenhead business with professionally crafted websites that combine aesthetic appeal with powerful functionality.',
    aboutContent:
      "Nestled along the Thames, Maidenhead boasts a vibrant business community. We create digital solutions that reflect the town's blend of tradition and modernity.",
    servicesIntro:
      'From professional service firms to riverside hospitality, we design websites that capture the essence of Maidenhead businesses.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.7190!3d51.5218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sMaidenhead%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.5218, lng: -0.719 },
    demographics: {
      population: 70374,
      businessCount: 4200,
      avgIncome: '£42,000',
    },
    nearbyAreas: ['Windsor', 'Slough', 'Marlow', 'Cookham', 'Taplow'],
    localLandmarks: ['Maidenhead Bridge', 'Ray Mill Island', 'Boulters Lock', 'Kidwells Park', 'High Street'],
    keyIndustries: ['Professional Services', 'Retail', 'Hospitality', 'Property', 'Healthcare'],
    testimonialFocus: 'professional services and retail businesses',
    caseStudyTags: ['professional-services', 'retail', 'property'],
    serviceEmphasis: ['Professional Service Sites', 'Retail E-commerce', 'Property Portals'],
  },
  {
    name: 'Bracknell',
    slug: 'bracknell',
    region: 'Berkshire',
    postcode: 'RG12',
    headline: 'Modern Web Development Services in Bracknell',
    subheading: "Digital solutions for Bracknell's innovative business landscape",
    metaDescription:
      'Professional web development in Bracknell, Berkshire. Modern websites for tech companies, new town businesses, and growing enterprises. Innovation-focused design.',
    metaKeywords: [
      'web development Bracknell',
      'website design Bracknell',
      'Bracknell web developers',
      'new town businesses',
      'tech company websites',
      'modern web design',
      'digital solutions',
    ],
    heroDescription:
      "Embrace the future with modern web solutions designed for Bracknell's forward-thinking business community and innovative companies.",
    aboutContent:
      "As one of England's new towns, Bracknell represents innovation and progress. We design websites that embody this spirit of modernization and growth.",
    servicesIntro:
      "Our contemporary approach to web development perfectly matches Bracknell's reputation for embracing new technologies and business practices.",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.7536!3d51.4144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sBracknell%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.4144, lng: -0.7536 },
    demographics: {
      population: 113205,
      businessCount: 6800,
      avgIncome: '£36,000',
    },
    nearbyAreas: ['Reading', 'Wokingham', 'Camberley', 'Ascot', 'Crowthorne'],
    localLandmarks: ['The Lexicon', 'South Hill Park', 'Great Hollands', 'Bracknell Forest', 'Town Centre'],
    keyIndustries: ['Technology', 'Software', 'Telecommunications', 'Research & Development', 'New Media'],
    testimonialFocus: 'tech companies and innovative startups',
    caseStudyTags: ['tech', 'software', 'startup'],
    serviceEmphasis: ['Tech Company Sites', 'Software Platforms', 'Innovation Portals'],
  },
  {
    name: 'High Wycombe',
    slug: 'high-wycombe',
    region: 'Buckinghamshire',
    postcode: 'HP11',
    headline: 'Creative Web Development Services in High Wycombe',
    subheading: "Inspiring digital solutions for High Wycombe's diverse business community",
    metaDescription:
      'Expert web development in High Wycombe, Buckinghamshire. Creative websites for furniture industry, manufacturing, and local businesses. Chilterns web specialists.',
    metaKeywords: [
      'web development High Wycombe',
      'website design High Wycombe',
      'High Wycombe web developers',
      'furniture industry websites',
      'manufacturing web design',
      'Buckinghamshire',
      'creative web solutions',
    ],
    heroDescription:
      "Craft exceptional websites that showcase High Wycombe's rich industrial heritage while embracing modern digital innovation.",
    aboutContent:
      'Famous for its furniture industry and nestled in the Chiltern Hills, High Wycombe combines traditional craftsmanship with modern business acumen.',
    servicesIntro:
      "From traditional furniture makers to modern manufacturers, we create websites that honor High Wycombe's heritage while driving future growth.",
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.7483!3d51.6279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sHigh%20Wycombe%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.6279, lng: -0.7483 },
    demographics: {
      population: 125257,
      businessCount: 7500,
      avgIncome: '£34,000',
    },
    nearbyAreas: ['Beaconsfield', 'Marlow', 'Amersham', 'Princes Risborough', 'Loudwater'],
    localLandmarks: ['Hughenden Manor', 'The Rye', 'West Wycombe Park', 'Disraeli Monument', 'High Street'],
    keyIndustries: ['Furniture Manufacturing', 'Design', 'Creative Industries', 'Retail', 'Professional Services'],
    testimonialFocus: 'furniture manufacturers and creative businesses',
    caseStudyTags: ['manufacturing', 'creative', 'furniture'],
    serviceEmphasis: ['Manufacturing Sites', 'Creative Portfolios', 'Craft Industry Platforms'],
  },
  {
    name: 'Uxbridge',
    slug: 'uxbridge',
    region: 'Greater London',
    postcode: 'UB8',
    headline: 'Strategic Web Development Services in Uxbridge',
    subheading: "Gateway digital solutions for London's western business corridor",
    metaDescription:
      "Professional web development in Uxbridge, London. Strategic websites for businesses at London's gateway. Corporate solutions and digital transformation.",
    metaKeywords: [
      'web development Uxbridge',
      'website design Uxbridge',
      'Uxbridge web developers',
      'London gateway',
      'corporate websites',
      'business solutions',
      'digital transformation',
    ],
    heroDescription:
      "Position your business at London's gateway with strategic web solutions designed for Uxbridge's thriving commercial district.",
    aboutContent:
      'As the gateway between London and the Home Counties, Uxbridge offers unique business opportunities. We create websites that leverage this strategic position.',
    servicesIntro:
      'Our strategic approach to web development helps Uxbridge businesses capitalize on their prime location and diverse market opportunities.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.4794!3d51.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sUxbridge%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.5461, lng: -0.4794 },
    demographics: {
      population: 70560,
      businessCount: 5200,
      avgIncome: '£37,000',
    },
    nearbyAreas: ['Hillingdon', 'West Drayton', 'Rickmansworth', 'Harefield', 'Ickenham'],
    localLandmarks: [
      'The Chimes Shopping Centre',
      'Uxbridge Common',
      'Battle of Britain Bunker',
      'Brunel University',
      'Grand Union Canal',
    ],
    keyIndustries: ['Business Services', 'Logistics', 'Education', 'Healthcare', 'Retail'],
    testimonialFocus: 'business services and logistics companies',
    caseStudyTags: ['business-services', 'logistics', 'education'],
    serviceEmphasis: ['Corporate Websites', 'Business Platforms', 'Educational Portals'],
  },
  {
    name: 'Heathrow',
    slug: 'heathrow',
    region: 'Greater London',
    postcode: 'TW6',
    headline: 'Global Web Development Services in Heathrow',
    subheading: "International digital solutions for the world's gateway businesses",
    metaDescription:
      'Expert web development near Heathrow Airport, London. Global-ready websites for aviation, logistics, and international businesses. Multi-language solutions.',
    metaKeywords: [
      'web development Heathrow',
      'website design Heathrow',
      'Heathrow web developers',
      'aviation websites',
      'airport businesses',
      'international solutions',
      'global web design',
    ],
    heroDescription:
      "Connect with global markets through sophisticated web solutions designed for businesses in the world's busiest aviation hub.",
    aboutContent:
      "Home to the world's busiest international airport, the Heathrow area hosts businesses with global reach and international ambitions.",
    servicesIntro:
      'From aviation services to international logistics, we create websites that reflect the global nature of Heathrow-area businesses.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.4543!3d51.4700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sHeathrow%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.47, lng: -0.4543 },
    demographics: {
      population: 14140,
      businessCount: 3800,
      avgIncome: '£41,000',
    },
    nearbyAreas: ['Hayes', 'Hounslow', 'Feltham', 'West Drayton', 'Harmondsworth'],
    localLandmarks: [
      'Heathrow Airport',
      'Heathrow Terminals',
      'M4/M25 Junction',
      'Cargo Area',
      'Airport Business Parks',
    ],
    keyIndustries: ['Aviation', 'Logistics', 'International Trade', 'Transport', 'Hospitality'],
    testimonialFocus: 'aviation and international logistics companies',
    caseStudyTags: ['aviation', 'logistics', 'international'],
    serviceEmphasis: ['Aviation Portals', 'Logistics Platforms', 'International Business Sites'],
  },
  {
    name: 'Staines-upon-Thames',
    slug: 'staines-upon-thames',
    region: 'Surrey',
    postcode: 'TW18',
    headline: 'Riverside Web Development Services in Staines-upon-Thames',
    subheading: 'Flowing digital solutions for Thames Valley businesses',
    metaDescription:
      'Professional web development in Staines-upon-Thames, Surrey. Elegant websites for riverside businesses, corporate headquarters, and Thames Valley companies.',
    metaKeywords: [
      'web development Staines',
      'website design Staines-upon-Thames',
      'Staines web developers',
      'Thames Valley websites',
      'riverside businesses',
      'Surrey web design',
      'corporate headquarters',
    ],
    heroDescription:
      "Flow seamlessly into the digital age with elegant web solutions crafted for Staines-upon-Thames' thriving business community.",
    aboutContent:
      'Positioned along the beautiful River Thames, Staines-upon-Thames combines natural beauty with commercial success, hosting numerous corporate headquarters.',
    servicesIntro:
      'Like the Thames itself, our web solutions flow smoothly, connecting Staines businesses with their customers and markets.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.5070!3d51.4316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sStaines-upon-Thames%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.4316, lng: -0.507 },
    demographics: {
      population: 51040,
      businessCount: 3400,
      avgIncome: '£39,000',
    },
    nearbyAreas: ['Egham', 'Windsor', 'Chertsey', 'Ashford', 'Laleham'],
    localLandmarks: ['River Thames', 'Staines Bridge', 'Lammas Park', 'Two Rivers Shopping Centre', 'Riverside'],
    keyIndustries: ['Corporate Services', 'Pharmaceuticals', 'Technology', 'Retail', 'Professional Services'],
    testimonialFocus: 'corporate headquarters and professional services',
    caseStudyTags: ['corporate', 'pharma', 'professional-services'],
    serviceEmphasis: ['Corporate Websites', 'Professional Platforms', 'Pharmaceutical Portals'],
  },
  {
    name: 'Egham',
    slug: 'egham',
    region: 'Surrey',
    postcode: 'TW20',
    headline: 'Academic Web Development Services in Egham',
    subheading: 'Scholarly digital solutions for education and research excellence',
    metaDescription:
      'Expert web development in Egham, Surrey. Academic websites, university platforms, and educational technology solutions. Royal Holloway web specialists.',
    metaKeywords: [
      'web development Egham',
      'website design Egham',
      'Egham web developers',
      'university websites',
      'academic platforms',
      'educational technology',
      'Royal Holloway',
    ],
    heroDescription:
      "Advance knowledge and learning with sophisticated web platforms designed for Egham's distinguished academic and research community.",
    aboutContent:
      'Home to Royal Holloway, University of London, Egham is a center of academic excellence and research innovation in the beautiful Surrey countryside.',
    servicesIntro:
      'From university departments to research institutions, we create digital platforms that support learning, discovery, and academic achievement.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19943.123456789!2d-0.5465!3d51.4260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d7b7b7b7b7b%3A0x3e7b7b7b7b7b7b7b!2sEgham%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk',
    coordinates: { lat: 51.426, lng: -0.5465 },
    demographics: {
      population: 25845,
      businessCount: 1800,
      avgIncome: '£36,000',
    },
    nearbyAreas: ['Staines-upon-Thames', 'Windsor', 'Virginia Water', 'Englefield Green', 'Thorpe'],
    localLandmarks: [
      'Royal Holloway University',
      'Runnymede',
      'Magna Carta Memorial',
      'Windsor Great Park',
      'Virginia Water Lake',
    ],
    keyIndustries: ['Education', 'Research', 'Academic Services', 'Technology Transfer', 'Consulting'],
    testimonialFocus: 'educational institutions and research organizations',
    caseStudyTags: ['education', 'research', 'academic'],
    serviceEmphasis: ['Educational Platforms', 'Research Portals', 'Academic Management Systems'],
  },
];

// Helper function to get city data by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

// Helper function to get all city slugs for static path generation
export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

// Helper function to validate city data completeness
export function validateCityData(city: CityData): boolean {
  const requiredFields = [
    'name',
    'slug',
    'region',
    'postcode',
    'headline',
    'subheading',
    'metaDescription',
    'metaKeywords',
    'heroDescription',
    'aboutContent',
    'servicesIntro',
    'mapEmbedUrl',
    'coordinates',
    'demographics',
    'nearbyAreas',
    'localLandmarks',
    'keyIndustries',
  ];

  return requiredFields.every((field) => {
    const value = city[field as keyof CityData];
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (typeof value === 'object') {
      return Object.keys(value).length > 0;
    }
    return value !== undefined && value !== null && value !== '';
  });
}
