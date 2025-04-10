import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const PurchaseRequest = () => {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({ amount: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/purchases", formData);
    // Refresh requests
  };

  const handleApprove = async (id) => {
    await axios.put(`/api/purchases/${id}/approve`);
    // Refresh requests
  };

  return (
    <div>
      <h2>Purchase Requests</h2>

      {(user.role === "director" || user.role === "manager") && (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            placeholder="Amount"
            required
          />
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Purpose of purchase"
            required
          />
          <button type="submit">Submit Request</button>
        </form>
      )}

      <div className="request-list">
        {requests.map((req) => (
          <div key={req.id} className="request-item">
            <p>Amount: ${req.amount}</p>
            <p>Purpose: {req.description}</p>
            <p>Status: {req.status}</p>
            {user.role === "director" && req.status === "requested" && (
              <button onClick={() => handleApprove(req.id)}>Approve</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
