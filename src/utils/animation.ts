/**
 * Animation utility functions
 */

export const getAnimationDelay = (index: number, delayMultiplier = 0.2): string => {
  return `${index * delayMultiplier}s`;
};

export const CARD_HOVER_CLASSES = "shadow-card hover:shadow-elegant transition-smooth";

export const CARD_BASE_CLASSES = "card-gradient border-border/50";
