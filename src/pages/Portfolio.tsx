import { Link } from "react-router-dom";

export const projects = [
  {
    title: "Homitag",
    image: "https://via.placeholder.com/600x400?text=Homitag", // Placeholder, please provide actual image URL or path
    description:
      "We handled the complete mobile app development for Homitag, a digital marketplace platform that allows users to discover, list, and interact with products and services. The app was designed for performance, smooth navigation, and real-time updates. Key Highlights:- Mobile app for browsing, listing, and secure messaging- Integration with backend APIs for real-time data- Seamless onboarding and listing mana",
    link: "http://www.homitag.com/",
  },
  {
    title: "Abhi Pvt. Ltd.",
    image: "/src/assets/images/kk-team/abhi.PNG",
    description:
      "We handled the development of both web and mobile platforms for Abhi Pvt. Ltd., a fintech solution offering salary advances, payroll automation, and financial wellness tools. The focus was on delivering a secure, scalable system with smooth user experiences for both employees and employers. Key Highlights:- Mobile app for salary access, requests, and transaction tracking- Web portal for HR and admin-side payroll management- Secure backend with banking API integrations and data workflows",
    link: "https://abhi.com.pk/",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 min-h-screen py-16 px-6 mt-12">
      {/* Header */}
      <motion.header
        className="text-center mb-16 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-royal-blue mb-4"
        >
          Portfolio
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Explore some of our recent projects and see how we bring innovative
          ideas to life.
        </motion.p>
      </motion.header>

      {/* Projects Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-light-gray hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/portfolio/${index}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </Link>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-royal-blue hover:text-deep-navy-blue font-medium flex items-center mt-2"
              >
                Visit Website <span className="ml-1">→</span>
              </a>
            </motion.div>
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
