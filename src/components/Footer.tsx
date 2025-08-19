import React from "react";
import { Code2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/kk-team/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-gray text-gray-800 py-12 px-6 border-t border-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg"> */}
              <img
                src={logo}
                alt="KK-IT-SOLUTIONS Logo"
                className="w-8 h-8 object-contain"
              />
              {/* </div> */}
              <span className="text-xl font-bold text-royal-blue">
                KK-IT-SOLUTIONS
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Transforming ideas into powerful digital solutions with
              cutting-edge technology and innovative design.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-royal-blue transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-royal-blue mt-0.5" />
                <span>info@kkitsolutions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-royal-blue" />
                <span>+92 300 5751689</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-royal-blue mt-0.5" />
                <span>
                  Green Homes Colony, House #49, Nawab Pur Road, Near 8 Number
                  Chungi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-light-gray mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} KK-IT-SOLUTIONS. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
