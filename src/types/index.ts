import { ReactNode } from 'react';

// Projekt
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

// Dovednost
export interface Skill {
  name: string;
  icon: ReactNode; // Změnit JSX.Element na ReactNode
  level: number;
}

// Data formuláře
export interface FormData {
    name: string;
    email: string;
    phone?: string; // nepovinné pole
    message: string;
  }

// Stav formuláře
export interface FormStatus {
  isSubmitting: boolean;
  message: string;
  isError: boolean;
}