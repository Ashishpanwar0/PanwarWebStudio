import { Users, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E0D00]">
            About Panwar Web Studio
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We create modern, fast and SEO-friendly websites to help your business grow online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 text-center">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 transition">
              <Users className="text-[#1E0D00] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-lg font-semibold">Client Focused</h3>
            <p className="text-gray-500 mt-1">
              We understand your business needs and deliver solutions that match your goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 text-center">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 transition">
              <Globe className="text-[#1E0D00] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-lg font-semibold">Modern & Responsive</h3>
            <p className="text-gray-500 mt-1">
              Your website will look perfect on all devices with smooth performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition hover:-translate-y-2 text-center">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-4 transition">
              <Award className="text-[#1E0D00] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-lg font-semibold">Quality & Performance</h3>
            <p className="text-gray-500 mt-1">
              We focus on speed, SEO and user experience to deliver high-quality websites.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;