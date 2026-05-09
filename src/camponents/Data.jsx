import React from "react";

function Data() {
  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Services Section */}
      <section
        style={{
          padding: "90px 10%",
          background: "#ffffff",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "15px",
              color: "#222",
            }}
          >
            Our Services
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            We provide modern web development solutions for students,
            startups, and businesses.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >

          {/* Card 1 */}
          <div
            style={{
              background: "#f7f8ff",
              padding: "35px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#4f46e5",
              }}
            >
              Frontend Development
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
              }}
            >
              Responsive and modern UI design using HTML, CSS,
              JavaScript, and React.js.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "#f7f8ff",
              padding: "35px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#4f46e5",
              }}
            >
              Responsive Design
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
              }}
            >
              Mobile-friendly websites that work smoothly on all devices.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              background: "#f7f8ff",
              padding: "35px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#4f46e5",
              }}
            >
              React Projects
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
              }}
            >
              Dynamic and scalable React applications with reusable
              components.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "80px 10%",
          background: "#111827",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "25px",
          textAlign: "center",
          color: "white",
        }}
      >

        <div>
          <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
            10+
          </h2>
          <p>Projects Completed</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
            20+
          </h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
            3+
          </h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
            24/7
          </h2>
          <p>Support Available</p>
        </div>

      </section>

      {/* Skills Section */}
      <section
        style={{
          padding: "90px 10%",
          background: "#f7f8ff",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              color: "#222",
            }}
          >
            Technologies We Use
          </h2>
        </div>

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
            "Git & GitHub",
          ].map((item, index) => (
            <span
              key={index}
              style={{
                padding: "14px 25px",
                background: "white",
                borderRadius: "30px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                fontWeight: "600",
              }}
            >
              {item}
            </span>
          ))}

        </div>
      </section>

      {/* Testimonial */}
      {/* <section
        style={{
          padding: "90px 10%",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "40px",
            color: "#222",
          }}
        >
          What Clients Say
        </h2> */}

        {/* <div
          style={{
            maxWidth: "700px",
            margin: "auto",
            background: "#f7f8ff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          }}
        >

          <p
            style={{
              fontSize: "18px",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            “Amazing website design and smooth performance.
            The project was completed on time with excellent quality.”
          </p>

          <h4
            style={{
              color: "#4f46e5",
            }}
          >
            - Rahul Sharma
          </h4>

        </div> */}
      {/* </section> */}

      {/* CTA Section */}
      <section
        style={{
          padding: "90px 10%",
          background: "#111827",
          textAlign: "center",
          color: "white",
        }}
      >

        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Start Your Next Project Today
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
            marginBottom: "30px",
            color: "#ddd",
          }}
        >
          Build modern and professional websites with powerful frontend
          technologies and creative UI designs.
        </p>

        <button
          style={{
            padding: "14px 35px",
            border: "none",
            background: "#4f46e5",
            color: "white",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>

      </section>

    </div>
  );
}

export default Data;