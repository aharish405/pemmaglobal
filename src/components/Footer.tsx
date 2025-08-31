import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        variant="hero"
        size="icon"
        className="absolute -top-6 right-8 shadow-elegant hover:shadow-glow"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/51dc599a-61bc-44b9-ad8f-6d0d5f9f4dca.png" 
              alt="Pemma Global Consulting" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-background/80 mb-6 leading-relaxed max-w-md">
              Technology solutions company specializing in software development, 
              cloud services, and digital transformation. We focus on innovation, 
              scalability, and user-friendly solutions for businesses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:services@pemmaglobal.com" 
                className="flex items-center text-background/80 hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                services@pemmaglobal.com
              </a>
              <a 
                href="tel:+919032073072" 
                className="flex items-center text-background/80 hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform" />
                +91 9032073072
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Offices</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-primary mb-1">Andhra Pradesh</p>
                <p className="text-background/80 text-sm leading-relaxed">
                  5-171/A, Rajupalem, Bellamkonda, Guntur, Andhra Pradesh
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary mb-1">Hyderabad</p>
                <p className="text-background/80 text-sm leading-relaxed">
                  Cyber Crown, 5th Floor, Sector-II Village, HUDA Techno Enclave, 
                  Madhapur, Hyderabad, Telangana 500081
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-background/80 text-sm">
            © {new Date().getFullYear()} Pemma Global Consulting. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/company/pemma-global"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/pemmaglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/pemmaglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/10 text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;