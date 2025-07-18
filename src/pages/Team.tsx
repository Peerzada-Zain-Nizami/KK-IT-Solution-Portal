import React, { useState } from "react";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Calendar,
  MapPin,
  User,
  Briefcase,
  Users,
  Search,
} from "lucide-react";
import yousufImg from "../assets/images/kk-team/yousuf.jpeg";

const ceo = {
  name: "Mrs. Anah",
  role: "HR & Finance Management",
  bio: "Leading our human resources and financial operations with strategic vision and exceptional leadership skills.",
  education: "Business Administration",
  experience: "10+ years",
  expertise: ["HR Management", "Finance Management", "Strategic Planning"],
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
    email: "anah@company.com",
  },
  image: "hr.png",
};

const boardMembers = [
  {
    name: "Mr. Ahmed Ali",
    role: "Business Development Admin",
    bio: "Driving business growth and development initiatives with strategic partnerships and market expansion.",
    expertise: [
      "Business Development",
      "Strategic Planning",
      "Market Analysis",
    ],
    experience: "12+ years",
    image: "sam.png",
  },
  {
    name: "Mr. Arif Sb",
    role: "Senior Administration",
    bio: "Overseeing administrative operations and ensuring organizational efficiency across all departments.",
    expertise: ["Administration", "Operations Management", "Team Leadership"],
    experience: "15+ years",
    image: "sam.png",
  },
  {
    name: "Mr. Anees",
    role: "Leads Generation Admin",
    bio: "Spearheading lead generation strategies and managing client acquisition processes.",
    expertise: ["Lead Generation", "Client Relations", "Sales Strategy"],
    experience: "8+ years",
    image: "anees.jpeg",
  },
  {
    name: "Mr. Gulam Hassan",
    role: "Leads Generation Admin",
    bio: "Expert in lead generation and client development with proven track record in business growth.",
    expertise: ["Lead Generation", "Business Development", "Client Management"],
    experience: "9+ years",
    image: "hassanMK.jpeg",
  },
];

const employees = [
  {
    name: "Mr. Subtain",
    role: "Backend Developer",
    department: "Development",
    skills: ["Node.js", "Python", "MongoDB", "API Development"],
    experience: "5 years",
    location: "Development Team",
    image: "subtain.png",
  },
  {
    name: "Mr. Ali",
    role: "Wallpaper Designer",
    department: "Graphics",
    skills: ["Photoshop", "Illustrator", "Design", "Creative Suite"],
    experience: "3 years",
    location: "Graphics Department",
    image: "sam.png",
  },
  {
    name: "Mr. Asim",
    role: "Frontend Web Developer",
    department: "Development",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    experience: "4 years",
    location: "Development Team",
    image: "sam.png",
  },
  {
    name: "Mr. Kamil",
    role: "Full Stack Developer",
    department: "Development",
    skills: ["React Native", "Full Stack", "Mobile", "Web"],
    experience: "6 years",
    location: "Development Team",
    image: "kamil.jpeg",
  },
  {
    name: "Mr. Hassan Raza",
    role: "Full Stack Developer",
    department: "Development",
    skills: ["React", "Node.js", "MongoDB", "Full Stack"],
    experience: "5 years",
    location: "Development Team",
    image: "sam.png",
  },
  {
    name: "Mr. Saeed",
    role: "Junior Mobile Engineer",
    department: "Mobile Development",
    skills: ["React Native", "Mobile Development", "JavaScript", "iOS"],
    experience: "2 years",
    location: "Mobile Team",
    image: "saeed.jpeg",
  },
  {
    name: "Mr. Shameer Shahid",
    role: "Backend Developer",
    department: "Development",
    skills: ["Backend", "API", "Database", "Server"],
    experience: "3 years",
    location: "Development Team",
    image: "shameer.jpeg",
  },
  {
    name: "Mr. Zeeshan",
    role: "Mobile Engineer",
    department: "Mobile Development",
    skills: ["React Native", "Mobile Apps", "Flutter", "Android"],
    experience: "4 years",
    location: "Mobile Team",
    image: "sam.png",
  },
  {
    name: "Mr. Zuhair Abbas",
    role: "Senior React Native Engineer",
    department: "Mobile Development",
    skills: ["React Native", "Senior Development", "Team Lead", "Architecture"],
    experience: "7 years",
    location: "Mobile Team",
    image: "zuhair.jpg",
  },
  {
    name: "Mr. Saif ul Rehman",
    role: "Mobile Engineer",
    department: "Mobile Development",
    skills: ["Mobile Engineering", "React Native", "iOS", "Android"],
    experience: "4 years",
    location: "Mobile Team",
    image: "q_saif.jpeg",
  },
  {
    name: "Mr. Nouman Muzamil",
    role: "Software Engineer",
    department: "Development",
    skills: ["Software Development", "Programming", "Testing", "Debugging"],
    experience: "3 years",
    location: "Development Team",
    image: "sam.png",
  },
  {
    name: "Mr. Suleman",
    role: "Senior React Native Developer",
    department: "Mobile Development",
    skills: [
      "React Native",
      "Senior Development",
      "Mobile Architecture",
      "Leadership",
    ],
    experience: "8 years",
    location: "Mobile Team",
    image: "john.jpeg",
  },
  {
    name: "Mr. Moeen U Din",
    role: "Frontend Developer",
    department: "Development",
    skills: ["React Native", "Frontend", "JavaScript", "UI Development"],
    experience: "3 years",
    location: "Development Team",
    image: "moeen.jpeg",
  },
  {
    name: "Mr. Zulqernain",
    role: "Full Stack Engineer",
    department: "Development",
    skills: ["Full Stack", "Web Development", "Backend", "Frontend"],
    experience: "5 years",
    location: "Development Team",
    image: "zul.jpeg",
  },
  {
    name: "Mr. Qazi Shafi",
    role: "React.js & Next.js Developer",
    department: "Development",
    skills: ["React.js", "Next.js", "Web Development", "JavaScript"],
    experience: "4 years",
    location: "Development Team",
    image: "qazi.jpeg",
  },
  {
    name: "Mr. Saad",
    role: "Senior Mobile Engineer",
    department: "Mobile Development",
    skills: ["React Native", "Senior Development", "Mobile", "Team Leadership"],
    experience: "6 years",
    location: "Mobile Team",
    image: "saad.jpeg",
  },
  {
    name: "Mr. Saif ud din",
    role: "Backend Developer",
    department: "Development",
    skills: ["Backend Development", "API", "Database", "Server"],
    experience: "3 years",
    location: "Development Team",
    image: "saif.jpeg",
  },
  {
    name: "Miss Sam",
    role: "Full Stack Developer",
    department: "Development",
    skills: ["Full Stack", "Web Development", "React", "Node.js"],
    experience: "4 years",
    location: "Development Team",
    image: "sam.png",
  },
  {
    name: "Mr. Yousaf",
    role: "React Native Developer",
    department: "Mobile Development",
    skills: [
      "React Native",
      "Mobile Development",
      "JavaScript",
      "App Development",
    ],
    experience: "3 years",
    location: "Mobile Team",
    image: "yousuf.jpeg",
  },
];

