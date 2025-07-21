import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Let's
            discuss how we can help bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-800 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@kkitsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+92 32605380041</p>
                      <p className="text-gray-600">+92 30424834256</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        Green Homes Colony, House #49, Nawab Pur Road, Near 8
                        Number Chungit
                      </p>
                      {/* <p className="text-gray-600">Silicon Valley, CA 94000</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-md">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Free consultation and project estimation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Experienced team of developers and designers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Agile development methodology
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    24/7 support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to perform optimally after launch.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web and mobile technologies including React, Vue.js, Node.js, React Native, Flutter, and cloud platforms like AWS and Azure.",
              },
              {
                question: "How do you ensure project quality?",
                answer:
                  "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback throughout the development process.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
