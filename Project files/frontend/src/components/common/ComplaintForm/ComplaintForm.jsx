import React, { useState } from "react";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    complaintType: "",
    complaintText: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    // Later: Send to backend API
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submit Your Complaint</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="complaintType"
          value={formData.complaintType}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Complaint Type</option>
          <option value="Service">Service</option>
          <option value="Staff">Staff</option>
          <option value="Technical">Technical</option>
        </select>
        <textarea
          name="complaintText"
          placeholder="Enter your complaint..."
          value={formData.complaintText}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Submit Complaint</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    marginTop: "50px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    margin: "10px 0",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ComplaintForm;