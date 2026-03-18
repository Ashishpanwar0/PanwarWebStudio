import { Globe, Smartphone, TrendingUp } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E0D00]">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            We provide high-quality web solutions to grow your business online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition">
              <Globe className="text-[#1E0D00] group-hover:text-white" size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1E0D00]">
              Website Development
            </h3>
            <p className="text-gray-600">
              We build fast, secure and modern websites tailored to your business needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition">
              <Smartphone className="text-[#1E0D00] group-hover:text-white" size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1E0D00]">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Your website will look perfect on mobile, tablet and desktop devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3">
            <div className="bg-[#1E0D00]/10 group-hover:bg-[#1E0D00] w-16 h-16 flex items-center justify-center rounded-xl mb-4 transition">
              <TrendingUp className="text-[#1E0D00] group-hover:text-white" size={30} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1E0D00]">
              SEO Optimization
            </h3>
            <p className="text-gray-600">
              We optimize your website to rank better on Google and attract more traffic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;