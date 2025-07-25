import * as React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsletterModal from './NewsletterModal';
import mrdgnLogo from '@/assets/mrdgn-logo-full.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Footer = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = React.useState(false);
  const currentYear = new Date().getFullYear();
  
  const footerRef = useScrollReveal({ direction: 'up', delay: 100 });

  const footerLinks = {
    services: [
      { label: 'High-Rise Construction', href: '#' },
      { label: 'Infrastructure Development', href: '#' },
      { label: 'Residential Projects', href: '#' },
      { label: 'Commercial Buildings', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    resources: [
      { label: 'Project Gallery', href: '/projects' },
      { label: 'Safety Guidelines', href: '#' },
      { label: 'Quality Standards', href: '#' },
      { label: 'Documentation', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div ref={footerRef} className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src="/lovable-uploads/a7577d6b-f00d-4bba-b381-f68beacb436c.png" alt="MR DGN Constructions" className="h-12 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Building excellence across Nigeria for over 25 years. Your trusted partner for all construction needs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+2348135324467</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>constructions@mrdgngroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Okpanam, Delta State</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <p className="text-sm text-secondary-foreground/80 mb-3">
                Get project updates and construction tips
              </p>
              <Button 
                className="btn-construction w-full" 
                size="sm"
                onClick={() => setIsNewsletterModalOpen(true)}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-secondary-foreground/80">
              © {currentYear} MR DGN Constructions. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;