import { SectionHeaderProps } from "@/types";
import { cn } from "@/lib/utils";

export const SectionHeader = ({ title, description, className }: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
};
