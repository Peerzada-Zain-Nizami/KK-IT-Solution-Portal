import React from 'react';
import { Code, Smartphone, Palette, Server, Globe, Database } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Create modern, responsive websites using the latest technologies like React, Vue, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Design beautiful and intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "DevOps & Cloud",
      description: "Implement scalable infrastructure and deployment solutions for your applications.",
      features: ["Cloud Migration", "CI/CD Pipelines", "Monitoring", "Security"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Build powerful online stores with payment integration and inventory management.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Database Design",
      description: "Design and optimize database structures for performance and scalability.",
      features: ["Database Architecture", "Performance Optimization", "Data Migration", "Backup Solutions"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive in the modern digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we bring your ideas to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your requirements and goals" },
              { step: "02", title: "Design", description: "Create wireframes and visual designs" },
              { step: "03", title: "Development", description: "Build your solution with best practices" },
              { step: "04", title: "Deployment", description: "Launch and provide ongoing support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;