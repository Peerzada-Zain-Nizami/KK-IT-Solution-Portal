import React from 'react';
import { Award, Target, Eye, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "Full-stack developer with 10+ years of experience in building scalable web applications."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Expert in system architecture and cloud infrastructure with a passion for innovation."
    },
    {
      name: "Mike Davis",
      role: "Lead Designer",
      description: "UI/UX designer focused on creating beautiful and intuitive user experiences."
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      description: "Ensures projects are delivered on time and within budget with excellent communication."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Header */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-400 mb-6">About CodeCraft Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a dedicated team of developers, designers, and strategists passionate about creating 
            exceptional digital experiences that drive business growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2019, CodeCraft Solutions began as a small team of passionate developers 
                who believed that technology could transform businesses and improve lives. What started 
                as a vision to create better digital experiences has grown into a full-service software 
                development company.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we work with businesses of all sizes, from startups to enterprises, helping them 
                navigate the digital landscape and achieve their goals through innovative technology solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-blue-100">We strive for perfection in every project we undertake.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-blue-100">We embrace new technologies and creative solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Transparency</h4>
                    <p className="text-blue-100">We believe in open communication and honest relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The talented individuals behind CodeCraft Solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-6 text-center hover:bg-slate-700 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                improve efficiency, and create exceptional user experiences.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl">
              <Eye className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading software development partner for businesses worldwide, 
                known for our expertise, reliability, and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;