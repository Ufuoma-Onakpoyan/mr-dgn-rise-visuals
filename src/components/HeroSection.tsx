import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';
import teamImage from '@/assets/team-diverse.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Construction site with crane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Building the 
              <span className="text-gradient block">Future</span>
              Together
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl">
              MrDGN Constructions delivers excellence in every project. From high-rise buildings to infrastructure, we build with precision, safety, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-construction group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="btn-construction-outline">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Team Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Diverse construction team"
                className="rounded-2xl shadow-construction hover-lift"
              />
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video placeholder overlay for future video integration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="text-sm">Scroll to explore</div>
      </div>
    </section>
  );
};

export default HeroSection;