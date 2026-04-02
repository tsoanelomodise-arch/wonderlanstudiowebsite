
import React from 'react';
import { Palette, Rocket, Globe, Zap, Target, Cpu } from 'lucide-react';
import { Project, Service, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Identity',
    category: 'Brand Design',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: '2',
    title: 'Social Flux',
    category: 'Campaign',
    image: 'https://picsum.photos/800/1000?random=2',
  },
  {
    id: '3',
    title: 'Velocity E-Comm',
    category: 'Web Design',
    image: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: '4',
    title: 'Urban Beats OOH',
    category: 'Advertising',
    image: 'https://picsum.photos/800/800?random=4',
  },
  {
    id: '5',
    title: 'Nectar Spirits',
    category: 'Packaging',
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: '6',
    title: 'Future Summit',
    category: 'Event Identity',
    image: 'https://picsum.photos/800/1200?random=6',
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Brand Identity',
    description: 'We build living systems, not just logos. Strategy-first visual identities that scale.',
    icon: 'palette',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Campaign Creative',
    description: 'High-impact concepts for social, outdoor, and digital platforms that command attention.',
    icon: 'rocket',
    accent: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Web & Digital',
    description: 'Seamless experiences crafted with modern performance and conversion in mind.',
    icon: 'globe',
    accent: 'bg-brand-light text-brand',
  },
];

export const STATS: Stat[] = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '80+', label: 'Global Clients' },
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
