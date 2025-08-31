import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern technology workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-background">Transforming Ideas Into</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-background/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering technology solutions that drive innovation, scalability, and success for businesses worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-background/20 text-background hover:bg-background/10"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">Software Development</h3>
              <p className="text-background/70 text-center">Custom solutions built with cutting-edge technologies</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">Cloud Solutions</h3>
              <p className="text-background/70 text-center">Scalable infrastructure and cloud migration services</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-background mb-2">Expert Consulting</h3>
              <p className="text-background/70 text-center">Strategic guidance for digital transformation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;