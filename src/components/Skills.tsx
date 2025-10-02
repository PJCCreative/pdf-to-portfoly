import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";
import { SKILL_CATEGORIES, TOOLS } from "@/constants/skills";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BadgeList } from "@/components/shared/BadgeList";
import { getAnimationDelay, CARD_HOVER_CLASSES, CARD_BASE_CLASSES } from "@/utils/animation";
import { cn } from "@/lib/utils";
export const Skills = () => {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Core Competencies"
          description="A comprehensive skill set spanning creative direction, team leadership, and cutting-edge design tools"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className={cn(CARD_HOVER_CLASSES, CARD_BASE_CLASSES)}
                style={{ animationDelay: getAnimationDelay(index) }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-semibold text-3xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BadgeList items={category.skills} colorScheme="accent" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className={cn("shadow-card", CARD_BASE_CLASSES)}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="font-semibold text-3xl">Design Tools & Technologies</CardTitle>
            <p className="text-muted-foreground">
              Professional expertise across industry-standard software and emerging AI tools
            </p>
          </CardHeader>
          <CardContent>
            <BadgeList items={TOOLS} colorScheme="primary" className="gap-3" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};