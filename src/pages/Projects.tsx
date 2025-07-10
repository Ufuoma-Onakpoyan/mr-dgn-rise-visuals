import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
const Projects = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      

      <ProjectsSection />
      <Footer />
    </div>;
};
export default Projects;