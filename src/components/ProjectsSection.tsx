import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import projectHighrise from '@/assets/project-highrise.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectBridge from '@/assets/project-bridge.jpg';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Skyline Tower Complex',
      description: 'A 45-story mixed-use development featuring luxury residences and commercial spaces.',
      image: projectHighrise,
      category: 'High-Rise',
      location: 'Downtown Metropolitan',
      duration: '36 months',
      value: '$150M',
    },
    {
      id: 2,
      title: 'Heritage Residential Community',
      description: 'Modern residential complex with sustainable design and green building practices.',
      image: projectResidential,
      category: 'Residential',
      location: 'Suburban District',
      duration: '24 months',
      value: '$85M',
    },
    {
      id: 3,
      title: 'Corporate Business Center',
      description: 'State-of-the-art office complex with cutting-edge technology infrastructure.',
      image: projectCommercial,
      category: 'Commercial',
      location: 'Business Park',
      duration: '30 months',
      value: '$120M',
    },
    {
      id: 4,
      title: 'Metro Bridge Infrastructure',
      description: 'Critical infrastructure project connecting major transportation hubs.',
      image: projectBridge,
      category: 'Infrastructure',
      location: 'City Center',
      duration: '18 months',
      value: '$95M',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of outstanding construction projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 lg:h-[500px]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg opacity-90 mb-4 max-w-2xl">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.duration}
                        </div>
                        <div className="font-semibold">{project.value}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevProject}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextProject}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProject ? 'bg-primary' : 'bg-border'
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="card-elevated hover-lift group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description.substring(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>{project.duration}</span>
                  <span className="font-semibold text-primary">{project.value}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full group">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;