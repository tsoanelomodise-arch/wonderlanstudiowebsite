
import React from 'react';
import { Palette, Rocket, Globe, Zap, Target, Cpu, Video } from 'lucide-react';
import { Project, Service, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Identity',
    category: 'Brand Design',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A complete visual overhaul for a forward-thinking tech consultancy, focusing on minimalism and technical precision.',
    client: 'Nexo Tech',
    year: '2023',
    tags: ['Branding', 'Strategy', 'UI/UX'],
    results: ['40% increase in brand recognition', 'Full visual systems delivered'],
  },
  {
    id: '2',
    title: 'Social Flux',
    category: 'Campaign',
    image: 'https://picsum.photos/800/1000?random=2',
    description: 'A multi-platform digital campaign designed to spark viral growth through high-energy motion design and bold typography.',
    client: 'Flux Media',
    year: '2023',
    tags: ['Campaign', 'Motion', 'Digital'],
    results: ['1.2M+ Reach', '25% higher engagement than previous quarter'],
  },
  {
    id: '3',
    title: 'Velocity E-Comm',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'A high-performance e-commerce platform built for speed and seamless mobile shopping experiences.',
    client: 'Velocity Retail',
    year: '2024',
    tags: ['Web Design', 'Development', 'E-commerce'],
    results: ['Sub-1s load times', '15% boost in conversion rate'],
  },
  {
    id: '4',
    title: 'Nectar Spirits',
    category: 'Packaging',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Premium spirits packaging that blends traditional artisanal aesthetics with modern luxury finishes.',
    client: 'Nectar Distilleries',
    year: '2023',
    tags: ['Packaging', 'Logotype', 'Print'],
    results: ['Winner of Design Excellence 2023', 'National distribution achieved'],
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
