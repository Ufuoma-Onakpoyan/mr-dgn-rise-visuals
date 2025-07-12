import React from 'react';
import { ArrowRight, Package, Layers, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
  const products = [
    {
      icon: Package,
      title: "High-Quality Solid Blocks",
      description: "Durable concrete blocks perfect for structural and architectural applications. Available in various sizes and finishes."
    },
    {
      icon: Layers,
      title: "Durable Interlocking Pavers",
      description: "Premium interlocking pavers for driveways, walkways, and outdoor spaces. Weather-resistant and easy to maintain."
    },
    {
      icon: Zap,
      title: "Premium Cement Products",
      description: "High-grade cement and concrete mixes for all construction needs. Tested for strength and reliability."
    },
    {
      icon: Shield,
      title: "Reliable Kerbs",
      description: "Precast concrete kerbs for road construction and landscaping. Built to withstand heavy traffic and weather conditions."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products & <span className="text-gradient">Materials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium construction materials and products manufactured to the highest industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="card-elevated hover-lift text-center">
              <CardHeader>
                <product.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="btn-construction group">
            <Link to="/products">
              View More Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;