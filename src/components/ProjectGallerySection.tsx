import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectBridge from '@/assets/project-bridge.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectHighrise from '@/assets/project-highrise.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectWarehouse from '@/assets/project-warehouse.jpg';
import projectEducation from '@/assets/project-education.jpg';
import projectHealthcare from '@/assets/project-healthcare.jpg';

const ProjectGallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      image: projectHighrise,
      title: "Skyline Tower Complex",
      description: "45-story mixed-use development"
    },
    {
      image: projectResidential,
      title: "Heritage Residential Community",
      description: "Sustainable residential complex"
    },
    {
      image: projectCommercial,
      title: "Corporate Business Center",
      description: "State-of-the-art office complex"
    },
    {
      image: projectBridge,
      title: "Metro Bridge Infrastructure",
      description: "Critical transportation infrastructure"
    },
    {
      image: projectWarehouse,
      title: "Industrial Warehouse Complex",
      description: "Modern logistics distribution center"
    },
    {
      image: projectEducation,
      title: "University Campus Expansion",
      description: "Educational facility expansion"
    },
    {
      image: projectHealthcare,
      title: "Medical Center Complex",
      description: "Advanced healthcare facility"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="font-semibold text-xl md:text-2xl mb-2">{project.title}</h3>
                      <p className="text-sm md:text-base text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary scale-110 shadow-lg' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-construction group"
            asChild
          >
            <a 
              href="https://www.instagram.com/mrdgn_constructions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;