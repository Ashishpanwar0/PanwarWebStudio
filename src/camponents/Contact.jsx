import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - SIMPLE INFO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E0D00]">
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-6">
            Contact us directly through WhatsApp, Call or Email.
          </p>

          <div className="space-y-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919456132650"
              target="_blank"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl transition"
            >
              <MessageCircle size={20} /> WhatsApp Chat
            </a>

            {/* Call */}
            <a
              href="tel:9456132650"
              className="flex items-center gap-3 bg-[#1E0D00] hover:bg-[#8b5e3c] text-white px-5 py-3 rounded-xl transition"
            >
              <Phone size={20} /> Call Now
            </a>

            {/* Email */}
            <a
              href="mailto:ashupanwar5684@gmail.com"
              className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition"
            >
              <Mail size={20} /> Send Email
            </a>

          </div>
        </div>

        {/* RIGHT - HIGHLIGHT CARD */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-semibold text-[#1E0D00] mb-4">
            Panwar Web Studio
          </h3>

          <p className="text-gray-600 mb-6">
            We build modern and SEO-friendly websites for your business growth.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📞 9456132650</p>
            <p>📧 ashupanwar5684@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;