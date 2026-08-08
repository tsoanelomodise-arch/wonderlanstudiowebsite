import { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS as DEFAULT_PROJECTS } from '../constants';

const LOCAL_STORAGE_KEY = 'wonderland_projects_v1';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const loadProjects = () => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing stored projects', e);
        setProjects(DEFAULT_PROJECTS);
      }
    } else {
      setProjects(DEFAULT_PROJECTS);
    }
  };

  useEffect(() => {
    loadProjects();

    const handleStorageChange = (e: Event) => {
      if (e instanceof StorageEvent) {
        if (e.key === LOCAL_STORAGE_KEY) {
          loadProjects();
        }
      } else if (e.type === 'wonderland-projects-changed') {
        loadProjects();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('wonderland-projects-changed', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wonderland-projects-changed', handleStorageChange);
    };
  }, []);

  const saveProjects = (updatedProjects: Project[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProjects));
    setProjects(updatedProjects);
    window.dispatchEvent(new CustomEvent('wonderland-projects-changed'));
  };

  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...projectData,
      id: 'p_' + Date.now().toString(),
    };
    saveProjects([...projects, newProject]);
  };

  const updateProject = (id: string, updatedData: Partial<Project>) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p));
    saveProjects(updated);
  };

  const deleteProject = (id: string) => {
    const filtered = projects.filter((p) => p.id !== id);
    saveProjects(filtered);
  };

  const reorderProjects = (fromIndex: number, toIndex: number) => {
    if (fromIndex < 0 || fromIndex >= projects.length || toIndex < 0 || toIndex >= projects.length) return;
    const result: Project[] = [...projects];
    const [removed] = result.splice(fromIndex, 1);
    result.splice(toIndex, 0, removed);
    saveProjects(result);
  };

  const resetToDefault = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    saveProjects(DEFAULT_PROJECTS);
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
    reorderProjects,
    resetToDefault,
  };
};
