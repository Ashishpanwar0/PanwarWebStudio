import img1 from './../assets/Uttaranchal.png'
import img2 from './../assets/anantyatri.png';
import img4 from './../assets/Samoon.png';

import img5 from './../assets/CGTI.png';
import img6 from './../assets/PVhotel.png';


import {
  ExternalLink,
  Globe,
  Car,
  GraduationCap,
  Hotel,
  Code,
} from "lucide-react";

const projects = [
  {
    title: "Uttaranchal Travels",
    tag: "Travel Website",
    icon: Car,
    image:img1,
    features: ["Rental System", "Responsive UI", "Booking Flow"],
    link: "https://uttaranchaltravels.in/rental",
  },

  {
    title: "Anant Yatri",
    tag: "Tour Blog",
    icon: Globe,
    image:img2,
    features: ["SEO Optimized", "Fast Loading", "Clean Design"],
    link: "https://anantyatri.com/",
  },

  {
    title: "Student Management",
    tag: "Web App",
    icon: GraduationCap,
    image:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    features: ["Dashboard", "Student Records", "Admin Panel"],
    link: "https://www.samoonskills.org/sms/",
  },

  {
    title: "Samoon Sav",
    tag: "NGO Website",
    icon: Globe,
    image:img4,
    features: ["Modern UI", "Responsive", "Clean Layout"],
    link: "https://samoonsav.netlify.app/",
  },

  {
    title: "Computer Guru",
    tag: "Institute Site",
    icon: Code,
    image:img5,
    features: ["Courses", "Contact", "SEO Ready"],
    link: "https://demo.computerguru.co.in/",
  },

  {
    title: "PV Hotel",
    tag: "Hotel Website",
    icon: Hotel,
    image:img6,
    features: ["Booking UI", "Gallery", "Responsive"],
    link: "https://pv-hotal-6c5589.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-14">
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
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Tag */}
                  <span className="absolute top-4 right-4 bg-[#8b5e3c] text-white text-xs px-3 py-1 rounded-full">
                    {project.tag}
                  </span>

                  {/* Icon + Title */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="w-12 h-12 mb-3 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom */}
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-600 mb-6">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#1E0D00] hover:bg-[#8b5e3c] text-white py-3 rounded-xl transition"
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