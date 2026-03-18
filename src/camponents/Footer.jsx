import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E0D00] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Text */}
        <p className="text-sm text-center md:text-left">
          © All Rights Reserved | Developed by <span className="font-semibold">Ashish Panwar</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ashish_panwar06/"
            target="_blank"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </a>

          {/* LinkedIn (placeholder - change link if you have) */}
          <a
            href="#"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;