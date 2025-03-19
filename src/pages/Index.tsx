
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import { ArrowRight, Code, Globe, Layers, LayoutGrid, Mail, Server, ShoppingCart, User, Cpu, Database, Braces } from 'lucide-react';

const FounderCard = ({ name, role, image, description }: { 
  name: string; 
  role: string;
  image: string;
  description: string; 
}) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
    <div className="flex flex-col items-center">
      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#F59E0B] p-1 mb-4">
        <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <User size={40} className="text-nexus-darkGray" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-[#8B5CF6] font-medium mb-4">{role}</p>
      <p className="text-nexus-darkGray text-center">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]">
    <div className="h-12 w-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4">
      <Icon size={24} className="text-[#3B82F6]" />
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
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] bg-fixed">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-fixed bg-no-repeat bg-cover opacity-70 z-0"></div>
      <div className="relative z-10">
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
            </div>
          </div>
        </section>
        
        {/* Founders Section */}
        <section className="py-20 px-6" id="about">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-center mb-12">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <FounderCard 
                name="Muhammad Usman" 
                role="Founder" 
                image="/founder.jpg"
                description="Visionary tech entrepreneur with expertise in software development and e-commerce solutions. Leading NexusNao to create innovative digital experiences for businesses worldwide."
              />
              <FounderCard 
                name="Muhammad Noman" 
                role="Co-Founder" 
                image="/co-founder.jpg"
                description="Strategic business leader with a passion for digital transformation. Driving NexusNao's mission to connect businesses with cutting-edge technology solutions."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6" id="services">
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
                icon={Braces} 
                title="Legacy Code Conversion" 
                description="Modernize your outdated systems by converting legacy code to current technologies and frameworks."
              />
              <FeatureCard 
                icon={Cpu} 
                title="AI Solutions" 
                description="Leverage artificial intelligence to automate processes, gain insights, and create intelligent applications."
              />
              <FeatureCard 
                icon={Database} 
                title="ML Implementation" 
                description="Implement machine learning models to analyze data, predict trends, and enhance decision-making."
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
        
        {/* Contact Section */}
        <section className="py-16 px-6" id="contact">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-center mb-12">Contact Us</h2>
            <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex flex-col items-center justify-center text-center mb-8">
                <Mail className="text-[#3B82F6] h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-nexus-darkGray">Have a project in mind? Let's discuss how we can help your business grow.</p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-nexus-darkGray mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nexus-darkGray mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-nexus-darkGray mb-1">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nexus-darkGray mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#F59E0B] text-white py-3 rounded-md font-medium hover:opacity-90 transition-opacity">Send Message</button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm py-12 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo size="md" />
              <p className="text-nexus-darkGray mt-2">Software & E-commerce Solutions</p>
            </div>
            <div className="flex gap-8">
              <a href="#services" className="text-nexus-darkGray hover:text-[#3B82F6] transition-colors">Services</a>
              <a href="#about" className="text-nexus-darkGray hover:text-[#3B82F6] transition-colors">About</a>
              <a href="#contact" className="text-nexus-darkGray hover:text-[#3B82F6] transition-colors">Contact</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 text-center text-nexus-darkGray text-sm">
            © {new Date().getFullYear()} NexusNao. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
