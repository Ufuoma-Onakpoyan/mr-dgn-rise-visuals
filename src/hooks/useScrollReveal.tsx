import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  distance?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  once?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      delay = 0,
      duration = 600,
      distance = '30px',
      direction = 'up',
      scale = 0.95,
      once = true,
    } = options;

    // Initial state
    element.style.opacity = '0';
    element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    element.style.transitionDelay = `${delay}ms`;
    
    // Set initial transform based on direction
    const getInitialTransform = () => {
      const transforms = [];
      
      switch (direction) {
        case 'up':
          transforms.push(`translateY(${distance})`);
          break;
        case 'down':
          transforms.push(`translateY(-${distance})`);
          break;
        case 'left':
          transforms.push(`translateX(${distance})`);
          break;
        case 'right':
          transforms.push(`translateX(-${distance})`);
          break;
      }
      
      if (scale !== 1) {
        transforms.push(`scale(${scale})`);
      }
      
      return transforms.join(' ');
    };

    element.style.transform = getInitialTransform();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0) translateX(0) scale(1)';
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Animate out if not 'once'
            (entry.target as HTMLElement).style.opacity = '0';
            (entry.target as HTMLElement).style.transform = getInitialTransform();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return elementRef;
};

// Staggered animation hook for lists
export const useStaggeredScrollReveal = (itemCount: number, options: ScrollRevealOptions = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      delay = 0,
      duration = 600,
      distance = '30px',
      direction = 'up',
      scale = 0.95,
      once = true,
    } = options;

    const staggerDelay = 100; // 100ms between each item

    children.forEach((child, index) => {
      const itemDelay = delay + (index * staggerDelay);
      
      // Initial state
      child.style.opacity = '0';
      child.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      child.style.transitionDelay = `${itemDelay}ms`;
      
      // Set initial transform
      const getInitialTransform = () => {
        const transforms = [];
        
        switch (direction) {
          case 'up':
            transforms.push(`translateY(${distance})`);
            break;
          case 'down':
            transforms.push(`translateY(-${distance})`);
            break;
          case 'left':
            transforms.push(`translateX(${distance})`);
            break;
          case 'right':
            transforms.push(`translateX(-${distance})`);
            break;
        }
        
        if (scale !== 1) {
          transforms.push(`scale(${scale})`);
        }
        
        return transforms.join(' ');
      };

      child.style.transform = getInitialTransform();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];
            children.forEach((child) => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0) translateX(0) scale(1)';
            });
            
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [itemCount, options]);

  return containerRef;
};