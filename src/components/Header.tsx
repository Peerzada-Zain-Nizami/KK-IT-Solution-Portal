import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/kk-team/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  const handleScheduleCall = () => {
    navigate("/schedule-call");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 group relative cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-royal-blue to-deep-navy-blue rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <motion.div
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative z-10"
                  whileHover={{ rotate: 5 }}
                >
                  <img
                    src={logo}
                    alt="KK-IT-Solutions Logo"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-royal-blue via-deep-navy-blue to-deep-navy-blue bg-clip-text text-transparent">
                  KK-IT-SOLUTIONS
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide hidden sm:block">
                  Digital Innovation Hub
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ scale: 1.05, color: "#2D5DA1" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setActiveItem(item.path)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                        isActive
                          ? "text-royal-blue bg-light-gray"
                          : "text-gray-700 hover:text-royal-blue hover:bg-light-gray"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-royal-blue/10 to-deep-navy-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleScheduleCall}
                className="relative overflow-hidden bg-gradient-to-r from-royal-blue to-deep-navy-blue hover:from-royal-blue hover:to-deep-navy-blue text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Schedule a Call</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 text-gray-600 hover:text-royal-blue focus:outline-none focus:ring-2 focus:ring-royal-blue relative z-50"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-md border-t border-light-gray z-40`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => {
              console.log("show item name", item.name);
              console.log("show item path", item.path);
              console.log("show active item", location.pathname);
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActiveItem(item.path);
                      closeMenu();
                    }}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-royal-blue bg-light-gray font-semibold"
                        : "text-gray-700 hover:text-royal-blue hover:bg-light-gray"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-light-gray space-y-3">
              <div className="flex items-center space-x-3 px-4 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+92 3042483426</span>
              </div>
              <div className="flex items-center space-x-3 px-4 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@kkitsolutions.com</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleScheduleCall}
                className="w-full bg-gradient-to-r from-royal-blue to-deep-navy-blue hover:from-royal-blue hover:to-deep-navy-blue text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;
