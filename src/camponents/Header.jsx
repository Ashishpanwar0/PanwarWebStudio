import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Panwar_Web.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Panwar Web Logo"
            className="h-12 w-25"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden text-[#3b1f0f] md:flex items-center gap-30 font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>

          <Link to="/about" className="hover:underline">
            About
          </Link>

          <Link to="/project" className="hover:underline">
            Projects
          </Link>

          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-[#1E0D00] hover:bg-[#8b5e3c] text-white px-5 py-2 rounded-lg font-semibold transition">
            Explore More
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 text-[#3b1f0f]">
          <Link
            to="/"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/project"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <button className="w-full bg-[#1E0D00] hover:bg-[#8b5e3c] text-white px-5 py-2 rounded-lg font-semibold transition">
            Explore More
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;