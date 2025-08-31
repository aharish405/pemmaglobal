import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cloud, Users, Zap, ArrowRight } from "lucide-react";
import softwareDevImage from "@/assets/software-dev.jpg";
import cloudServicesImage from "@/assets/cloud-services.jpg";
import consultingImage from "@/assets/consulting.jpg";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies and best practices. From web applications to mobile apps, we deliver scalable and maintainable code.",
      features: [
        "Full-stack web development",
        "Mobile app development",
        "API development & integration",
        "Legacy system modernization"
      ],
      image: softwareDevImage
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, optimization, and management. We help businesses leverage the power of cloud computing for enhanced scalability.",
      features: [
        "Cloud migration services",
        "Infrastructure optimization",
        "DevOps & CI/CD pipelines",
        "Cloud security & monitoring"
      ],
      image: cloudServicesImage
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to help businesses make informed decisions about their IT infrastructure and digital transformation initiatives.",
      features: [
        "Technology strategy planning",
        "System architecture design",
        "Performance optimization",
        "Security assessments"
      ],
      image: consultingImage
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services that modernize business processes and improve operational efficiency through technology innovation.",
      features: [
        "Process automation",
        "Digital workflow design",
        "Data analytics & insights",
        "Change management support"
      ],
      image: consultingImage
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-background/90 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your business forward 
            and help you achieve your digital transformation goals.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;