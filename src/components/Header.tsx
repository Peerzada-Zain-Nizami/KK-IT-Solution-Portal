import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white text-gray-800 py-4 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo Image */}
          <img
            src="src/assets/images/kk-team/logo.png"
            alt="KK-IT-SOLUTIONS Logo"
            className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
          />
          {/* Brand Name */}
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            KK-IT-SOLUTIONS
          </span>
        </Link>

        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all duration-200 hover:text-blue-500 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Optional: Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
          {/* You can add a hamburger icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
