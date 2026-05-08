import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Code2,
  Globe,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Modern Website Development",
    desc: "Responsive and high-performance websites designed for startups, businesses and brands.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Scalable dashboards, management systems and custom web solutions with clean code.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive UI/UX Design",
    desc: "Creative interfaces with smooth user experience across all devices and screen sizes.",
  },
  {
    icon: Rocket,
    title: "SEO & Performance",
    desc: "SEO-friendly websites optimized for fast loading speed and better Google rankings.",
  },
];

const features = [
  "Clean & Professional Design",
  "SEO Optimized Structure",
  "Mobile Friendly Layout",
  "Fast Loading Performance",
  "Modern Animations & Effects",
  "Secure & Scalable Development",
];

const ProjectPageContent = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center bg-[#1E0D00]">

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#8b5e3c]/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm text-white mb-6 backdrop-blur-md">
                <Sparkles size={16} />
                Creative Web Development Agency
              </span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                We Build
                <span className="block text-[#d6a67a]">
                  Modern Digital
                </span>
                Experiences
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mt-8 max-w-xl">
                We create responsive, SEO-friendly and visually stunning websites
                that help businesses grow online with modern UI/UX, fast performance
                and scalable solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href="#projects"
                  className="group bg-white text-[#1E0D00] px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition duration-300"
                >
                  Explore Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </a>

                <a
                  href="#contact"
                  className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[#1E0D00] transition duration-300"
                >
                  Contact Us
                </a>

              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4 mt-12">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-3 rounded-xl text-sm text-gray-200 hover:bg-white/10 transition"
                  >
                    <BadgeCheck size={18} className="text-[#d6a67a]" />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="relative">

              <div className="grid grid-cols-2 gap-6">

                <div className="space-y-6">

                  <div className="bg-white/10 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:-translate-y-2 transition duration-300">
                    <Globe className="text-[#d6a67a] mb-5" size={40} />

                    <h3 className="text-2xl font-bold text-white mb-3">
                      Responsive Websites
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      Beautiful websites optimized for mobile, tablet and desktop.
                    </p>
                  </div>

                  <div className="bg-[#8b5e3c] p-8 rounded-3xl hover:-translate-y-2 transition duration-300">
                    <Rocket className="text-white mb-5" size={40} />

                    <h3 className="text-2xl font-bold text-white mb-3">
                      High Performance
                    </h3>

                    <p className="text-gray-100 leading-relaxed">
                      Fast loading speed with optimized and scalable development.
                    </p>
                  </div>

                </div>

                <div className="space-y-6 mt-14">

                  <div className="bg-white p-8 rounded-3xl hover:-translate-y-2 transition duration-300">
                    <ShieldCheck
                      className="text-[#1E0D00] mb-5"
                      size={40}
                    />

                    <h3 className="text-2xl font-bold text-[#1E0D00] mb-3">
                      Secure Development
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      Secure coding standards with modern development practices.
                    </p>
                  </div>

                  <div className="bg-black p-8 rounded-3xl hover:-translate-y-2 transition duration-300">
                    <Layers3 className="text-[#d6a67a] mb-5" size={40} />

                    <h3 className="text-2xl font-bold text-white mb-3">
                      Creative UI/UX
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      Smooth user experience with premium and modern interfaces.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE SIDE */}
            <div className="relative">

              <div className="bg-[#1E0D00] rounded-[40px] p-10 text-white relative overflow-hidden">

                <div className="absolute top-0 right-0 w-40 h-40 bg-[#8b5e3c]/30 rounded-full blur-3xl"></div>

                <Briefcase size={50} className="text-[#d6a67a] mb-8" />

                <h2 className="text-4xl font-bold leading-tight mb-6">
                  Creating Powerful Websites For Modern Businesses
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                  We combine modern design, responsive layouts and SEO-focused
                  development to create websites that not only look amazing but
                  also perform exceptionally well.
                </p>

              </div>

            </div>

            {/* CONTENT SIDE */}
            <div>

              <span className="text-[#8b5e3c] font-semibold uppercase tracking-[4px]">
                Why Choose Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1E0D00] leading-tight mt-4">
                Smart Web Solutions With Creative Design
              </h2>

              <p className="text-gray-600 leading-relaxed mt-6 text-lg">
                We focus on creating websites with premium UI/UX, responsive
                layouts and optimized performance to provide the best experience
                for users and businesses.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
                    >

                      <div className="w-14 h-14 rounded-2xl bg-[#1E0D00]/10 flex items-center justify-center mb-5">
                        <Icon className="text-[#1E0D00]" size={28} />
                      </div>

                      <h3 className="text-lg font-semibold text-[#1E0D00] mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default ProjectPageContent;