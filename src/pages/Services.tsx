import React from "react";
import {
  ChevronRight,
  Code,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      Icon: Code,
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
      Icon: Smartphone,
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
      Icon: Cloud,
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
      Icon: Database,
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
    {
      Icon: Globe,
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
      Icon: Palette,
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

      {/* Services Grid (matches Home page design) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative group h-full"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-royal-blue to-deep-navy-blue rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-royal-blue/20 to-deep-navy-blue/20 h-full">
                  <div className="h-full rounded-2xl bg-white/90 backdrop-blur-sm p-7 shadow-md transition-all duration-300 group-hover:shadow-2xl flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-royal-blue to-deep-navy-blue opacity-20 blur-sm group-hover:opacity-30 transition-opacity" />
                        <div className="relative bg-gradient-to-br from-royal-blue to-deep-navy-blue text-white p-3 rounded-xl shadow-sm">
                          {/* Render icon component safely */}
                          {(() => {
                            const IconComp = service.Icon;
                            return <IconComp className="w-8 h-8 text-white" />;
                          })()}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mt-1 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 flex-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <ChevronRight className="w-4 h-4 text-royal-blue mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
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
