import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ankit Negi",
    role: "Full stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Tanisha Prajapti",
    role: "SEO Specialist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Priyanshu Kothari",
    role: "Python Expert",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    name: "Aditya Chauhan",
    role: "Helper",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Ashish Panwar",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "Pushpendra Bisht",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E0D00]">
            Meet Our Team
          </h2>

          <p className="mt-3 text-gray-600">
            Our talented team works passionately to create amazing digital experiences.
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-4 animate-scroll">

            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="min-w-[220px] md:min-w-[240px] bg-gray-50 p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 text-center border border-gray-100"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-[#1E0D00]/10 hover:border-[#1E0D00] transition"
                />

                <h3 className="text-base font-semibold text-[#1E0D00]">
                  {member.name}
                </h3>

                <p className="text-[#8b5e3c] text-sm font-medium mb-2">
                  {member.role}
                </p>

                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Passionate team member delivering quality work.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2">

                  <a
                    href="#"
                    className="bg-[#1E0D00]/10 hover:bg-[#1E0D00] p-2 rounded-full transition duration-300"
                  >
                    <Github
                      className="text-[#1E0D00] hover:text-white"
                      size={16}
                    />
                  </a>

                  <a
                    href="#"
                    className="bg-[#1E0D00]/10 hover:bg-[#1E0D00] p-2 rounded-full transition duration-300"
                  >
                    <Linkedin
                      className="text-[#1E0D00] hover:text-white"
                      size={16}
                    />
                  </a>

                  <a
                    href="#"
                    className="bg-[#1E0D00]/10 hover:bg-[#1E0D00] p-2 rounded-full transition duration-300"
                  >
                    <Mail
                      className="text-[#1E0D00] hover:text-white"
                      size={16}
                    />
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-scroll {
            width: max-content;
            animation: scroll 22s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Team;