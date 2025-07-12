import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const OurServices = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive construction solutions designed to bring your vision to life with 
              precision, quality, and unmatched expertise.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>;
};
export default OurServices;