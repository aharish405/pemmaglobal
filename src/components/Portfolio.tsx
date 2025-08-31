import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with modern design, advanced search capabilities, and seamless payment integration. Built for scalability and optimal user experience.",
      image: portfolio1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Application"
    },
    {
      title: "Business Analytics Dashboard",
      description: "Real-time analytics dashboard providing deep insights into business metrics, sales performance, and customer behavior with interactive data visualizations.",
      image: portfolio2,
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      category: "Data Analytics"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform streamlining patient management, appointment scheduling, and medical records with HIPAA compliance and mobile accessibility.",
      image: portfolio3,
      technologies: ["React Native", "Firebase", "Node.js", "AWS"],
      category: "Mobile App"
    },
    {
      title: "Cloud Infrastructure Migration",
      description: "Complete cloud migration project reducing operational costs by 40% while improving system reliability and performance for a Fortune 500 company.",
      image: portfolio2,
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      category: "Cloud Solutions"
    },
    {
      title: "Financial Trading Platform",
      description: "High-performance trading platform with real-time market data, advanced charting tools, and automated trading capabilities for institutional clients.",
      image: portfolio1,
      technologies: ["Angular", "Java", "Redis", "WebSocket"],
      category: "Fintech"
    },
    {
      title: "IoT Monitoring System",
      description: "Industrial IoT solution for real-time equipment monitoring, predictive maintenance, and operational efficiency optimization across multiple manufacturing sites.",
      image: portfolio3,
      technologies: ["Python", "InfluxDB", "MQTT", "React"],
      category: "IoT Solutions"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing successful projects that demonstrate our expertise in delivering 
            innovative technology solutions across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero/20"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="sm" className="group/btn p-2 h-auto">
                    <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ghost" size="sm" className="group/btn p-2 h-auto">
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-12 border shadow-card">
          <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear about your ideas and discuss how we can bring them to life. 
            Let's create something amazing together.
          </p>
          <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;