
import React from 'react';
import { Palette, Rocket, Globe, Zap, Target, Cpu, Video } from 'lucide-react';
import { Project, Service, Stat } from './types';

export const PROJECTS: Project[] = [
    {
    id: '5',
    title: 'Greenside Sport Med',
    category: 'Web Design',
    image: 'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmwebsite.png',
    images: [
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmwebsite.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmmobile.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/gsmipad.png'
    ],
    description: 'A dynamic, patient-centric web eco-system developed for an elite sports medicine and physician athletic recovery clinic.',
    client: 'Greenside Sport Med',
    year: '2026',
    tags: ['Web Design', 'UI/UX', 'Medical Systems'],
    results: ['Integrated custom reservation hub', 'Interactive athlete treatment tracking', 'Fully optimized desktop & mobile platform'],
  },
  {
    id: '6',
    title: 'Transformation Fund',
    category: 'Web Design',
    image: 'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Website_0.png',
    images: [
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Website_0.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Web_1.png',
      'https://donotdelete.wonderlandstudio.co.za/wswebsite/TF_Ipad_Mobile.png'
    ],
    description: 'A secure, high-performance web platform and user portal designed to streamline fund transparency, real-time grant metrics, and community-driven resource allocation.',
    client: 'Transformation Fund',
    year: '2026',
    tags: ['Web Design', 'UI/UX', 'Development'],
    results: ['Seamless cross-device portal responsiveness', 'Interactive allocation transparency dashboard', 'Sub-1s page transitions and metric loading'],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Website Design & Development',
    description: 'Wonderland Studio designs and develops modern, responsive, and user-friendly websites tailored to the specific needs of each client. The company creates websites that are visually engaging, mobile-optimized, performance-driven, and aligned with business objectives.',
    icon: 'globe',
    accent: 'text-brand-gold',
    bullets: [
      'Corporate websites',
      'E-commerce websites',
      'Portfolio websites',
      'Landing pages',
      'Custom web platforms',
      'Website maintenance and optimization'
    ]
  },
  {
    title: 'Branding & Visual Identity',
    description: 'The studio develops complete visual identity systems that help businesses establish strong and memorable brands. Their branding solutions are designed to communicate professionalism, authenticity, and market positioning.',
    icon: 'palette',
    accent: 'text-brand-gold',
    bullets: [
      'Logo design',
      'Brand identity development',
      'Brand strategy',
      'Typography systems',
      'Color palette development',
      'Brand guidelines',
      'Corporate stationery design'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Wonderland Studio provides strategic social media management services focused on increasing brand awareness, audience engagement, and online growth. The company creates and manages consistent digital communication across social platforms.',
    icon: 'target',
    accent: 'text-brand-gold',
    bullets: [
      'Social media strategy',
      'Content planning',
      'Community management',
      'Platform management',
      'Campaign management',
      'Audience engagement',
      'Performance reporting'
    ]
  },
  {
    title: 'Content Creation',
    description: 'The company produces high-quality digital content designed to capture attention and strengthen brand communication across online platforms.',
    icon: 'video',
    accent: 'text-brand-gold',
    bullets: [
      'Graphic design',
      'Promotional content',
      'Video content',
      'Motion graphics',
      'Photography',
      'Copywriting',
      'Marketing creatives',
      'Campaign visuals'
    ]
  },
  {
    title: 'Digital Advertising',
    description: 'Wonderland Studio develops and manages digital advertising campaigns aimed at improving visibility, generating leads, and increasing customer conversions.',
    icon: 'zap',
    accent: 'text-brand-gold',
    bullets: [
      'Google Ads',
      'Facebook Ads',
      'Instagram Ads',
      'Campaign strategy',
      'Audience targeting',
      'Conversion optimization',
      'Advertising analytics'
    ]
  },
  {
    title: 'Systems & Software Development',
    description: 'The company focuses on building high-quality, customized systems and native applications designed to streamline business operations and drive efficiency.',
    icon: 'cpu',
    accent: 'text-brand-gold',
    subsections: [
      {
        title: 'Custom System Development',
        description: 'Wonderland Studio develops custom digital systems designed to streamline operations, improve efficiency, and support scalable business growth. These systems are tailored to meet the unique operational requirements of each client.',
        bullets: [
          'Business management systems',
          'CRM systems',
          'Booking systems',
          'Workflow automation platforms',
          'Inventory management systems',
          'Internal operational systems',
          'Cloud-based solutions'
        ]
      },
      {
        title: 'Mobile App Development',
        description: 'The company designs and develops modern mobile applications for Android and iOS platforms. Their mobile solutions prioritize usability, performance, functionality, and user engagement.',
        bullets: [
          'Business applications',
          'E-commerce apps',
          'Booking applications',
          'Customer service apps',
          'Community platforms',
          'Educational apps',
          'On-demand service applications'
        ]
      },
      {
        title: 'Web Application Development',
        description: 'Wonderland Studio builds scalable web applications that enable businesses to operate efficiently in digital environments. These applications are designed for accessibility, flexibility, and performance across multiple devices.',
        bullets: [
          'Client portals',
          'Dashboard systems',
          'Membership platforms',
          'SaaS platforms',
          'Online learning systems',
          'Booking platforms',
          'Data management systems'
        ]
      },
      {
        title: 'UI/UX Design',
        description: 'The company focuses on creating intuitive and visually engaging user experiences that improve usability and customer interaction across digital products and platforms.',
        bullets: [
          'User interface design',
          'User experience strategy',
          'Wireframing',
          'Interactive prototypes',
          'User journey mapping',
          'Responsive design optimization'
        ]
      },
      {
        title: 'System Integration & Automation',
        description: 'Wonderland Studio integrates digital platforms and automates operational workflows to improve business efficiency and streamline processes.',
        bullets: [
          'API integrations',
          'Payment gateway integrations',
          'Cloud integrations',
          'Workflow automation',
          'Third-party software connectivity',
          'Data synchronization systems'
        ]
      },
      {
        title: 'Maintenance & Technical Support',
        description: 'The studio provides ongoing technical support and maintenance services to ensure digital platforms, systems, and applications remain secure, optimized, and fully functional.',
        bullets: [
          'System monitoring',
          'Software updates',
          'Bug fixing',
          'Security enhancements',
          'Technical troubleshooting',
          'Performance optimization'
        ]
      }
    ]
  }
];

export const STATS: Stat[] = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '35 +', label: 'Clients' },
  { value: '10Y', label: 'Experience' },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  palette: <Palette className="w-6 h-6" />,
  rocket: <Rocket className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  video: <Video className="w-6 h-6" />,
};
