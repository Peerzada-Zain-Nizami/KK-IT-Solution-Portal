import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-commerce Platform",
    image:
      "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "A fully scalable e-commerce platform built using React, Node.js, and MongoDB.",
    link: "#ecommerce-platform",
  },
  {
    title: "Healthcare App",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "A mobile app designed to help patients manage their health records and appointments.",
    link: "#healthcare-app",
  },
  {
    title: "Financial Dashboard",
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "An interactive financial dashboard for tracking investments and budgets.",
    link: "#financial-dashboard",
  },
  {
    title: "Education Portal",
    image:
      "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "An online learning platform featuring courses, quizzes, and certifications.",
    link: "#education-portal",
  },
  {
    title: "Social Media Analytics Tool",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "A tool for analyzing social media data and generating insights.",
    link: "#social-media-analytics",
  },
  {
    title: "IoT Home Automation System",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    description:
      "A smart home system that integrates IoT devices for automation.",
    link: "#iot-home-automation",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6 mt-12">
      {/* Header */}
      <header className="text-center mb-16 mt-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of our recent projects and see how we bring innovative
          ideas to life.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={project.link}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View Project <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-600">
          Want to see more? Check out our full list of projects or contact us to
          discuss collaboration opportunities.
        </p>
      </div>
    </div>
  );
}
