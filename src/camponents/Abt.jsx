import React from "react";

function Abt() {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        background: "#f8f9ff",
      }}
    >

      {/* Hero Section */}
      <section
        style={{
          padding: "100px 10%",
          textAlign: "center",
          background:
            "linear-gradient(to right, #1E0D00, #1E0D00)",
          color: "white",
        }}
      >

        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            maxWidth: "850px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "1.9",
            color: "#f3f4f6",
          }}
        >
          We create modern, responsive, and user-friendly websites
          using HTML, CSS, JavaScript, and React.js. Our goal is
          to deliver high-quality web solutions with clean UI,
          smooth performance, and professional designs.
        </p>

      </section>

      {/* Main About */}
      <section
        style={{
          padding: "90px 10%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "50px",
          alignItems: "center",
          background: "#fff",
        }}
      >

        {/* Left */}
        <div>

          <h2
            style={{
              fontSize: "42px",
              color: "#222",
              marginBottom: "25px",
            }}
          >
            Building Digital Experiences
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "20px",
              fontSize: "17px",
            }}
          >
            We specialize in creating attractive and responsive
            websites for businesses, institutes, startups,
            hotels, travel agencies, and personal brands.
          </p>

          <p
            style={{
              color: "#666",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            From frontend development to complete UI/UX design,
            every project is built with creativity, performance,
            and user experience in mind.
          </p>

        </div>

        {/* Right */}
        <div
          style={{
            background: "#f7f8ff",
            padding: "40px",
            borderRadius: "18px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >

          <h3
            style={{
              fontSize: "28px",
              marginBottom: "25px",
              color: "#4f46e5",
            }}
          >
            Why Choose Us?
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >

            <div>
              <h4 style={{ color: "#222" }}>
                ✔ Modern UI Design
              </h4>

              <p style={{ color: "#666", marginTop: "8px" }}>
                Clean and professional interfaces with responsive layouts.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#222" }}>
                ✔ Fast Performance
              </h4>

              <p style={{ color: "#666", marginTop: "8px" }}>
                Optimized websites for smooth user experience.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#222" }}>
                ✔ Responsive Websites
              </h4>

              <p style={{ color: "#666", marginTop: "8px" }}>
                Mobile-friendly websites that work perfectly on all devices.
              </p>
            </div>

            <div>
              <h4 style={{ color: "#222" }}>
                ✔ Professional Support
              </h4>

              <p style={{ color: "#666", marginTop: "8px" }}>
                Dedicated support and timely project delivery.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section
        style={{
          padding: "80px 10%",
          background: "#111827",
          color: "white",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >

        <div>
          <h2 style={{ fontSize: "45px" }}>10+</h2>
          <p>Projects Delivered</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px" }}>20+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px" }}>100%</h2>
          <p>Responsive Designs</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px" }}>24/7</h2>
          <p>Client Support</p>
        </div>

      </section>

      {/* Technologies */}
      <section
        style={{
          padding: "90px 10%",
          background: "#fff",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "42px",
            color: "#222",
            marginBottom: "50px",
          }}
        >
          Technologies We Work With
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >

          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Bootstrap",
            "Tailwind CSS",
            "Node.js",
            "GitHub",
          ].map((item, index) => (
            <span
              key={index}
              style={{
                padding: "14px 28px",
                background: "#f7f8ff",
                borderRadius: "30px",
                fontWeight: "600",
                color: "#4f46e5",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              {item}
            </span>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 10%",
          background: "#111827",
          textAlign: "center",
          color: "white",
        }}
      >

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "25px",
          }}
        >
          Let’s Build Something Amazing
        </h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#d1d5db",
            lineHeight: "1.9",
            marginBottom: "35px",
            fontSize: "17px",
          }}
        >
          Whether you need a business website, portfolio,
          travel platform, institute site, or web application,
          we are ready to transform your ideas into reality.
        </p>

        <button
          style={{
            padding: "15px 35px",
            background: "#4f46e5",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Contact Now
        </button>

      </section>

    </div>
  );
}

export default Abt;