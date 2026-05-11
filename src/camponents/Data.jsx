// import React from "react";

// function Data() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >

//       {/* Services Section */}
//       <section
//         style={{
//           padding: "90px 10%",
//           background: "#ffffff",
//         }}
//       >

//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "50px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "40px",
//               marginBottom: "15px",
//               color: "#222",
//             }}
//           >
//             Our Services
//           </h2>

//           <p
//             style={{
//               color: "#666",
//               fontSize: "17px",
//             }}
//           >
//             We provide modern web development solutions for students,
//             startups, and businesses.
//           </p>
//         </div>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
//             gap: "30px",
//           }}
//         >

//           {/* Card 1 */}
//           <div
//             style={{
//               background: "#f7f8ff",
//               padding: "35px",
//               borderRadius: "12px",
//               textAlign: "center",
//               boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "15px",
//                 color: "#4f46e5",
//               }}
//             >
//               Frontend Development
//             </h3>

//             <p
//               style={{
//                 color: "#666",
//                 lineHeight: "1.7",
//               }}
//             >
//               Responsive and modern UI design using HTML, CSS,
//               JavaScript, and React.js.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div
//             style={{
//               background: "#f7f8ff",
//               padding: "35px",
//               borderRadius: "12px",
//               textAlign: "center",
//               boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "15px",
//                 color: "#4f46e5",
//               }}
//             >
//               Responsive Design
//             </h3>

//             <p
//               style={{
//                 color: "#666",
//                 lineHeight: "1.7",
//               }}
//             >
//               Mobile-friendly websites that work smoothly on all devices.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div
//             style={{
//               background: "#f7f8ff",
//               padding: "35px",
//               borderRadius: "12px",
//               textAlign: "center",
//               boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//             }}
//           >
//             <h3
//               style={{
//                 marginBottom: "15px",
//                 color: "#4f46e5",
//               }}
//             >
//               React Projects
//             </h3>

//             <p
//               style={{
//                 color: "#666",
//                 lineHeight: "1.7",
//               }}
//             >
//               Dynamic and scalable React applications with reusable
//               components.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Stats Section */}
//       <section
//         style={{
//           padding: "80px 10%",
//           background: "#111827",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
//           gap: "25px",
//           textAlign: "center",
//           color: "white",
//         }}
//       >

//         <div>
//           <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
//             10+
//           </h2>
//           <p>Projects Completed</p>
//         </div>

//         <div>
//           <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
//             20+
//           </h2>
//           <p>Happy Clients</p>
//         </div>

//         <div>
//           <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
//             3+
//           </h2>
//           <p>Years Experience</p>
//         </div>

//         <div>
//           <h2 style={{ fontSize: "45px", marginBottom: "10px" }}>
//             24/7
//           </h2>
//           <p>Support Available</p>
//         </div>

//       </section>

//       {/* Skills Section */}
//       <section
//         style={{
//           padding: "90px 10%",
//           background: "#f7f8ff",
//         }}
//       >

//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "50px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "40px",
//               color: "#222",
//             }}
//           >
//             Technologies We Use
//           </h2>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "20px",
//           }}
//         >

//           {[
//             "HTML5",
//             "CSS3",
//             "JavaScript",
//             "React.js",
//             "Bootstrap",
//             "Tailwind CSS",
//             "Node.js",
//             "Git & GitHub",
//           ].map((item, index) => (
//             <span
//               key={index}
//               style={{
//                 padding: "14px 25px",
//                 background: "white",
//                 borderRadius: "30px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
//                 fontWeight: "600",
//               }}
//             >
//               {item}
//             </span>
//           ))}

//         </div>
//       </section>

//       {/* Testimonial */}
//       {/* <section
//         style={{
//           padding: "90px 10%",
//           textAlign: "center",
//         }}
//       >

//         <h2
//           style={{
//             fontSize: "40px",
//             marginBottom: "40px",
//             color: "#222",
//           }}
//         >
//           What Clients Say
//         </h2> */}

//         {/* <div
//           style={{
//             maxWidth: "700px",
//             margin: "auto",
//             background: "#f7f8ff",
//             padding: "40px",
//             borderRadius: "12px",
//             boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
//           }}
//         >

//           <p
//             style={{
//               fontSize: "18px",
//               color: "#555",
//               lineHeight: "1.8",
//               marginBottom: "20px",
//             }}
//           >
//             “Amazing website design and smooth performance.
//             The project was completed on time with excellent quality.”
//           </p>

//           <h4
//             style={{
//               color: "#4f46e5",
//             }}
//           >
//             - Rahul Sharma
//           </h4>

//         </div> */}
//       {/* </section> */}

//       {/* CTA Section */}
//       <section
//         style={{
//           padding: "90px 10%",
//           background: "#111827",
//           textAlign: "center",
//           color: "white",
//         }}
//       >

//         <h2
//           style={{
//             fontSize: "42px",
//             marginBottom: "20px",
//           }}
//         >
//           Start Your Next Project Today
//         </h2>

//         <p
//           style={{
//             maxWidth: "700px",
//             margin: "auto",
//             lineHeight: "1.8",
//             marginBottom: "30px",
//             color: "#ddd",
//           }}
//         >
//           Build modern and professional websites with powerful frontend
//           technologies and creative UI designs.
//         </p>

