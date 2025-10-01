import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Target, Users, Presentation, Lightbulb, BarChart3, Code, Monitor } from "lucide-react";
const skillCategories = [{
  title: "Creative Skills",
  icon: Palette,
  skills: ["Art Direction", "Brand Identity", "Concept Development", "Typography", "Visual Communications"]
}, {
  title: "Leadership & Strategy",
  icon: Target,
  skills: ["Team Leadership", "Project Management", "Presentation Design", "Social Media Marketing"]
}, {
  title: "Specialized Expertise",
  icon: Lightbulb,
  skills: ["Tradeshow & Environmental", "Campaign Development", "Brand Guidelines", "Creative Workflows"]
}];
const tools = ["Adobe Creative Suite", "Adobe After Effects", "Adobe Firefly", "Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop", "Figma", "Webflow", "Midjourney", "ChatGPT", "Asana", "Lovable"];
export const Skills = () => {
  return <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Core Competencies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning creative direction, team leadership, and cutting-edge design tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <Card key={category.title} className="shadow-card hover:shadow-elegant transition-smooth card-gradient border-border/50" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-semibold text-3xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map(skill => <Badge key={skill} variant="outline" className="text-sm py-2 px-4 bg-primary/5 text-primary border-primary/30 hover:bg-primary/10 transition-smooth">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Tools Section */}
        <Card className="shadow-card card-gradient border-border/50">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="font-semibold text-3xl">Design Tools & Technologies</CardTitle>
            <p className="text-muted-foreground">Professional expertise across industry-standard software and emerging AI tools</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map(tool => <Badge key={tool} variant="outline" className="text-sm py-2 px-4 bg-primary/5 text-primary border-primary/30 hover:bg-primary/10 transition-smooth">
                  {tool}
                </Badge>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};