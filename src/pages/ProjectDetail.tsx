import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, DollarSign, Users, Wrench, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import projectHighrise from '@/assets/project-highrise.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectBridge from '@/assets/project-bridge.jpg';
import projectWarehouse from '@/assets/project-warehouse.jpg';
import projectEducation from '@/assets/project-education.jpg';
import projectHealthcare from '@/assets/project-healthcare.jpg';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: 1,
      title: 'Skyline Tower Complex',
      description: 'A 45-story mixed-use development featuring luxury residences and commercial spaces with state-of-the-art amenities and sustainable design principles.',
      image: projectHighrise,
      category: 'High-Rise',
      location: 'Downtown Metropolitan',
      duration: '36 months',
      value: '₦150M',
      client: 'Metropolitan Development Corp',
      architect: 'Studio Alpha Architecture',
      planningDetails: 'This ambitious project required extensive planning coordination with city authorities, involving complex zoning approvals and environmental impact assessments. The design integrates mixed-use functionality with residential units on upper floors and commercial spaces at ground level.',
      structuralDesign: 'The tower features a reinforced concrete core with steel frame construction, designed to withstand seismic activity and high wind loads. Advanced engineering techniques ensure optimal structural integrity while maximizing usable space.',
      machines: ['Tower Cranes (3x)', 'Concrete Pumps', 'Excavators', 'Foundation Drilling Equipment', 'High-reach Demolition Equipment'],
      materials: ['High-strength Concrete', 'Structural Steel', 'Curtain Wall Systems', 'Fire-resistant Materials', 'Sound Insulation']
    },
    {
      id: 2,
      title: 'Heritage Residential Community',
      description: 'Modern residential complex with sustainable design and green building practices, featuring 200 family units with community amenities.',
      image: projectResidential,
      category: 'Residential',
      location: 'Suburban District',
      duration: '24 months',
      value: '₦85M',
      client: 'Green Living Developments',
      architect: 'EcoDesign Partners',
      planningDetails: 'Comprehensive master planning focused on sustainable living with integrated green spaces, community centers, and pedestrian-friendly pathways. The project emphasizes energy efficiency and environmental conservation.',
      structuralDesign: 'Low-rise construction utilizing sustainable materials and energy-efficient building techniques. Each unit features optimized natural lighting and ventilation systems.',
      machines: ['Mobile Cranes', 'Concrete Mixers', 'Excavators', 'Compactors', 'Landscaping Equipment'],
      materials: ['Eco-friendly Concrete', 'Recycled Steel', 'Solar Panels', 'Insulation Materials', 'Low-VOC Finishes']
    },
    {
      id: 3,
      title: 'Corporate Business Center',
      description: 'State-of-the-art office complex with cutting-edge technology infrastructure and modern workplace amenities for 2,000+ employees.',
      image: projectCommercial,
      category: 'Commercial',
      location: 'Business Park',
      duration: '30 months',
      value: '₦120M',
      client: 'TechCorp Industries',
      architect: 'Modern Workspace Design',
      planningDetails: 'Strategic planning focused on creating flexible workspace environments with advanced IT infrastructure, meeting facilities, and employee wellness areas. The design incorporates future expansion capabilities.',
      structuralDesign: 'Steel frame construction with large open floor plates allowing for flexible office configurations. Advanced HVAC and electrical systems support high-tech operations.',
      machines: ['Tower Cranes', 'Steel Erection Equipment', 'Concrete Pumps', 'Welding Equipment', 'Glass Installation Systems'],
      materials: ['Structural Steel', 'High-performance Glass', 'Advanced Concrete', 'Cable Management Systems', 'Acoustic Materials']
    },
    {
      id: 4,
      title: 'Metro Bridge Infrastructure',
      description: 'Critical infrastructure project connecting major transportation hubs with advanced engineering for heavy traffic loads.',
      image: projectBridge,
      category: 'Infrastructure',
      location: 'City Center',
      duration: '18 months',
      value: '₦95M',
      client: 'City Transportation Authority',
      architect: 'Infrastructure Engineering Ltd',
      planningDetails: 'Complex coordination with traffic management, environmental protection, and utility relocation. The project required phased construction to maintain traffic flow during construction.',
      structuralDesign: 'Prestressed concrete beam construction with reinforced foundations designed for 100-year service life. Advanced drainage and expansion joint systems ensure long-term durability.',
      machines: ['Bridge Girder Launchers', 'Pile Driving Equipment', 'Concrete Pumps', 'Heavy Lifting Cranes', 'Road Construction Equipment'],
      materials: ['Prestressed Concrete', 'High-grade Steel', 'Waterproofing Membranes', 'Expansion Joints', 'Protective Coatings']
    },
    {
      id: 5,
      title: 'Industrial Warehouse Complex',
      description: 'Modern logistics and distribution center with advanced automated systems and temperature-controlled storage facilities.',
      image: projectWarehouse,
      category: 'Industrial',
      location: 'Manufacturing District',
      duration: '20 months',
      value: '₦75M',
      client: 'LogiFlow Distribution',
      architect: 'Industrial Design Solutions',
      planningDetails: 'Optimized for efficient logistics operations with automated storage and retrieval systems. Planning included integration with existing transportation networks and utility infrastructure.',
      structuralDesign: 'Pre-engineered steel structure with clear span design for maximum operational flexibility. High-bay construction supports automated racking systems.',
      machines: ['Mobile Cranes', 'Steel Erection Equipment', 'Concrete Equipment', 'Roofing Equipment', 'Material Handling Systems'],
      materials: ['Pre-engineered Steel', 'Industrial Concrete', 'Insulation Systems', 'Roofing Materials', 'Electrical Infrastructure']
    },
    {
      id: 6,
      title: 'University Campus Expansion',
      description: 'Educational facility expansion with state-of-the-art learning environments, research labs, and student amenities.',
      image: projectEducation,
      category: 'Educational',
      location: 'Academic Quarter',
      duration: '28 months',
      value: '₦110M',
      client: 'State University System',
      architect: 'Educational Architecture Group',
      planningDetails: 'Academic programming focused on flexible learning spaces, research facilities, and collaborative areas. The design emphasizes natural lighting and sustainable construction practices.',
      structuralDesign: 'Mixed construction with concrete frame for laboratories and steel frame for large assembly spaces. Acoustic design ensures optimal learning environments.',
      machines: ['Tower Cranes', 'Concrete Pumps', 'Excavators', 'Steel Erection Equipment', 'Specialized Lab Equipment'],
      materials: ['High-performance Concrete', 'Structural Steel', 'Acoustic Materials', 'Laboratory Fixtures', 'Energy-efficient Systems']
    },
    {
      id: 7,
      title: 'Medical Center Complex',
      description: 'Advanced healthcare facility with specialized medical equipment and patient care areas, serving 500+ bed capacity.',
      image: projectHealthcare,
      category: 'Healthcare',
      location: 'Medical District',
      duration: '32 months',
      value: '₦180M',
      client: 'Regional Health System',
      architect: 'Healthcare Design Specialists',
      planningDetails: 'Specialized planning for medical facilities including infection control, emergency services, and complex utility systems. The design incorporates future expansion for medical technology advancement.',
      structuralDesign: 'Reinforced concrete construction with vibration isolation for sensitive medical equipment. Advanced HVAC systems maintain precise environmental controls.',
      machines: ['Medical Equipment Hoists', 'Clean Room Equipment', 'Specialized Cranes', 'HVAC Installation Equipment', 'Emergency Power Systems'],
      materials: ['Medical-grade Materials', 'Lead Shielding', 'Specialized Flooring', 'Air Filtration Systems', 'Emergency Backup Systems']
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <div className="animate-fade-in">
              <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Projects
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium text-primary-foreground">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{project.location}</p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{project.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Project Value</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{project.value}</p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Client</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{project.client}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Planning Details */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Layers className="h-6 w-6 text-primary mr-3" />
                  Planning & Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.planningDetails}
                </p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Architect:</span> {project.architect}</p>
                  <p><span className="font-semibold">Category:</span> {project.category}</p>
                </div>
              </CardContent>
            </Card>

            {/* Structural Design */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Wrench className="h-6 w-6 text-primary mr-3" />
                  Structural Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.structuralDesign}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Equipment & Materials */}
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Machines Used */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Machines & Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.machines.map((machine, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{machine}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Materials Used */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Materials & Components</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in a Similar <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss your construction needs and discover how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-construction" asChild>
              <Link to="/contact-us">Get A Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;