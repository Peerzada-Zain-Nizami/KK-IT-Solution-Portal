import React from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote / San Francisco, CA",
    description:
      "We are looking for experienced engineers to join our team and help build cutting-edge software solutions.",
    requirements: [
      "5+ years of experience in software development",
      "Proficient in JavaScript/TypeScript, React, and Node.js",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills and attention to detail",
    ],
    applyLink: "#apply-senior-engineer",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York, NY",
    description:
      "Join our creative team to design intuitive and user-friendly interfaces for web and mobile applications.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficient in Figma, Sketch, and Adobe XD",
      "Strong portfolio showcasing design projects",
      "Experience with responsive design and accessibility standards",
    ],
    applyLink: "#apply-ui-ux-designer",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Austin, TX",
    description:
      "Help us automate and optimize our infrastructure to ensure high availability and performance.",
    requirements: [
      "3+ years of experience in DevOps practices",
      "Proficient in Docker, Kubernetes, and CI/CD pipelines",
      "Experience with monitoring tools (e.g., Prometheus, Grafana)",
      "Strong understanding of cloud architecture",
    ],
    applyLink: "#apply-devops-engineer",
  },
];

export default function Careers() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6 mt-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Careers</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At KK-IT-SOLUTIONS, we're always on the lookout for talented
          individuals who share our passion for innovation and excellence. Join
          our dynamic team and be part of building the future of technology.
        </p>
      </header>

      {/* Job Listings */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Current Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                Department: {job.department}
              </p>
              <p className="text-blue-600 font-medium mb-4">
                Location: {job.location}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Requirements:
              </h4>
              <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <Link
                to={job.applyLink}
                className="inline-block w-full bg-blue-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-blue-700 transition text-center"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-600">
          Not seeing the perfect fit? Send your resume to{" "}
          <a
            href="mailto:careers@kkitsolutions.com"
            className="text-blue-600 hover:text-blue-800"
          >
            careers@kkitsolutions.com
          </a>
          . We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}
