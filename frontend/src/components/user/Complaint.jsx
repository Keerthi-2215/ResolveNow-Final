import React, { useState } from "react";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reference: "",
    category: "",
    subject: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Complaint Submitted Successfully!");
    // You can send this data to backend API later
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", background: "#fff", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required style={inputStyle} />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required style={inputStyle} />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required style={inputStyle} />
        <input type="text" name="reference" placeholder="Reference Number (optional)" onChange={handleChange} style={inputStyle} />
        <select name="category" onChange={handleChange} required style={inputStyle}>
          <option value="">Select Category</option>
          <option value="Product Issue">Product Issue</option>
          <option value="Billing Issue">Billing Issue</option>
          <option value="Service Issue">Service Issue</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="subject" placeholder="Complaint Subject" onChange={handleChange} required style={inputStyle} />
        <textarea name="description" placeholder="Detailed Description" rows="4" onChange={handleChange} required style={inputStyle}></textarea>
        <input type="file" name="file" onChange={handleChange} style={inputStyle} />

        <p style={{ fontSize: "12px", color: "#555" }}>
          By submitting, you agree to our <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
        </p>

        <button type="submit" style={buttonStyle}>Submit Complaint</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ComplaintForm;