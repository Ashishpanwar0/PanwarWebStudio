import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";

const ConnectSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#f8f8f8] overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#8b5e3c]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1E0D00]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-[#1E0D00]/10 text-[#1E0D00] px-5 py-2 rounded-full text-sm font-medium mb-5">
            <Sparkles size={16} />
            Let’s Connect
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1E0D00] leading-tight">
            Ready To Start Your
            <span className="block text-[#8b5e3c]">
              Next Big Project?
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
            We create modern, responsive and SEO-friendly websites that help
            businesses grow online with better performance, stunning UI/UX and
            scalable development solutions.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* WhatsApp */}
            <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-green-100 p-4 rounded-2xl">
                  <MessageCircle className="text-green-600" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1E0D00]">
                    WhatsApp Chat
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Discuss your website ideas, project requirements and business goals directly with us.
                  </p>

                  <a
                    href="https://wa.me/919456132650"
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-5 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition duration-300"
                  >
                    Start Chat
                    <ArrowRight size={18} />
                  </a>
                </div>

              </div>
            </div>

            {/* Call */}
            <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-[#1E0D00]/10 p-4 rounded-2xl">
                  <Phone className="text-[#1E0D00]" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1E0D00]">
                    Direct Call Support
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Connect with our team for quick discussions and professional support anytime.
                  </p>

                  <a
                    href="tel:9456132650"
                    className="inline-flex items-center gap-2 mt-5 bg-[#1E0D00] hover:bg-[#8b5e3c] text-white px-6 py-3 rounded-xl transition duration-300"
                  >
                    Call Now
                    <ArrowRight size={18} />
                  </a>
                </div>

              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">

              <div className="flex items-start gap-5">

                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="text-blue-600" size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#1E0D00]">
                    Email Us
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Share your project details and get a professional website solution for your business.
                  </p>

                  <a
                    href="mailto:ashupanwar5684@gmail.com"
                    className="inline-flex items-center gap-2 mt-5 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition duration-300"
                  >
                    Send Email
                    <ArrowRight size={18} />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-[#1E0D00] text-white p-10 rounded-[35px] relative overflow-hidden shadow-2xl">

              <div className="absolute top-0 right-0 w-52 h-52 bg-[#8b5e3c]/30 rounded-full blur-3xl"></div>

              <span className="bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm inline-block">
                Creative Digital Solutions
              </span>

              <h3 className="text-4xl font-bold mt-8 leading-tight">
                Build Your Online Presence With Us
              </h3>

              <p className="text-gray-300 mt-6 leading-relaxed text-lg">
                We help startups, businesses and brands create modern websites
                with responsive layouts, SEO optimization and premium user experience.
              </p>

              {/* Contact Info */}
              <div className="space-y-5 mt-10">

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Contact Number
                    </p>

                    <h4 className="font-semibold text-lg">
                      +91 9456132650
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Email Address
                    </p>

                    <h4 className="font-semibold text-lg">
                      ashupanwar5684@gmail.com
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Location
                    </p>

                    <h4 className="font-semibold text-lg">
                      Uttarakhand, India
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Working Hours
                    </p>

                    <h4 className="font-semibold text-lg">
                      Monday - Saturday : 9 AM - 8 PM
                    </h4>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectSection;