import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Zap,
  Users,
  Target,
  Code,
  Smartphone,
  ChevronDown,
  Star,
  Cloud,
  Database,
  BarChart3,
  Palette,
  Cog,
  Bot,
  Monitor,
  Headphones,
  Phone,
  ChevronLeft,
  ChevronRight,
  TestTube,
  Rocket,
  MessageSquare,
  Lock,
  Terminal,
  Globe,
  BookOpen,
} from "lucide-react";
import Carousel from "react-bootstrap/Carousel";
import Banner from "../components/Banner";
import aiImg from "../assets/images/kk-team/ai.jpg";
import clientImg1 from "../assets/images/kk-team/1.png";
import clientImg2 from "../assets/images/kk-team/2.png";
import clientImg3 from "../assets/images/kk-team/3.jpg";
import clientImg4 from "../assets/images/kk-team/4.png";
import clientImg5 from "../assets/images/kk-team/5.png";
import clientImg6 from "../assets/images/kk-team/6.png";

// Define LogoImage component
const LogoImage = ({ src, fallbackSrc, alt, className }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackSrc;
      }}
    />
  );
};

const steps = [
  {
    number: 1,
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Join exploration call.",
    description:
      "Tell us more about your business on a discovery call. We'll discuss team structure and approach, success criteria, timescale, budget, and required skill sets to see how we can help.",
  },
  {
    number: 2,
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Discuss solution and team structure.",
    description:
      "In a matter of days, we will finalize your project specifications, agree on an engagement model, select and onboard your team.",
  },
  {
    number: 3,
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Get started and track performance.",
    description:
      "Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs.",
  },
];

