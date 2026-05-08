import React from "react";

function Testi() {

  const reviews = [

  {
    id: 1,
    name: "Deepak ",
    role: "Owner - Uttaranchal Travels",
    review:
      "The rental website was designed professionally with a smooth booking flow and responsive layout. Customers can easily explore vehicles and contact us without any confusion.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,
    name: "Pushpendra Bisht",
    role: "Founder - Computer Guru Training Institute",
    review:
      "Excellent work on our institute website. The course sections, contact system, and responsive design were developed perfectly. The website performance is fast and user-friendly.",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },

  {
    id: 3,
    name: "Ankit Semwal",
    role: "Admin - Student Management System",
    review:
      "The student management dashboard is very clean and easy to manage. Student records, admin features, and overall UI experience are properly organized and efficient.",
    image:
      "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    id: 4,
    name: "Rahul Nautiyal",
    role: "Founder - Anant Yatri",
    review:
      "The blog website has a clean design with fast loading speed and proper SEO structure. The overall look feels modern and works smoothly on mobile devices.",
    image:
      "https://randomuser.me/api/portraits/men/60.jpg",
  },

  {
    id: 5,
    name: "Sakshi Negi",
    role: "Team Member - Samoon Sav",
    review:
      "Very satisfied with the NGO website design. The layout looks professional, responsive, and visually attractive. Everything was delivered on time with great support.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 6,
    name: "Vikram Singh",
    role: "Manager - PV Hotel",
    review:
      "The hotel website was created with a premium UI and smooth booking section. The gallery and responsive design really improved our online presence.",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
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
          Hear what our clients say about our services,
          designs, and project delivery experience.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
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
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >

            {/* Profile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "25px",
              }}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div>
                <h3
                  style={{
                    margin: "0",
                    color: "#222",
                    fontSize: "22px",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#4f46e5",
                    fontSize: "15px",
                  }}
                >
                  {item.role}
                </p>
              </div>

            </div>

            {/* Review */}
            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              “{item.review}”
            </p>

            {/* Stars */}
            <div
              style={{
                marginTop: "20px",
                color: "#facc15",
                fontSize: "22px",
              }}
            >
              ★★★★★
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testi;