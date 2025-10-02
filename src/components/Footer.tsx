import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Linkedin,
  Globe
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const Footer = () => {
  return (
    <footer className="bg-muted-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to bring your creative vision to life? I'd love to discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-foreground/80" />
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-primary-foreground/80 transition-smooth"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-foreground/80" />
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-primary-foreground/80 transition-smooth"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-foreground/80" />
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Professional Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
            
            <div className="space-y-3">
              <a 
                href="http://www.pjccreative.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground/80 transition-smooth"
              >
                <Globe className="w-5 h-5" />
                Portfolio Website
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a 
                href="https://linkedin.com/in/patrick-campagnone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground/80 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            
            <div className="space-y-3">
              <Button 
                variant="secondary"
                className="w-full justify-start"
                asChild
              >
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="w-full justify-start border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="http://www.pjccreative.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  View Portfolio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Patrick Campagnone. Senior Art Director with 10+ years of creative leadership experience.
          </p>
        </div>
      </div>
    </footer>
  );
};