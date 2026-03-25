import { Mail, Phone, MessageCircle } from "lucide-react";
import HeroBg from "../assets/Hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full lg:h-130 lg:py-2 py-13 flex items-center lg:pt-2 pt-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Build Your Digital Presence
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            Panwar Digital Solutions creates modern, fast, and SEO-friendly websites
            to grow your business online and attract more customers.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1E0D00] hover:bg-[#8b5e3c] px-6 py-3 rounded-xl font-semibold shadow-lg">
              Get Started
            </button>

            <button href="#projects"  className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl w-full max-w-xs shadow-2xl">
            
            <h2 className="text-white text-lg font-semibold mb-4 text-center">
              Quick Contact
            </h2>

            <div className="flex flex-col gap-4">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/919456132650"
                target="_blank"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl transition"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:ashupanwar5684@gmail.com"
                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition"
              >
                <Mail size={18} />
                Email
              </a>

              {/* Call */}
              <a
                href="tel:9456132650"
                className="flex items-center gap-3 bg-[#1E0D00] hover:bg-[#8b5e3c] text-white py-3 px-4 rounded-xl transition"
              >
                <Phone size={18} />
                Call
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;