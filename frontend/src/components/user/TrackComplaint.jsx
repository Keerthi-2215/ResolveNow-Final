import React, { useState } from "react";

function TrackComplaint() {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState(null);
  const [history, setHistory] = useState([]);

  const handleTrack = () => {
    // This is dummy logic – replace with real API call later
    if (complaintId === "123456") {
      setStatus("Resolved");
      setHistory([
        { date: "2025-06-20", action: "Complaint submitted" },
        { date: "2025-06-21", action: "Under Review" },
        { date: "2025-06-22", action: "Resolved by agent" },
      ]);
    } else {
      setStatus("Not Found");
      setHistory([]);
    }
  };

  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Track Your Complaint</h2>
      <p>Enter your complaint ID to check the current status:</p>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={handleTrack}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Track
      </button>

      {status && (
        <div style={{ marginTop: "30px" }}>
          <h4>Status: {status}</h4>
          {history.length > 0 && (
            <div style={{ textAlign: "left", maxWidth: "400px", margin: "20px auto" }}>
              <h5>Update History:</h5>
              <ul>
                {history.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.date}:</strong> {item.action}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TrackComplaint;