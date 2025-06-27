import React from "react";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import bgImg from "../../assets/bg.jpg";
import mentorImg from "../../assets/mentor.png.jpg";
import keerthiImg from "../../assets/keerthi.png.jpg";
import tharunImg from "../../assets/tharun.png.jpg";
import santhiImg from "../../assets/santhi.png.jpg";
import { Link } from "react-router-dom";
import FooterC from "./FooterC"; // ✅ Add this import for footer

function Home() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#000",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <FaHome /> Home
          </Link>
          <Link to="/submit" style={{ color: "white", textDecoration: "none" }}>
            Submit Complaint
          </Link>
          <Link to="/track" style={{ color: "white", textDecoration: "none" }}>
            Track Complaint
          </Link>
          <Link to="/faqs" style={{ color: "white", textDecoration: "none" }}>
            FAQs
          </Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
        <div>
          <Link to="/Login" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
            <FaSignInAlt /> Login
          </Link>
          <Link to="/SignUp" style={{ color: "white", textDecoration: "none" }}>
            <FaUserPlus /> SignUp
          </Link>
        </div>
      </nav>

      {/* Main Title and Subheading */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          ComplaintCare – Complaint Management System
        </h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          Fast Complaint Resolution, Trusted by Citizens <br />
          Simple. Secure. Smart.
        </p>
        <Link to="/submit">
          <button
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit Complaint
          </button>
        </Link>
      </div>

      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          margin: "30px auto",
          width: "90%",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      ></div>

      {/* How It Works Section */}
      <div style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#000" }}>How It Works</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {[
            {
              icon: "📝",
              title: "Submit Complaint",
              desc: "Fill out the form with your complaint details and submit it securely.",
            },
            {
              icon: "🔍",
              title: "We Review",
              desc: "Our team reviews your complaint and assigns it to the concerned authority.",
            },
            {
              icon: "✅",
              title: "Get Resolution",
              desc: "You'll be notified once your complaint is resolved with proper updates.",
            },
          ].map((step, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>{step.icon}</div>
              <h4 style={{ marginBottom: "10px", color: "#000" }}>{step.title}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team Section */}
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "#000" }}>Meet Our Team</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
{[
  { img: mentorImg, name: "Mahesh", email: "maradamahesh14@gmail.com", role: "Mentor" },
  { img: keerthiImg, name: "Keerthi Bonthu", email: "keerthbonthu15i@gmail.com", role: "Solo Project Developer" },
  { img: tharunImg, name: "Tharun", email: "tharunchitti456@gmail.com", role: "" },
  { img: santhiImg, name: "Shanthi", email: "shanthichalla57@gmail.com", role: "" },
].map((member, index) => (
  <div
    key={index}
    style={{
      width: "160px",
      background: "#ffffff",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <img
      src={member.img}
      alt={member.name}
      style={{
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
      }}
    />
    <h4 style={{ marginTop: "10px", color: "#000" }}>{member.name}</h4>
    {member.role && (
      <p style={{ fontSize: "13px", color: "#666", margin: "4px 0" }}>{member.role}</p>
    )}
    <p style={{ fontSize: "12px", color: "#555" }}>{member.email}</p>
  </div>
))}</div>

      {/* ✅ Footer Section */}
      <FooterC />
    </div>
  );
}

export default Home;