// Placeholder ExampleCarouselImage component
const ExampleCarouselImage = ({ text }: any) => (
  <div
    style={{
      height: "400px",
      background: "#ddd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
  >
    <h2>{text}</h2>
  </div>
);

const KKITSolution = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const workflowSteps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed project roadmap",
      icon: <Users className="w-6 h-6" />,
      details: [
        "Requirements gathering",
        "Market research",
        "Technical feasibility",
        "Project timeline",
      ],
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description: "Creating intuitive and engaging user experiences",
      icon: <Palette className="w-6 h-6" />,
      details: [
        "UI/UX design",
        "Wireframing",
        "Interactive prototypes",
        "Design system",
      ],
    },
    {
      id: 3,
      title: "Development",
      description:
        "Building robust and scalable solutions using latest technologies",
      icon: <Code className="w-6 h-6" />,
      details: [
        "Frontend development",
        "Backend architecture",
        "Database design",
        "API integration",
      ],
    },
    {
      id: 4,
      title: "Testing & QA",
      description:
        "Ensuring quality and performance through comprehensive testing",
      icon: <TestTube className="w-6 h-6" />,
      details: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "Security audit",
      ],
    },
    {
      id: 5,
      title: "Launch & Support",
      description: "Deploying your solution and providing ongoing maintenance",
      icon: <Rocket className="w-6 h-6" />,
      details: [
        "Production deployment",
        "Performance monitoring",
        "24/7 support",
        "Regular updates",
      ],
    },
  ];

  // Services Data
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description:
        "Custom web applications using modern frameworks like React, Vue, Angular, and Node.js",
      features: [
        "Responsive & Cross-browser Design",
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions (Shopify, WooCommerce)",
        "CMS Development (WordPress, Drupal)",
        "API Integration & Backend Development",
        "Web Performance Optimization",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS & Android Development",
        "Cross-Platform App Development (React Native, Flutter)",
        "App Store Optimization (ASO)",
        "Mobile UI/UX Design",
        "Push Notifications & In-App Messaging",
        "Offline Functionality & Sync",
        "App Maintenance & Support",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud Strategy & Architecture",
        "AWS, Azure, Google Cloud Platform",
        "Cloud Migration & Integration",
        "Serverless Architecture",
        "DevOps Automation",
        "Microservices Architecture",
        "Cloud Cost Optimization",
      ],
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Database Management",
      description: "Database design, optimization, and management solutions",
      features: [
        "Relational (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase)",
        "Data Modeling & Schema Design",
        "Database Migration & Backup",
        "Performance Tuning & Indexing",
        "Data Warehousing & ETL",
        "Real-time Data Sync",
        "Database Security & Compliance",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Data Analytics & BI",
      description:
        "Turn your data into actionable insights with advanced analytics",
      features: [
        "Business Intelligence Dashboards (Power BI, Tableau)",
        "Data Visualization & Reporting",
        "Machine Learning Models",
        "Predictive Analytics",
        "Big Data Processing (Hadoop, Spark)",
        "Real-time Analytics",
        "Data Governance & Compliance",
      ],
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that drives engagement",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "High-Fidelity UI Design",
        "Design Systems & Branding",
        "Accessibility & Inclusive Design",
        "User Testing & Feedback",
        "Design-to-Code Handoff",
      ],
    },
    {
      icon: <Cog className="w-8 h-8 text-blue-600" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions for unique business requirements",
      features: [
        "Enterprise Software Development",
        "Legacy System Modernization",
        "Integration with Existing Systems",
        "API Development & Management",
        "Custom CRM & ERP Systems",
        "Workflow Automation",
        "Software Maintenance & Support",
      ],
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Computer Vision & Image Recognition",
        "Natural Language Processing (NLP)",
        "Predictive Modeling & Forecasting",
        "Recommendation Systems",
        "Automated Decision Systems",
        "AI Ethics & Compliance",
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Digital Transformation",
      description:
        "Complete digital transformation strategies and implementation",
      features: [
        "Digital Strategy Consulting",
        "Process Automation & RPA",
        "Change Management & Training",
        "Technology Stack Audit",
        "Customer Journey Mapping",
        "Agile Transformation",
        "End-to-End Digital Integration",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance & Testing",
      description: "Comprehensive testing services to ensure software quality",
      features: [
        "Manual & Automated Testing",
        "Performance & Load Testing",
        "Security & Penetration Testing",
        "Cross-Browser & Device Testing",
        "Regression & Unit Testing",
        "Test Case Development",
        "User Acceptance Testing (UAT)",
      ],
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "Support & Maintenance",
      description:
        "24/7 support and maintenance services for your applications",
      features: [
        "24/7 Technical Support",
        "Bug Fixes & Patches",
        "Performance Monitoring",
        "Regular Updates & Enhancements",
        "Server & Infrastructure Monitoring",
        "SLA-Based Support",
        "On-demand Consulting",
      ],
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with robust security solutions",
      features: [
        "Penetration Testing & Vulnerability Scanning",
        "Data Encryption & Network Security",
        "Threat Detection & Response",
        "Compliance Audits (GDPR, HIPAA)",
        "Security Training & Awareness",
        "Incident Response Planning",
        "Zero Trust Architecture",
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with strategic marketing",
      features: [
        "Search Engine Optimization (SEO)",
        "Content Marketing & Strategy",
        "Google Ads & Paid Campaigns",
        "Social Media Marketing",
        "Conversion Rate Optimization (CRO)",
        "Email Marketing Automation",
        "Analytics & ROI Tracking",
      ],
    },
    {
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
      title: "DevOps & CI/CD",
      description:
        "Streamline development and deployment with DevOps practices",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code (IaC)",
        "Containerization (Docker, Kubernetes)",
        "Monitoring & Logging",
        "Automated Testing & Deployment",
        "Release Management",
        "Cloud DevOps Integration",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Training & Workshops",
      description: "Empower your team with hands-on tech training",
      features: [
        "Customized Corporate Training",
        "Hands-on Workshops & Bootcamps",
        "Certification Programs",
        "Technical Documentation",
        "Team Upskilling",
        "Mentorship & Coaching",
        "E-learning & LMS Development",
      ],
    },
  ];

  // AI Services
  const aiServices = [
    {
      name: "Bing",
      logo: "https://logos-world.net/wp-content/uploads/2023/08/Bing-Logo.png ",
      fallbackLogo: "https://img.icons8.com/color/96/bing.png ",
      description: "Microsoft's AI-powered search engine",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "ChatGPT",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/ChatGPT-Logo.png ",
      fallbackLogo: "https://img.icons8.com/color/96/chatgpt.png ",
      description: "OpenAI's conversational AI assistant",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Gemini",
      logo: "https://logos-world.net/wp-content/uploads/2024/02/Gemini-Logo.png ",
      fallbackLogo: "https://img.icons8.com/color/96/google-logo.png ",
      description: "Google's advanced AI model",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: "OpenAI",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/OpenAI-Logo.png ",
      fallbackLogo:
        "https://img.icons8.com/color/96/artificial-intelligence.png ",
      description: "Leading AI research company",
      color: "from-gray-700 to-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      name: "Claude",
      logo: "https://www.anthropic.com/images/claude-horizontal-mark.svg ",
      fallbackLogo: "https://img.icons8.com/color/96/robot.png ",
      description: "Anthropic's powerful AI assistant",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/landing/assets/huggingface_logo.svg ",
      fallbackLogo: "https://img.icons8.com/color/96/machine-learning.png ",
      description: "Platform for open-source AI models",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      name: "Midjourney",
      logo: "https://cdn.midjourney.com/assets/midjourney-logo-256x256-7e121641.png ",
      fallbackLogo: "https://img.icons8.com/color/96/paint-palette.png ",
      description: "AI for creating images from text",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Meta AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/2023_Meta_AI_Logo.svg ",
      fallbackLogo: "https://img.icons8.com/color/96/facebook-messenger.png ",
      description: "Meta's family of large AI models",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  const faqData = [
    {
      question: "What types of AI solutions does your company offer?",
      answer:
        "We offer a range of AI solutions, including chatbots, computer vision, natural language processing, and automation. Our team can help you implement these technologies tailored to your specific business needs.",
    },
    {
      question: "How does your AI development process work?",
      answer:
        "Our AI development process involves several stages: requirement analysis, data collection, model training, testing, deployment, and continuous monitoring. We ensure transparency and collaboration throughout the process.",
    },
    {
      question:
        "Can your AI solutions integrate with my existing infrastructure?",
      answer:
        "Yes, our AI solutions are designed to seamlessly integrate with existing systems. We support various integration methods, including APIs, SDKs, and custom integrations, to ensure compatibility with your infrastructure.",
    },
    {
      question: "What makes your AI solutions unique?",
      answer:
        "Our AI solutions are unique due to our expertise in leveraging cutting-edge technologies and methodologies. We focus on delivering scalable, secure, and efficient solutions that provide tangible business value.",
    },
    {
      question:
        "How do you ensure the privacy and security of the AI solutions?",
      answer:
        "We prioritize data privacy and security by implementing robust measures such as encryption, access controls, and compliance with industry standards like GDPR and HIPAA. Our solutions are built with security best practices in mind.",
    },
    {
      question: "What support do you offer post-deployment?",
      answer:
        "We provide comprehensive post-deployment support, including regular maintenance, updates, and performance monitoring. Our team is available to address any issues and optimize your AI solutions over time.",
    },
    {
      question: "How much does it cost to develop a custom AI solution?",
      answer:
        "The cost of developing a custom AI solution varies based on factors such as complexity, scope, and requirements. We offer transparent pricing and can provide a detailed quote after understanding your project needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQ = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQs:</h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-50 transition duration-200 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-3 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const clients = [
    { name: "Company One", logo: clientImg1 },
    { name: "Company Two", logo: clientImg2 },
    { name: "Company Three", logo: clientImg3 },
    { name: "Company Four", logo: clientImg4 },
    { name: "Company Five", logo: clientImg5 },
    { name: "Company Six", logo: clientImg6 },
  ];

  const testimonials = [
    {
      quote:
        "Working with KK-IT-SOLUTIONS was a game-changer for our business. Their team delivered beyond our expectations.",
      client: "John Doe, CEO of Company One",
      image: clientImg1,
    },
    {
      quote:
        "The level of professionalism and technical expertise is unmatched. Highly recommended for any tech project.",
      client: "Jane Smith, CTO of Company Two",
      image: clientImg2,
    },
    {
      quote:
        "From concept to execution, they were with us every step of the way. Truly a partner in every sense.",
      client: "Michael Lee, Founder of Company Three",
      image: clientImg3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const points = ["Design", "Development", "Testing & QA", "Release & maint."];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === aiServices.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, aiServices.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? aiServices.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === aiServices.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="pt-20 px-6">
            <nav className="flex flex-col space-y-6">
              {["Services", "About", "Portfolio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 w-full">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}

      <Banner />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to digital transformation, we provide
              end-to-end technology solutions that drive business growth.
            </p>
          </div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full p-3 mr-4">
                    {React.cloneElement(service.icon, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose KK-IT-SOLUTIONS ?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                In our steadfast pursuit of seamlessly embracing the future, we
                pledge an unwavering commitment to transparency and a proactive
                approach in addressing both conventional and non-conventional IT
                challenges. Our resilience stands as the bedrock for achieving
                new heights in innovation and digital experiences. At the heart
                of our capabilities lies a comprehensive expertise that spans
                across all facets of solutions, encompassing custom product
                development, integrations with Generative AI, data modernization
                initiatives, proficient cloud operations, and strategic business
                consultancy. Choose us as your trusted partner, where
                professionalism meets unparalleled proficiency, and together, we
                shape the future of your digital endeavors.
              </p>
            </div>

            {/* Right Side - World Map */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <img
                  src={aiImg}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Empowered Innovation */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-green-500 rounded mr-4"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  Empowered Innovation
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empowering innovation at our core, we pioneer transformative
                solutions, driving progress, and shaping the future of IT
                excellence.
              </p>
            </div>

            {/* Guaranteed Excellence */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-yellow-500 rounded mr-4"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  Guaranteed Excellence
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We think out of the box about every incoming thread and problem
                that customers face and provide diligent solutions.
              </p>
            </div>

            {/* Impeccable Performance */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-purple-500 rounded mr-4"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  Impeccable Performance
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We offer software with robust speed and on time by focusing on
                the deliverables and tricky clients' requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Our process. Simple, seamless, streamlined.
              </h2>

              {/* Professional Image Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-32"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
                  <div className="absolute bottom-6 left-8 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-green-400 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Process Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200"></div>
                  )}

                  <div className="flex items-start space-x-6">
                    {/* Step Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="text-sm font-semibold text-blue-600 tracking-wide">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() =>
                    window.open("https://calendly.com/ ", "_blank")
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 shadow-lg"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Generative AI Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are experts in developing solutions with the latest generative
              AI technologies.
            </p>
          </div>

          {/* Main Slide Content */}
          <div
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-[340px] flex items-center justify-center p-8">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${aiServices[currentIndex].color} opacity-5`}
              ></div>

              {/* Logo Container */}
              <div className="relative z-10 text-center max-w-xl">
                <div className="mb-6 inline-block p-5 rounded-2xl bg-gray-50 shadow-md transform transition-transform hover:scale-105">
                  <LogoImage
                    src={aiServices[currentIndex].logo}
                    fallbackSrc={aiServices[currentIndex].fallbackLogo}
                    alt={aiServices[currentIndex].name}
                    className="w-24 h-24 object-contain drop-shadow-md"
                  />
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {aiServices[currentIndex].name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {aiServices[currentIndex].description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 py-4">
              {aiServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {aiServices.map((service, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 border ${
                  index === currentIndex
                    ? "bg-blue-50 border-blue-300 shadow-md scale-105"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <LogoImage
                  src={service.logo}
                  fallbackSrc={service.fallbackLogo}
                  alt={service.name}
                  className="w-8 h-8 object-contain"
                />
                <span
                  className={`font-medium ${
                    index === currentIndex ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with some of the world's most
              innovative companies.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          <Carousel
            indicators={true}
            controls={true}
            className="rounded-xl shadow-lg overflow-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Client Image */}
                    <div className="md:mr-8 mb-6 md:mb-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.client}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-sm"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-blue-600 font-semibold">
                        — {testimonial.client}
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Development
              <span className="text-blue-600"> Workflow</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we follow a proven methodology that
              ensures your project's success through every phase of development.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activeStep === index
                      ? "transform scale-105"
                      : "hover:transform hover:scale-102"
                  }`}
                  onClick={() =>
                    setActiveStep(activeStep === index ? -1 : index)
                  }
                >
                  <div
                    className={`flex items-start space-x-6 p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                      activeStep === index
                        ? "bg-blue-600 text-white shadow-2xl"
                        : "bg-white text-gray-900 hover:shadow-xl hover:bg-blue-50"
                    }`}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeStep === index
                            ? "bg-white text-blue-600 shadow-lg"
                            : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                        }`}
                      >
                        {step.icon}
                        <div
                          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            activeStep === index
                              ? "bg-blue-600 text-white"
                              : "bg-blue-600 text-white"
                          }`}
                        >
                          {step.id}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold mb-2">
                          {step.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeStep === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <p className="text-lg mb-4 opacity-90">
                        {step.description}
                      </p>

                      {/* Expandable Details */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeStep === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-opacity-30 border-current">
                          {step.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                              <span className="text-sm font-medium">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and create something amazing together.
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create innovative solutions that
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default KKITSolution;
