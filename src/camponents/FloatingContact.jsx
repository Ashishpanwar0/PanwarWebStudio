import { useState } from "react";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Wrapper */}
      <div className="relative">

        {/* Popup */}
        {open && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 space-y-3">
            
            <h3 className="text-[#1E0D00] font-semibold text-center">
              Contact Us
            </h3>

            <a
              href="https://wa.me/919456132650"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>

            <a
              href="tel:9456132650"
              className="flex items-center gap-2 bg-[#1E0D00] text-white px-4 py-2 rounded-xl"
            >
              <Phone size={18} /> Call
            </a>

            <a
              href="mailto:ashupanwar5684@gmail.com"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl"
            >
              <Mail size={18} /> Email
            </a>

          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

      </div>
    </div>
  );
};

export default FloatingContact;