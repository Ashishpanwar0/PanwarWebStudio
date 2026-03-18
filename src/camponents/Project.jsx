import { ExternalLink, Globe, Car, GraduationCap, Hotel, Code } from "lucide-react";

// 👉 Sirf yaha data add/change karo (future me easy)
const projects = [
  {
    title: "Uttaranchal Travels",
    tag: "Travel Website",
    icon: Car,
    features: ["Rental System", "Responsive UI", "Booking Flow"],
    link: "https://uttaranchaltravels.in/rental",
  },
  {
    title: "Anant Yatri",
    tag: "Tour Blog",
    icon: Globe,
    features: ["SEO Optimized", "Fast Loading", "Clean Design"],
    link: "https://anantyatri.com/",
  },
  {
    title: "Student Management",
    tag: "Web App",
    icon: GraduationCap,
    features: ["Dashboard", "Student Records", "Admin Panel"],
    link: "https://www.samoonskills.org/sms/",
  },
  {
    title: "Samoon Sav",
    tag: "NGO Website",
    icon: Globe,
    features: ["Modern UI", "Responsive", "Clean Layout"],
    link: "https://samoonsav.netlify.app/",
  },
  {
    title: "Computer Guru",
    tag: "Institute Site",
    icon: Code,
    features: ["Courses", "Contact", "SEO Ready"],
    link: "https://demo.computerguru.co.in/",
  },
  {
    title: "PV Hotel",
    tag: "Hotel Website",
    icon: Hotel,
    features: ["Booking UI", "Gallery", "Responsive"],
    link: "https://pv-hotal-6c5589.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E0D00]">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600">
            Some of our recent work and live projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                {/* Top */}
                <div className="bg-black text-white p-6 text-center relative">
                  <span className="absolute top-3 right-3 bg-[#8b5e3c] text-xs px-3 py-1 rounded-full">
                    {project.tag}
                  </span>

                  <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#1E0D00] transition">
                    <Icon className="text-green-400 group-hover:text-white" size={28} />
                  </div>

                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>

                {/* Bottom */}
                <div className="p-6">
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {project.features.map((f, i) => (
                      <li key={i}>✔ {f}</li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-[#1E0D00] hover:bg-[#8b5e3c] text-white py-2 rounded-xl transition"
                  >
                    Visit Site <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;