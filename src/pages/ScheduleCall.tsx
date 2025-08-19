import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ScheduleCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const subject = encodeURIComponent(`Schedule a Call Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    );
    window.location.href = `mailto:info@kkitsolutions.com?subject=${subject}&body=${body}`;
    alert("Your query has been sent successfully! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      <Header />
      <motion.main
        className="container mx-auto px-4 py-8 mt-20 flex justify-center items-center min-h-[calc(100vh-140px)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-black">
            Thanks for your interest. Enter your name and details so we can
            connect you with one of our team.
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="name"
                className="block text-lg font-bold text-black"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="email"
                className="block text-lg font-bold text-black"
              >
                Your work email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your work email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="service"
                className="block text-lg font-bold text-black"
              >
                Select your service
              </label>
              <select
                id="service"
                name="service"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="DevOps">DevOps</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="message"
                className="block text-lg font-bold text-black"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-royal-blue text-white px-6 py-3 rounded-md shadow-md hover:bg-deep-navy-blue flex items-center justify-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started <span className="ml-2">→</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default ScheduleCall;
