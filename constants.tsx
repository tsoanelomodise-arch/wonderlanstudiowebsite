
import React from 'react';
import { Palette, Rocket, Globe, Zap, Target, Cpu } from 'lucide-react';
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
    title: 'Brand Identity',
    description: 'We build living systems, not just logos. Strategy-first visual identities that scale.',
    icon: 'palette',
    accent: 'text-brand-gold',
  },
  {
    title: 'Campaign Creative',
    description: 'High-impact concepts for social, outdoor, and digital platforms that command attention.',
    icon: 'rocket',
    accent: 'text-brand-gold',
  },
  {
    title: 'Web, Apps & Digital Systems',
    description: 'Seamless experiences crafted with modern performance and conversion in mind.',
    icon: 'globe',
    accent: 'text-brand-gold',
  },
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
  zap: <Zap className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
};
