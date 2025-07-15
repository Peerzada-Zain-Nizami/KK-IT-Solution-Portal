import React from "react";
import { Users, Calendar, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: Calendar, label: "Years Experience", value: "10+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Award, label: "Projects Completed", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">
              About KK-It-Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2016, we've grown from a small startup to a leading
              software house, delivering innovative solutions that drive
              business success.
            </p>
          </div>

          {/* Story and Mission/Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                KK-It-Solutions Solutions was born from a simple idea: to bridge
                the gap between complex technology and business needs. Our
                founders, with combined experience of over 20 years in software
                development, recognized the need for a company that could
                deliver both technical excellence and business value.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we're proud to serve clients across various industries,
                from startups to Fortune 500 companies. Our commitment to
                quality, innovation, and customer satisfaction has made us a
                trusted partner for businesses looking to leverage technology
                for growth.
              </p>
              <p className="text-gray-600">
                We believe in the power of technology to transform businesses
                and improve lives. Every project we undertake is an opportunity
                to create something meaningful and impactful.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission & Vision
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">
                    Mission
                  </h4>
                  <p className="text-blue-700">
                    To deliver exceptional software solutions that empower
                    businesses to achieve their goals through innovative
                    technology and strategic thinking.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-indigo-900 mb-2">
                    Vision
                  </h4>
                  <p className="text-indigo-700">
                    To be the global leader in software development, known for
                    our technical excellence, innovative solutions, and
                    unwavering commitment to client success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
