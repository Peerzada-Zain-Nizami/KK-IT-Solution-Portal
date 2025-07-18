import React from "react";

export default function Careers() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative text-center max-w-5xl mx-auto w-full">
        {/* Glass Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 border border-blue-200/50 relative overflow-hidden">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Animated Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 group">
                <svg
                  className="w-10 h-10 md:w-14 md:h-14 text-white group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
            </div>

            {/* Title with Gradient Animation */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Coming Soon
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 tracking-wide">
              Careers at{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                KK-IT-SOLUTIONS
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              We're building something amazing! Our careers page is currently
              under construction. Soon you'll be able to explore exciting
              opportunities to join our innovative team and shape the future of
              technology with us.
            </p>

            {/* Feature Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
              {/* Feature 1 */}
              <div className="p-6 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:bg-blue-100/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Great Team
                </h3>
                <p className="text-sm text-gray-600">
                  Join talented professionals
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:bg-blue-100/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Growth</h3>
                <p className="text-sm text-gray-600">Advance your career</p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:bg-blue-100/80 transition-all duration-300 hover:scale-105 hover:shadow-xl group md:col-span-1 col-span-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Innovation
                </h3>
                <p className="text-sm text-gray-600">
                  Work on cutting-edge projects
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <p className="text-gray-800 font-medium text-lg">
                Interested in joining our team?
              </p>

              {/* Enhanced CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <a
                  href="mailto:careers@kkitsolutions.com"
                  className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-lg"
                >
                  <svg
                    className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Your Resume
                </a>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-sm text-gray-600 mt-8 max-w-md mx-auto">
              Stay tuned for updates on our exciting job openings! We'll be
              launching soon with amazing opportunities.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
