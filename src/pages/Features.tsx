import React from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  Globe,
  HeartHandshake,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Development",
      description:
        "Accelerate your time-to-market with our agile development process and modern tools.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Protect your applications with industry-standard security measures and best practices.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Work with skilled developers, designers, and project managers dedicated to your success.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Build applications that scale globally with internationalization and localization support.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Ongoing Support",
      description:
        "Receive continuous support and maintenance to keep your applications running smoothly.",
    },
  ];

  const technologies = [
    "React",
    "React.js",
    "Vue.js",
    "Angular",
    "jQuery",
    "Next.js",
    "Nest.js",
    "Typescript",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "SASS",
    "LESS",
    "TailwindCSS",
    "Chakra UI",
    "Material UI",
    "Redux.js",
    "Zustand",
    "Recoil",
    "Context API",
    "Jest",
    "Cypress",
    "Detox",
    "Mocha",
    "Chai",
    "Playwright",
    "React Native",
    "Flutter",

    "Node.js",
    "Express.js",
    "GraphQL",
    "REST API",
    "RESTful APIs",
    "SOAP APIs",
    "WebSockets",
    "WebRTC",
    "OAuth2",
    "DOM",
    "ORM",
    "Firebase",
    "RealmDB",

    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "DynamoDB",
    "NoSQL",

    "AWS",
    "SQS",
    "Lambda",
    "GCP",
    "Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "containerization",
    "Kafka",

    "Webpack",
    "Babel",
    "Mixpanel",
    "Stripe",
    "Twilio",
    "Asana",
    "Trello",

    "Redis/RabbitMQ",
    "Google Cloud/Azure",
    "AWS/S3/EC2/ECS",
    "CI/CD Pipeline",
    "Cloud infrastructure",
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">
            Why Choose KK-IT-SOLUTION?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features and capabilities that make us the preferred
            choice for digital transformation.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks for modern development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-colors duration-300 border border-gray-200"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Benefits of Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Faster time-to-market with agile methodologies",
                "Scalable solutions that grow with your business",
                "24/7 support and maintenance services",
                "Cost-effective development and deployment",
                "Regular updates and feature enhancements",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl text-blue-900">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Let's discuss your project and see how we can help you achieve
                your digital goals.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
