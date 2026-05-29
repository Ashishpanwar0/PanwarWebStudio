import React from "react";
import { useNavigate } from "react-router-dom";

function Abt() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "system-ui, sans-serif",
        background: "#f9fafb",
      }}
    >

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          padding: "120px 10%",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1E0D00, #2b1400)",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background: "#8b5e3c",
            filter: "blur(120px)",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-120px",
            width: "300px",
            height: "300px",
            background: "#ffffff",
            filter: "blur(140px)",
            opacity: 0.1,
          }}
        />

        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          About Us
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#e5e7eb",
          }}
        >
          We design and develop modern, fast, and scalable websites that help
          businesses grow online. Our focus is simple — clean design, strong
          performance, and real user experience.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section
        style={{
          padding: "90px 10%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
          background: "#fff",
        }}
      >

        <div>
          <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
            We build experiences, not just websites
          </h2>

          <p style={{ color: "#555", lineHeight: "1.8" }}>
            Every project we create is focused on performance, design clarity,
            and user satisfaction. Whether it's a business website, portfolio,
            or web app — we build it with care and precision.
          </p>

          <p style={{ color: "#555", lineHeight: "1.8", marginTop: "15px" }}>
            Our goal is to help brands look professional and grow digitally.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/contact")}
            style={{
              marginTop: "30px",
              padding: "14px 28px",
              background: "#1E0D00",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "#8b5e3c")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "#1E0D00")
            }
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>
            What we focus on
          </h3>

          {[
            ["Modern Design", "Clean and professional UI/UX."],
            ["Fast Websites", "Optimized for speed and performance."],
            ["Responsive", "Perfect on mobile, tablet, and desktop."],
            ["Support", "We help even after project delivery."],
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              <h4 style={{ margin: 0 }}>✔ {item[0]}</h4>
              <p style={{ margin: "6px 0 0", color: "#666" }}>
                {item[1]}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "100px 10%",
          textAlign: "center",
          background: "#111827",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Let’s Work Together
        </h2>

        <p style={{ maxWidth: "700px", margin: "auto", color: "#d1d5db" }}>
          Have an idea? We can turn it into a real digital product that grows
          your business online.
        </p>

        <button
          onClick={() => navigate("/contact")}
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            background: "white",
            color: "#111827",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
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