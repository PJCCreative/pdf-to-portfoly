import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { EXPERIENCES, ADDITIONAL_ROLES } from "@/constants/experience";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { getAnimationDelay, CARD_HOVER_CLASSES, CARD_BASE_CLASSES } from "@/utils/animation";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Professional Experience"
          description="Over a decade of creative leadership across startups, corporations, and freelance projects"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <Card 
              key={index}
              className={cn(CARD_HOVER_CLASSES, CARD_BASE_CLASSES, "relative overflow-hidden")}
              style={{ animationDelay: getAnimationDelay(index, 0.1) }}
            >
              {exp.current && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-accent text-accent-foreground rounded-none rounded-bl-lg">
                    Current Position
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-foreground">
                      {exp.company}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                      <span className="font-semibold text-muted-foreground text-lg">{exp.role}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Additional Professional Experience */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className={cn("shadow-card", CARD_BASE_CLASSES)}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Additional Professional Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {ADDITIONAL_ROLES.map((role) => (
                <div key={role.title}>
                  <h4 className="font-semibold text-muted-foreground mb-2">{role.title}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};