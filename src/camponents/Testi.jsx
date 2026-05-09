import React from "react";

function Testi() {
  const reviews = [
    {
      id: 1,
      name: "Deepak Rawat",
      role: "Owner • Uttaranchal Travels",
      review:
        "Our old website was very outdated and customers were facing issues while contacting us. After the redesign, the booking inquiries increased and the website now works smoothly on mobile as well. The overall experience was professional and delivery was on time.",
    },

    {
      id: 2,
      name: "Pushpendra Bisht",
      role: "Founder • Computer Guru Training Institute",
      review:
        "The institute website was developed exactly according to our requirements. Course details, student inquiry forms, and WhatsApp integration are working properly. The clean design and fast loading speed made a good impression on students.",
    },

    {
      id: 3,
      name: "Ankit Semwal",
      role: "Admin • Student Management System",
      review:
        "The dashboard UI is simple and easy to manage. Student records, attendance, and admin sections are properly organized. Even after project completion, support and small updates were provided whenever required.",
    },

    {
      id: 4,
      name: "Rahul Nautiyal",
      role: "Founder • Anant Yatri",
      review:
        "Really satisfied with the blog website design. The layout feels modern, articles are easy to read, and SEO structure was also handled nicely. The website performance on mobile devices is very smooth.",
    },

    {
      id: 5,
      name: "Sakshi Negi",
      role: "Team Member • Samoon Sav NGO",
      review:
        "The NGO website looks professional and visually attractive. Donation and contact sections were added properly and the responsiveness is excellent on every screen size. Communication throughout the project was also very good.",
    },

    {
      id: 6,
      name: "Vikram Singh",
      role: "Manager • PV Hotel",
      review:
        "The hotel website was created with a premium look and clean room showcase section. Customers can now easily check rooms and contact us directly. Overall design quality and responsiveness exceeded our expectations.",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "90px 8%",
        background: "#f8f9ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#222",
            marginBottom: "15px",
          }}
        >
          Client Testimonials
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "17px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Genuine feedback shared by clients based on their project
          experience, website quality, and support.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {reviews.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              padding: "35px 30px",
              borderRadius: "18px",
              border: "1px solid #ececec",
              boxShadow: "0 5px 18px rgba(0,0,0,0.05)",
              transition: "0.3s",
              position: "relative",
            }}
          >
            {/* Quote */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "25px",
                fontSize: "60px",
                color: "#e5e7ff",
                fontWeight: "bold",
              }}
            >
              ”
            </div>

            {/* Name */}
            <h3
              style={{
                margin: "0",
                color: "#111",
                fontSize: "22px",
              }}
            >
              {item.name}
            </h3>

            {/* Role */}
            <p
              style={{
                margin: "8px 0 20px",
                color: "#4f46e5",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {item.role}
            </p>

            {/* Review */}
            <p
              style={{
                color: "#555",
                lineHeight: "1.9",
                fontSize: "15.5px",
              }}
            >
              {item.review}
            </p>

            {/* Footer */}
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  fontSize: "20px",
                  letterSpacing: "2px",
                }}
              >
                ★★★★★
              </div>

              <span
                style={{
                  fontSize: "13px",
                  color: "#888",
                }}
              >
                Verified Client
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testi;