//         <button
//           style={{
//             padding: "14px 35px",
//             border: "none",
//             background: "#4f46e5",
//             color: "white",
//             borderRadius: "6px",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           Get Started
//         </button>

//       </section>

//     </div>
//   );
// }

// export default Data;


import React from "react";

function Data() {
  const services = [
    {
      title: "Custom Website Development",
      desc: "Professional business websites with clean UI, fast loading speed, and modern responsive layouts.",
      icon: "💻",
    },
    {
      title: "Responsive UI Design",
      desc: "Mobile-friendly website designs that work smoothly on every screen size and device.",
      icon: "📱",
    },
    {
      title: "React.js Applications",
      desc: "Dynamic React applications using reusable components and smooth frontend performance.",
      icon: "⚛️",
    },
    {
      title: "Portfolio Websites",
      desc: "Creative portfolio websites for developers, freelancers, and students.",
      icon: "🎨",
    },
    {
      title: "Landing Pages",
      desc: "Modern landing pages designed for startups, products, and online services.",
      icon: "🚀",
    },
    {
      title: "Website Maintenance",
      desc: "Regular updates, bug fixing, performance optimization, and technical support.",
      icon: "🛠️",
    },
  ];

  const techs = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Git & GitHub",
  ];

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
<section
  style={{
    padding: "65px 10%",
    marginTop: "40px",
    background:
      "linear-gradient(135deg, #111827 0%, #1e293b 50%, #312e81 100%)",
    color: "white",
    textAlign: "center",
    borderRadius: "20px",
  }}
>
  <h1
    style={{
      fontSize: "42px",
      marginBottom: "16px",
      lineHeight: "1.3",
      fontWeight: "700",
    }}
  >
    Modern Websites For
    <br />
    Businesses & Creators
  </h1>

  <p
    style={{
      maxWidth: "720px",
      margin: "auto",
      lineHeight: "1.8",
      color: "#d1d5db",
      fontSize: "16px",
    }}
  >
    We design and develop responsive websites with clean UI,
    smooth performance, and modern frontend technologies
    that help brands grow online.
  </p>

  <div
    style={{
      marginTop: "28px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <button
      onClick={() => (window.location.href = "/project")}
      onMouseEnter={(e) => {
        e.target.style.background = "white";
        e.target.style.color = "#111827";
        e.target.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "#4f46e5";
        e.target.style.color = "white";
        e.target.style.transform = "translateY(0px)";
      }}
      style={{
        padding: "13px 32px",
        border: "none",
        background: "#4f46e5",
        color: "white",
        borderRadius: "8px",
        fontSize: "15px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "0.3s",
      }}
    >
      View Projects
    </button>
  </div>
</section>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "100px 10%",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#4f46e5",
              fontWeight: "600",
              marginBottom: "10px",
              letterSpacing: "1px",
            }}
          >
            OUR SERVICES
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#111827",
              marginBottom: "18px",
            }}
          >
            Services We Provide
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "#6b7280",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            We help students, startups, creators, and local businesses
            build modern websites with responsive design and clean
            frontend development.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "18px",
                transition: "0.3s",
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "15px",
                  background: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "30px",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  marginBottom: "15px",
                  color: "#111827",
                  fontSize: "24px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        style={{
          padding: "90px 10%",
          background: "#111827",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
          textAlign: "center",
          color: "white",
        }}
      >
        {[
          ["15+", "Projects Completed"],
          ["25+", "Satisfied Clients"],
          ["3+", "Years Experience"],
          ["24/7", "Technical Support"],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1f2937",
              padding: "40px 20px",
              borderRadius: "15px",
            }}
          >
            <h2
              style={{
                fontSize: "50px",
                marginBottom: "10px",
                color: "#818cf8",
              }}
            >
              {item[0]}
            </h2>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "17px",
              }}
            >
              {item[1]}
            </p>
          </div>
        ))}
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section
        style={{
          padding: "100px 10%",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <p
            style={{
              color: "#4f46e5",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            TECHNOLOGIES
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#111827",
            }}
          >
            Tools & Technologies We Use
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
          {techs.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "15px 28px",
                background: "#f8fafc",
                borderRadius: "40px",
                fontWeight: "600",
                color: "#111827",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "90px 10%",
          background:
            "linear-gradient(135deg, #312e81 0%, #111827 100%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "18px",
            lineHeight: "1.3",
          }}
        >
          Ready To Build Your Website?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
            marginBottom: "35px",
            color: "#d1d5db",
            fontSize: "17px",
          }}
        >
          Create responsive and professional websites with modern
          frontend technologies and clean user experience.
        </p>

        <button
  onClick={() => (window.location.href = "/contact")}
  onMouseEnter={(e) => {
    e.target.style.background = "#4f46e5";
    e.target.style.color = "white";
    e.target.style.transform = "translateY(-3px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "white";
    e.target.style.color = "#111827";
    e.target.style.transform = "translateY(0px)";
  }}
  style={{
    padding: "14px 34px",
    border: "none",
    background: "white",
    color: "#111827",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    fontWeight: "700",
    transition: "0.3s",
    maxWidth: "220px",
    width: "100%",
  }}
>
  Contact Us
</button>
      </section>
    </div>
  );
}

export default Data;