import React from 'react';
import { ArrowRight, Building, Hammer, Home, Wrench, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useScrollReveal, useStaggeredScrollReveal } from '@/hooks/useScrollReveal';

const ServicesOverviewSection = () => {
  const headerRef = useScrollReveal({ direction: 'up', delay: 100 });
  const servicesRef = useStaggeredScrollReveal(6, { direction: 'up', delay: 200 });
  const ctaRef = useScrollReveal({ direction: 'up', delay: 300 });
  
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Modern office buildings, retail spaces, and commercial complexes built to industry standards."
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential developments designed for comfort and durability."
    },
    {
      icon: Hammer,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public infrastructure projects that serve communities for generations."
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and modernization services."
    },
    {
      icon: Truck,
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely delivery and quality outcomes."
    },
    {
      icon: Shield,
      title: "Safety Consulting",
      description: "Comprehensive safety assessments and compliance management for construction sites."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs across Nigeria.
          </p>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-elevated hover-lift">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={ctaRef} className="text-center">
          <Button asChild size="lg" variant="outline" className="btn-construction-outline group">
            <Link to="/our-services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;