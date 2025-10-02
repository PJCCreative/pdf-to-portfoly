import { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
}

export interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export interface BadgeListProps {
  items: string[];
  variant?: "default" | "outline";
  colorScheme?: "primary" | "accent";
  className?: string;
}
