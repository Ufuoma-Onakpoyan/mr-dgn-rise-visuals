import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our portfolio of exceptional construction projects across different sectors and scales.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;