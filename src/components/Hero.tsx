import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/home-hero-blend.svg";
import { useState, useEffect } from "react";
export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll position (1 to 1.2 scale)
  const scale = 1 + scrollY / window.innerHeight * 0.2;
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background SVG art with scroll scale effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out" style={{
      backgroundImage: `url(${heroBackground})`,
      transform: `scale(${scale})`
    }} />
      
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full animate-float" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-float" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 glass-effect border-white/20 text-white">
              Senior Art Director
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Patrick
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent py-[4px]">
                Campagnone
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto py-[10px]">Hands-on Art Director with 10+ years of experience across digital, print, and environmental design. Proven success in driving engagement and measurable results!!!!!!!</p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8 text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Townsend, MA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>978-303-7936</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@pjccreative.com</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="glass-effect border-white/20 text-muted-foreground hover:bg-white/20 transition-smooth" asChild>
                <a href="http://www.pjccreative.com" target="_blank" rel="noopener noreferrer">
                  View Portfolio
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/30 text-muted-foreground hover:bg-white/10 transition-smooth" asChild>
                <a href="https://linkedin.com/in/patrick-campagnone" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>;
};