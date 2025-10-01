import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Entegris",
    role: "Senior Art Director",
    type: "Full-time",
    location: "Billerica, MA",
    period: "04/2024 - 07/2025",
    current: true,
    description: "Creative lead for the organization, overseeing brand identity, design, and execution across channels. Developed and maintained brand guidelines to ensure consistency across global locations.",
    achievements: [
      "Partnered with project management to prioritize, assign, and review creative workloads, overseeing 500+ requests annually across global teams",
      "Directed multi-channel creative development, ensuring branding compliance and a cohesive global presence",
      "Collaborated across teams and vendors to produce high-quality creative, managing freelancers, agencies, and production partners"
    ]
  },
  {
    company: "PJC Creative",
    role: "Freelance Art Director",
    type: "Freelancer",
    location: "Greater Boston, MA", 
    period: "01/2015 - 04/2024",
    description: "Produced print and digital assets for clients in finance, retail, consulting, education, and SaaS, including campaign materials, infographics, packaging, presentations, and tradeshow materials.",
    achievements: [
      "Developed creative content for agency-led digital campaigns and paid search ads, achieving a return on ad spend (ROAS) exceeding 5x",
      "Designed consumer product packaging, social media content, and paid advertising campaigns to support product launches and brand growth"
    ]
  },
  {
    company: "Denim",
    role: "Senior Art Director", 
    type: "Full-time",
    location: "Remote",
    period: "04/2022 - 09/2023",
    description: "Led brand and design in a fast-paced, VC-backed SaaS startup, developing and launching a new brand identity and style guide applied across product, marketing, social, and digital channels.",
    achievements: [
      "Created a new identity system and developed a cohesive style guide used consistently across product, web, print, and marketing assets",
      "Drove a 200% increase in monthly revenue from paid ad channels through paid social content",
      "Developed foundational creative workflows: creative briefs, intake forms, project timelines, and review processes"
    ]
  },
  {
    company: "BNY Mellon - Data and Analytics Solutions",
    role: "Art Director",
    type: "Full-time", 
    location: "Wellesley, MA",
    period: "01/2019 - 01/2022",
    description: "Creative lead within BNY Mellon's internal agency for the Data and Analytics Solutions business, managing projects across print, digital, social, video, and experiential channels.",
    achievements: [
      "Developed the visual identity and marketing collateral for Pershing X, a new division launch",
      "Designed and produced brochures, white papers, infographics, social content, and event materials for both in-person and virtual experiences"
    ]
  },
  {
    company: "Eagle Investment Systems",
    role: "Art Director",
    type: "Full-time",
    location: "Wellesley, MA", 
    period: "04/2011 - 01/2019",
    description: "Created digital and print marketing across web, social, video, photography, and events. Led internal teams and vendors to deliver cohesive, on-brand campaigns.",
    achievements: [
      "Directed creative strategy and design for the annual user conference, driving 10%+ attendance growth",
      "Boosted email marketing engagement by developing and managing web and email content in Act-On, increasing open rates by ~20% and significantly reducing bounce rates"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over a decade of creative leadership across startups, corporations, and freelance projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elegant transition-smooth card-gradient border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
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
      {/* Additional Professional Experience moved from Education */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="shadow-card card-gradient border-border/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
              Additional Professional Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-muted-foreground mb-2">Art Director</h4>
                <p className="text-sm text-muted-foreground">Led cross-functional teams for quarterly consumer product catalogs and direct mail campaigns</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground mb-2">Senior Graphic Designer</h4>
                <p className="text-sm text-muted-foreground">Managed production artists and illustrators for major clients including Clairol, US West, and CVS</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground mb-2">Creative Production</h4>
                <p className="text-sm text-muted-foreground">Oversaw photo shoots and press checks to ensure flawless execution from concept to final production</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};