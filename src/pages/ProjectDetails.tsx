import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "./Portfolio";

export default function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects[projectId];

  if (!project || projectId < 0 || projectId >= projects.length) {
    return (
      <div className="bg-white text-gray-800 min-h-screen py-16 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600">The requested project does not exist.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6 mt-16">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        {/* <a
          href={project.link}
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a> */}
      </div>
    </div>
  );
}
