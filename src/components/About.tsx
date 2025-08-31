import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Pemma Global</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a technology solutions company specializing in software development, cloud services, 
            and digital transformation, focused on innovation, scalability, and user-friendly solutions for businesses.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses through innovative technology solutions that drive growth, 
                efficiency, and digital transformation in an ever-evolving marketplace.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading global technology partner, recognized for delivering 
                cutting-edge solutions that transform businesses and create lasting value.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, integrity, excellence, and customer-centricity guide everything we do. 
                We believe in building lasting partnerships through trust and quality.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground font-medium">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground font-medium">Support Available</p>
          </div>
        </div>

        {/* Team Introduction */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Meet Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Development Team</h4>
                <p className="text-muted-foreground">Expert developers with 10+ years of experience in cutting-edge technologies</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Consulting Experts</h4>
                <p className="text-muted-foreground">Strategic advisors specializing in digital transformation and business growth</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-12 w-12 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-2">Global Support</h4>
                <p className="text-muted-foreground">Worldwide support team ensuring 24/7 assistance and seamless service delivery</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;