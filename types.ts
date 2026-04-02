
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Stat {
  value: string;
  label: string;
}
