import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CareerSection from '@/components/CareerSection';

const Career = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Build Your <span className="text-primary">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our team of construction professionals and help us build the future together.
            </p>
          </div>
        </div>
      </section>

      <CareerSection />
      <Footer />
    </div>
  );
};

export default Career;