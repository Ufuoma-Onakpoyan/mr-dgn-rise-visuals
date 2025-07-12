import React from 'react';
import { Building2, Construction, Hammer, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'High-Rise Construction',
      description: 'Specialized in constructing tall buildings with advanced engineering and safety protocols.',
      features: ['Structural Engineering', 'Safety Management', 'Quality Control']
    },
    {
      icon: Construction,
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including bridges, roads, and public facilities.',
      features: ['Project Management', 'Heavy Equipment', 'Timeline Optimization']
    },
    {
      icon: Hammer,
      title: 'Residential Projects',
      description: 'Custom homes and residential complexes built with attention to detail and quality.',
      features: ['Custom Design', 'Sustainable Materials', 'Energy Efficiency']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Comprehensive safety programs ensuring all projects meet regulatory standards.',
      features: ['Safety Training', 'Compliance Audits', 'Risk Management']
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'End-to-end project management from planning to completion and handover.',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance']
    },
    {
      icon: Zap,
      title: 'Renovation & Modernization',
      description: 'Updating and modernizing existing structures with contemporary standards.',
      features: ['Modern Technology', 'Energy Upgrades', 'Accessibility Improvements']
    }
  ];

  return (
    <section id="our-work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction services delivered by experienced professionals with cutting-edge technology and unwavering commitment to quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="card-elevated hover-lift group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">200+</div>
              <div className="text-primary-foreground/80">Expert Team</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;