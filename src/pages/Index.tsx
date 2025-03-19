
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Layers, LayoutGrid, Server, ShoppingCart } from 'lucide-react';

const LogoShowcase = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 my-20">
      <h2 className="text-2xl md:text-3xl font-display font-medium text-center">Our Logo</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <Logo size="lg" withText={false} />
          <span className="text-sm text-nexus-darkGray">Icon Only</span>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <Logo size="lg" variant="simple" withText={false} />
          <span className="text-sm text-nexus-darkGray">Simple Icon</span>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <Logo size="lg" />
          <span className="text-sm text-nexus-darkGray">Full Logo</span>
        </div>
        
        <div className="flex flex-col items-center gap-3 bg-nexus-darkBlue p-4 rounded-xl">
          <Logo size="lg" className="text-white" />
          <span className="text-sm text-white">Inverted</span>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
    <div className="h-12 w-12 rounded-xl bg-nexus-blue/10 flex items-center justify-center mb-4">
      <Icon size={24} className="text-nexus-blue" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-nexus-darkGray">{description}</p>
  </div>
);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(1, scrollY / 500);
      const translateY = scrollY * 0.3;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-nexus-gray to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className="flex flex-col items-center text-center transition-all duration-300">
            <Logo size="lg" className="mb-8" />
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-3xl">
              Software & E-commerce <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-nexus-darkGray max-w-2xl mb-10">
              Connecting your business to the digital world with seamless software services and e-commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="px-6 py-3 bg-nexus-blue text-white rounded-full font-medium hover:bg-nexus-darkBlue transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-nexus-darkGray border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <LogoShowcase />
      
      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-medium text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Code} 
              title="Custom Software Development" 
              description="Tailored solutions designed to meet your specific business requirements with scalability in mind."
            />
            <FeatureCard 
              icon={ShoppingCart} 
              title="E-commerce Solutions" 
              description="End-to-end online store development with seamless payment integration and inventory management."
            />
            <FeatureCard 
              icon={LayoutGrid} 
              title="UI/UX Design" 
              description="Intuitive and engaging user experiences that keep your customers coming back."
            />
            <FeatureCard 
              icon={Server} 
              title="Cloud Infrastructure" 
              description="Secure and scalable cloud solutions for optimal performance and reliability."
            />
            <FeatureCard 
              icon={Layers} 
              title="Business Intelligence" 
              description="Data-driven insights to help you make informed business decisions."
            />
            <FeatureCard 
              icon={Globe} 
              title="Digital Transformation" 
              description="Comprehensive strategies to evolve your business in the digital age."
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="md" />
            <p className="text-nexus-darkGray mt-2">Software & E-commerce Solutions</p>
          </div>
          <div className="flex gap-8">
            <Link to="/services" className="text-nexus-darkGray hover:text-nexus-blue transition-colors">Services</Link>
            <Link to="/about" className="text-nexus-darkGray hover:text-nexus-blue transition-colors">About</Link>
            <Link to="/contact" className="text-nexus-darkGray hover:text-nexus-blue transition-colors">Contact</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 text-center text-nexus-darkGray text-sm">
          © {new Date().getFullYear()} NexusNao. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
