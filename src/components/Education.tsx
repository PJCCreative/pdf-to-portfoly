import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Users } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Education & Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and community involvement that shapes my creative approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth card-gradient border-border/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Bachelor of Arts (BA)
              </h3>
              <p className="text-lg text-muted-foreground mb-3">
                Communications Media
              </p>
              <Badge variant="secondary" className="mb-4 bg-primary/5 text-primary border-primary/20">
                Concentration in Graphic Design
              </Badge>
              <p className="text-muted-foreground font-medium">
                Fitchburg State University
              </p>
            </CardContent>
          </Card>

          {/* Volunteering Card */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth card-gradient border-border/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">Community Leadership</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-semibold text-accent mb-2">
                Youth U5-6 Coach
              </h3>
              <p className="text-lg text-muted-foreground mb-3">
                Townsend Ashby Youth Soccer Association
              </p>
              <Badge variant="outline" className="mb-4 bg-accent/5 text-accent border-accent/30">
                Volunteer Leadership
              </Badge>
              <p className="text-muted-foreground font-medium mb-4">
                Townsend, Massachusetts
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Building teamwork and creativity in young athletes</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Experience Summary */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="shadow-card card-gradient border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">
                Additional Professional Experience
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Art Director</h4>
                  <p className="text-sm text-muted-foreground">Led cross-functional teams for quarterly consumer product catalogs and direct mail campaigns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Senior Graphic Designer</h4>
                  <p className="text-sm text-muted-foreground">Managed production artists and illustrators for major clients including Clairol, US West, and CVS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Creative Production</h4>
                  <p className="text-sm text-muted-foreground">Oversaw photo shoots and press checks to ensure flawless execution from concept to final production</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};