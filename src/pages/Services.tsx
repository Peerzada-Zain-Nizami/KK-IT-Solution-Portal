import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  Server,
  Globe,
  Database,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description:
        "Develop high-performance, scalable, and secure web applications using modern frontend and backend technologies like React, Vue, Node.js, and more.",
      features: [
        "Responsive and mobile-first design",
        "SEO-friendly architecture",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "Cross-browser compatibility",
        "Performance optimization",
        "Custom CMS integrations",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      description:
        "Design and build high-quality native and cross-platform mobile applications for both iOS and Android platforms, ensuring seamless user experience and performance.",
      features: [
        "Native iOS and Android development",
        "Cross-platform apps using React Native or Flutter",
        "Push notifications & in-app messaging",
        "Offline support and caching",
        "App Store and Google Play publishing",
        "Third-party API integrations",
        "Performance optimization for mobile",
      ],
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Create intuitive, user-centered interfaces that improve engagement and drive user satisfaction through research, wireframing, and visual design.",
      features: [
        "User research and personas",
        "User journey mapping",
        "Wireframing and prototyping",
        "High-fidelity UI mockups",
        "Accessibility & usability testing",
        "Design system creation",
        "Mobile and desktop responsive design",
      ],
    },
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: "DevOps & Cloud",
      description:
        "Automate, deploy, and scale applications using modern DevOps practices and cloud infrastructure on platforms like AWS, Azure, and Google Cloud.",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Cloud deployment (AWS, GCP, Azure)",
        "Containerization with Docker",
        "Orchestration with Kubernetes",
        "Monitoring and logging (Prometheus, Grafana)",
        "Security and compliance (IAM, encryption)",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "E-commerce Solutions",
      description:
        "Build and manage powerful online stores with secure payment integrations, inventory tracking, and customer analytics for a seamless shopping experience.",
      features: [
        "Custom e-commerce platforms",
        "Payment gateway integration (Stripe, PayPal)",
        "Inventory and order management",
        "Multi-vendor marketplace support",
        "Product catalog & search",
        "Customer account & wishlist",
        "Analytics and sales tracking",
      ],
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Database Design",
      description:
        "Design, implement, and optimize relational and non-relational databases to ensure data integrity, scalability, and high performance.",
      features: [
        "Relational database design (MySQL, PostgreSQL)",
        "NoSQL database modeling (MongoDB, DynamoDB)",
        "Query optimization and indexing",
        "Database normalization and security",
        "Data migration and backup",
        "Real-time data synchronization",
        "Scalability and replication strategies",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business
            thrive in the modern digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
              >
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-700">
              How we bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your requirements and goals",
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes and visual designs",
              },
              {
                step: "03",
                title: "Development",
                description: "Build your solution with best practices",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch and provide ongoing support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
