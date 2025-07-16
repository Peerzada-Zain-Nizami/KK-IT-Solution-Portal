import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Zap,
  Users,
  Trophy,
  Shield,
  Heart,
  Target,
  Code,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  Star,
  Check,
  Cloud,
  Database,
  BarChart3,
  Palette,
  Cog,
  Bot,
  Monitor,
  Headphones,
  Phone,
} from "lucide-react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
// For navigation arrows

// Import Bootstrap Carousel
import Carousel from "react-bootstrap/Carousel";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications using modern frameworks like React, Vue, Angular, and Node.js",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "CMS Development",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS/Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Microservices"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Database design, optimization, and management solutions",
      features: [
        "SQL/NoSQL",
        "Data Migration",
        "Performance Tuning",
        "Backup Solutions",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights with advanced analytics",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Machine Learning",
        "Predictive Analytics",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that drives engagement",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Software",
      description:
        "Tailored software solutions for unique business requirements",
      features: [
        "Enterprise Software",
        "Integration Solutions",
        "Legacy Modernization",
        "API Development",
      ],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: [
        "Chatbots",
        "Computer Vision",
        "Natural Language Processing",
        "Automation",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description:
        "Complete digital transformation strategies and implementation",
      features: [
        "Process Automation",
        "Digital Strategy",
        "Change Management",
        "Technology Consulting",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Comprehensive testing services to ensure software quality",
      features: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Acceptance Testing",
      ],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Support & Maintenance",
      description:
        "24/7 support and maintenance services for your applications",
      features: [
        "Technical Support",
        "Bug Fixes",
        "Performance Monitoring",
        "Regular Updates",
      ],
    },
  ];

  const features = [
    "24/7 Technical Support",
    "Scalable Solutions",
    "Modern Technology Stack",
    "Agile Development Process",
    "Quality Assurance",
    "Post-Launch Maintenance",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      {/* <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KK</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  KK-IT-SOLUTION
                </h1>
                <p className="text-xs text-blue-600">Innovation & Excellence</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {["Services", "About", "Portfolio", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header> */}

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Premium IT Solutions
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Empowering businesses with cutting-edge IT solutions, innovative
                web development, and strategic digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.qwenlm.ai/output/6fed707b-2f31-4adb-995d-390d6e034622/t2i/d3914708-a6ea-48f3-ba2a-ae09e598b2dd/1752501521.png?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV91c2VyX2lkIjoiNmZlZDcwN2ItMmYzMS00YWRiLTk5NWQtMzkwZDZlMDM0NjIyIiwicmVzb3VyY2VfaWQiOiIxNzUyNTAxNTIxIiwicmVzb3VyY2VfY2hhdF9pZCI6IjVkYzJmNDIxLTQ0ZGItNDc1YS04YTQ3LTcwZDYxMDM0ZTE4OSJ9.yT7TXmh7sCV6xW5uO531xGM4vwCC2_vU25SdldBQgkw"
                alt="Hero Illustration"
                className="w-full max-w-md bg-white rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-blue-600" />
        </div>
      </section>

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

      {/* Full Width Carousel Section */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            What Our Clients Say
          </h3>
        </div>
        <Carousel className="w-full">
          <Carousel.Item>
            <ExampleCarouselImage text="Client Testimonial 1" />
            <Carousel.Caption>
              <h3>First Client Feedback</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Client Testimonial 2" />
            <Carousel.Caption>
              <h3>Second Client Feedback</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Client Testimonial 3" />
            <Carousel.Caption>
              <h3>Third Client Feedback</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Sparkix Tech?
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
                {/* Simplified World Map SVG */}
                <svg viewBox="0 0 800 400" className="w-full h-64 mb-4">
                  {/* Background */}
                  <rect width="800" height="400" fill="#f8f9fa" />

                  {/* Continents - simplified shapes */}
                  {/* North America */}
                  <path
                    d="M50 100 L200 80 L250 120 L280 180 L200 200 L100 220 L50 180 Z"
                    fill="#6b7280"
                    opacity="0.7"
                  />

                  {/* South America */}
                  <path
                    d="M180 220 L220 240 L240 320 L200 350 L160 320 L150 260 Z"
                    fill="#6b7280"
                    opacity="0.7"
                  />

                  {/* Europe */}
                  <path
                    d="M350 80 L420 70 L450 100 L430 130 L380 140 L340 120 Z"
                    fill="#3b82f6"
                    opacity="0.8"
                  />

                  {/* Africa */}
                  <path
                    d="M380 140 L450 150 L470 250 L440 320 L400 340 L360 300 L350 200 Z"
                    fill="#6b7280"
                    opacity="0.7"
                  />

                  {/* Asia */}
                  <path
                    d="M450 60 L650 50 L700 100 L720 150 L650 180 L500 160 L450 120 Z"
                    fill="#3b82f6"
                    opacity="0.8"
                  />

                  {/* Australia */}
                  <path
                    d="M600 280 L680 270 L700 300 L680 320 L620 310 Z"
                    fill="#6b7280"
                    opacity="0.7"
                  />

                  {/* Additional highlighted regions */}
                  <path
                    d="M50 100 L200 80 L250 120 L200 140 L100 150 L50 130 Z"
                    fill="#3b82f6"
                    opacity="0.8"
                  />

                  {/* Decorative elements */}
                  <circle cx="100" cy="50" r="2" fill="#3b82f6" opacity="0.6" />
                  <circle cx="300" cy="60" r="2" fill="#3b82f6" opacity="0.6" />
                  <circle cx="500" cy="40" r="2" fill="#3b82f6" opacity="0.6" />
                  <circle cx="650" cy="80" r="2" fill="#3b82f6" opacity="0.6" />
                </svg>
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
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 shadow-lg">
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KK-IT-SOLUTION</h3>
                  <p className="text-sm text-gray-400">
                    Innovation & Excellence
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative technology solutions
                and digital excellence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Services", "About", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@kk-it-solution.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Digital City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KK-IT-SOLUTION. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default KKITSolution;
