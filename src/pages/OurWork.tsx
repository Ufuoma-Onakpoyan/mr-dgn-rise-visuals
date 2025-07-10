import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const OurWork = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of construction services and expertise across various sectors.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  );
};

export default OurWork;