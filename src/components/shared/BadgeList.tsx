import { Badge } from "@/components/ui/badge";
import { BadgeListProps } from "@/types";
import { cn } from "@/lib/utils";

export const BadgeList = ({ 
  items, 
  variant = "outline", 
  colorScheme = "accent",
  className 
}: BadgeListProps) => {
  const colorClasses = colorScheme === "accent" 
    ? "bg-accent/5 text-accent border-accent/30 hover:bg-accent/10"
    : "bg-primary/5 text-primary border-primary/30 hover:bg-primary/10";

  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {items.map((item) => (
        <Badge
          key={item}
          variant={variant}
          className={cn(
            "text-sm py-2 px-4 transition-smooth",
            colorClasses
          )}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};
