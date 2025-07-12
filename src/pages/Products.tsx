import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Package, Layers, Zap, Shield, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "High-Quality Solid Blocks",
      description: "Premium concrete blocks engineered for maximum strength and durability. Perfect for both structural and architectural applications.",
      features: ["Various sizes available", "Weather resistant", "High compressive strength", "Easy installation"],
      specifications: {
        "Compressive Strength": "20-40 MPa",
        "Sizes Available": "100mm, 150mm, 200mm",
        "Water Absorption": "< 10%",
        "Thermal Conductivity": "0.8 W/mK"
      }
    },
    {
      icon: Layers,
      title: "Durable Interlocking Pavers",
      description: "High-quality interlocking concrete pavers designed for driveways, walkways, patios, and outdoor spaces.",
      features: ["Interlocking design", "Multiple colors", "Slip-resistant surface", "Easy maintenance"],
      specifications: {
        "Thickness": "60mm, 80mm",
        "Compressive Strength": "50 MPa",
        "Colors": "Gray, Red, Yellow, Brown",
        "Pattern Options": "Herringbone, Running Bond"
      }
    },
    {
      icon: Zap,
      title: "Premium Cement Products",
      description: "Superior quality cement and concrete mixes formulated for optimal performance in all construction applications.",
      features: ["Fast setting", "High early strength", "Workability enhanced", "Consistent quality"],
      specifications: {
        "Compressive Strength": "42.5 MPa at 28 days",
        "Setting Time": "30 min initial, 600 min final",
        "Fineness": "300 m²/kg",
        "Grade": "OPC 43, OPC 53"
      }
    },
    {
      icon: Shield,
      title: "Reliable Kerbs",
      description: "Precast concrete kerbs engineered for road construction, landscaping, and boundary applications.",
      features: ["Machine finished", "Precise dimensions", "Heavy-duty design", "Long-lasting"],
      specifications: {
        "Length": "1000mm standard",
        "Height": "150mm, 225mm, 300mm",
        "Width": "100mm, 125mm, 150mm",
        "Load Bearing": "Class A, Class B"
      }
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "All products tested and certified to meet international standards"
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description: "Best value for money without compromising on quality"
    },
    {
      icon: Shield,
      title: "Warranty Coverage",
      description: "Comprehensive warranty on all manufactured products"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Premium Construction <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of high-quality construction materials and products, 
              manufactured to the highest industry standards for your building projects.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardHeader>
                  <product.icon className="h-16 w-16 text-primary mb-4" />
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="font-semibold mb-3">Specifications:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-construction">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our <span className="text-gradient">Products</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elevated text-center hover-lift">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;