const departments = [
  "All",
  "Development",
  "Mobile Development",
  "Graphics",
  "Administration",
];

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const matchesDepartment =
      selectedDepartment === "All" ||
      employee.department === selectedDepartment;
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const stats = [
    {
      icon: Users,
      label: "Total Team Members",
      value: employees.length + boardMembers.length + 1,
    },
    { icon: Briefcase, label: "Departments", value: departments.length - 1 },
    {
      icon: User,
      label: "Senior Developers",
      value: employees.filter((emp) => emp.role.includes("Senior")).length,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 mt-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Meet Our Amazing Team
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Talented professionals dedicated to delivering exceptional software
            solutions and driving innovation in technology.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 mx-auto">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={`src/assets/images/kk-team/${ceo.image}`}
                    alt={ceo.name}
                    className="w-40 h-40 rounded-full object-cover shadow-xl ring-4 ring-blue-100"
                    style={{ objectFit: "initial" }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20"></div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {ceo.name}
                </h3>
                <p className="text-blue-600 font-semibold text-xl mb-4">
                  {ceo.role}
                </p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {ceo.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center md:text-left">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Education
                    </span>
                    <p className="text-gray-800 mt-2 font-medium">
                      {ceo.education}
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Experience
                    </span>
                    <p className="text-gray-800 mt-2 font-medium">
                      {ceo.experience}
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Expertise
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ceo.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start space-x-6">
                  {[
                    {
                      icon: Linkedin,
                      href: ceo.social.linkedin,
                      color: "hover:text-blue-700",
                    },
                    {
                      icon: Twitter,
                      href: ceo.social.twitter,
                      color: "hover:text-blue-500",
                    },
                    {
                      icon: Github,
                      href: ceo.social.github,
                      color: "hover:text-gray-900",
                    },
                    {
                      icon: Mail,
                      href: `mailto:${ceo.social.email}`,
                      color: "hover:text-red-500",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-600 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                    >
                      <social.icon className="h-7 w-7" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Board Members & Directors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={`src/assets/images/kk-team/${member.image}`}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover shadow-lg ring-2 ring-blue-100"
                        style={{ objectFit: "initial" }}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Team Members
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search team members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEmployees.map((employee, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={yousufImg}
                      alt={employee.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg ring-2 ring-blue-100"
                      style={{ objectFit: "initial" }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 mx-auto w-24 h-24"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {employee.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 text-sm">
                    {employee.role}
                  </p>
                  <p className="text-gray-500 mb-4 text-sm font-medium">
                    {employee.department}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {employee.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {employee.skills.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{employee.skills.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{employee.experience}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{employee.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEmployees.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">
                No team members found matching your criteria.
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
