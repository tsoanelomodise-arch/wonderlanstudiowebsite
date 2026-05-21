
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  client?: string;
  year?: string;
  tags?: string[];
  results?: string[];
}

export interface SubSection {
  title: string;
  description: string;
  bullets: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
  bullets?: string[];
  subsections?: SubSection[];
}

export interface Stat {
  value: string;
  label: string;
}
