import React from 'react';
import { MapPin, Clock, DollarSign, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CareerSection = () => {
  const jobOpenings = [
    {
      title: 'Senior Construction Manager',
      department: 'Project Management',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '₦95k - ₦120k',
      description: 'Lead large-scale construction projects from planning to completion.',
      requirements: ['10+ years experience', 'PMP Certification', 'Team Leadership']
    },
    {
      title: 'Site Safety Engineer',
      department: 'Safety & Compliance',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '₦75k - ₦95k',
      description: 'Ensure all safety protocols and compliance standards are met on construction sites.',
      requirements: ['Safety Certification', '5+ years experience', 'Risk Assessment']
    },
    {
      title: 'Structural Design Engineer',
      department: 'Engineering',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '₦80k - ₦105k',
      description: 'Design and analyze structural systems for high-rise and commercial buildings.',
      requirements: ['PE License', 'Structural Analysis', 'CAD Proficiency']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: Users,
      title: 'Diverse Team',
      description: 'Work with talented professionals from diverse backgrounds'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee appreciation and achievement recognition initiatives'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and professional development opportunities'
    }
  ];

  return (
    <section id="career" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Join Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with us. We're always looking for talented individuals who share our passion for excellence in construction.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className="card-elevated text-center hover-lift animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Current Openings</h3>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card 
                key={job.title}
                className="card-elevated hover-lift animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline">{job.department}</Badge>
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="btn-construction">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Don't See Your Role?</h3>
          <p className="text-xl mb-6 text-primary-foreground/90">
            We're always interested in meeting talented professionals. Send us your resume!
          </p>
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;