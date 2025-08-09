import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import {
  ArrowRight,
  Code,
  Globe,
  Layers,
  LayoutGrid,
  Mail,
  Server,
  ShoppingCart,
  User,
  Cpu,
  Database,
  Braces,
  Linkedin,
  Phone,
} from "lucide-react";
import emailjs from "emailjs-com";

// FounderCard Component
const FounderCard = ({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) => (
  <div className="gradient-card rounded-3xl shadow-modern-xl p-8 transition-bounce hover-lift group overflow-hidden relative border border-primary/10">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div className="flex flex-col items-center relative z-10">
      <div className="h-28 w-28 rounded-full gradient-blue p-1 mb-6 shadow-modern-xl transform transition-bounce group-hover:scale-110 group-hover:rotate-6">
        <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <User size={42} className="text-gray-700" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-primary">
        {name}
      </h3>
      <p className="text-accent font-semibold mb-4 tracking-wide">{role}</p>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  </div>
);

// FeatureCard Component
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="gradient-card rounded-3xl shadow-modern-xl p-8 transition-bounce hover-lift group overflow-hidden relative border border-primary/10">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div className="relative z-10">
      <div className="icon-container icon-glow h-16 w-16 rounded-3xl flex items-center justify-center mb-6">
        <Icon size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

// Fixed ConsultationButton Component
const ConsultationButton = () => (
  <a
    href="https://calendly.com/nexusnao1/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 gradient-blue text-primary-foreground font-semibold rounded-2xl hover:opacity-90 transition-bounce shadow-modern hover:shadow-modern-xl transform hover:-translate-y-2 hover:scale-105 text-lg"
  >
    Book a Free Consultation
    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
  </a>
);

// Main Index Component
const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    emailjs.init("82cOy135MqonyZIZH");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8edesho",
        "template_cuyc0yx",
        e.target as HTMLFormElement
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768 && heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - Math.min(1, scrollY / 500);
        const translateY = scrollY * 0.3;
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-subtle bg-fixed">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] bg-fixed bg-repeat opacity-20 z-0"></div>
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-36 md:pt-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              ref={heroRef}
              className="flex flex-col items-center text-center transition-all duration-500"
            >
              <div className="mb-10 transform hover:scale-105 transition-transform duration-300">
                <Logo size="lg" className="filter drop-shadow-lg" />
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 max-w-4xl leading-tight">
                Software & E-commerce{" "}
                <span className="text-primary">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                Connecting your business to the digital world with seamless
                software services and e-commerce solutions.
              </p>
              <div className="mt-10">
                <ConsultationButton />
              </div>
            </div>
          </div>
        </section>

        {/* Animated Divider */}
        <div className="relative h-32 my-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-20 bg-gradient-to-r from-[#1E40AF]/10 via-[#EA384C]/10 to-[#000000]/10 transform -skew-y-3"></div>
          </div>
        </div>

        {/* Founders Section */}
        <section className="py-24 px-6" id="about">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#000000]">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Visionary experts committed to delivering exceptional digital
              experiences
            </p>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
        <section
          className="py-24 px-6 bg-gradient-to-b from-background/50 to-secondary/30"
          id="services"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#000000]">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Comprehensive solutions tailored to elevate your business in the
              digital landscape
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Enhanced Contact Section */}
        <section className="py-24 px-6" id="contact">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] to-[#000000]">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our
              digital expertise
            </p>
            <div className="max-w-2xl mx-auto glass rounded-3xl shadow-modern p-10 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1E40AF] via-[#EA384C] to-[#000000]"></div>
              <div className="flex flex-col items-center justify-center text-center mb-10">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[#1E40AF]/20 to-[#1E40AF]/10 flex items-center justify-center mb-6">
                  <Mail className="text-[#1E40AF] h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  Get in Touch
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Have a project in mind? Let's discuss how we can help your
                  business grow.
                </p>
                <div className="mt-8">
                  <p className="text-gray-700 mb-4">
                    Or schedule a call directly:
                  </p>
                  <ConsultationButton />
                </div>

                {/* Improved Contact Information */}
                <div className="mt-10 space-y-4 text-left w-full bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4">
                    Founders
                  </h4>
                  <div className="flex items-center mb-3 hover:translate-x-1 transition-transform">
                    <Mail size={18} className="text-[#1E40AF] mr-3" />
                    <p>
                      Muhammad Usman:{" "}
                      <a
                        href="mailto:usman@nexusnao.com"
                        className="text-[#1E40AF] hover:underline font-medium"
                      >
                        usman@nexusnao.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform">
                    <Mail size={18} className="text-[#1E40AF] mr-3" />
                    <p>
                      Muhammad Noman:{" "}
                      <a
                        href="mailto:noman@nexusnao.com"
                        className="text-[#1E40AF] hover:underline font-medium"
                      >
                        noman@nexusnao.com
                      </a>
                    </p>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4 mt-6">
                    Company
                  </h4>
                  <div className="flex items-center mb-3 hover:translate-x-1 transition-transform">
                    <Mail size={18} className="text-[#1E40AF] mr-3" />
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@nexusnao.com"
                        className="text-[#1E40AF] hover:underline font-medium"
                      >
                        info@nexusnao.com
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform">
                    <Phone size={18} className="text-[#1E40AF] mr-3" />
                    <p className="font-medium">Phone: +92 306 8013166</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={sendEmail} className="space-y-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white/80"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white/80"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white/80"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white/80"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E40AF] via-[#EA384C] to-[#000000] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer with LinkedIn Link */}
        <footer className="bg-white/90 backdrop-blur-xl py-16 px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Logo size="md" className="filter drop-shadow" />
              <p className="text-gray-600 mt-3 font-medium">
                Software & E-commerce Solutions
              </p>
            </div>
            <div className="flex gap-10">
              <a
                href="#services"
                className="text-gray-600 hover:text-[#1E40AF] transition-colors text-lg hover:font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#1E40AF] transition-colors text-lg hover:font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#1E40AF] transition-colors text-lg hover:font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p className="text-base">
              © {new Date().getFullYear()} NexusNao. All rights reserved.
            </p>
            <p className="mt-3 text-base">
              Contact us:{" "}
              <a
                href="mailto:info@nexusnao.com"
                className="text-[#1E40AF] hover:underline font-medium"
              >
                info@nexusnao.com
              </a>{" "}
              | +92 306 8013166
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.linkedin.com/company/nexus-nao"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1E40AF]/10 to-[#1E40AF]/5 p-3 rounded-full hover:shadow-md transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin
                  size={28}
                  className="text-[#1E40AF] group-hover:text-[#EA384C] transition-colors"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Styled-jsx for global styles */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
