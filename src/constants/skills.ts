import { Palette, Target, Lightbulb } from "lucide-react";
import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Creative Skills",
    icon: Palette,
    skills: [
      "Art Direction",
      "Brand Identity",
      "Concept Development",
      "Typography",
      "Visual Communications",
    ],
  },
  {
    title: "Leadership & Strategy",
    icon: Target,
    skills: [
      "Team Leadership",
      "Project Management",
      "Presentation Design",
      "Social Media Marketing",
    ],
  },
  {
    title: "Specialized Expertise",
    icon: Lightbulb,
    skills: [
      "Tradeshow & Environmental",
      "Campaign Development",
      "Brand Guidelines",
      "Creative Workflows",
    ],
  },
];

export const TOOLS: string[] = [
  "Adobe Creative Suite",
  "Adobe After Effects",
  "Adobe Firefly",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Photoshop",
  "Figma",
  "Webflow",
  "Midjourney",
  "ChatGPT",
  "Asana",
  "Lovable",
];
