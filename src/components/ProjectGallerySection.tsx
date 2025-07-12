import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectBridge from '@/assets/project-bridge.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectHighrise from '@/assets/project-highrise.jpg';
import projectResidential from '@/assets/project-residential.jpg';

const ProjectGallerySection = () => {
  const projects = [
    {
      image: projectBridge,
      title: "Modern Bridge Construction",
      description: "Infrastructure project completed in 2023"
    },
    {
      image: projectCommercial,
      title: "Commercial Complex",
      description: "Mixed-use development project"
    },
    {
      image: projectHighrise,
      title: "High-Rise Building",
      description: "Luxury residential tower"
    },
    {
      image: projectResidential,
      title: "Residential Development",
      description: "Family housing community"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-construction group">
            <Instagram className="mr-2 h-5 w-5" />
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;