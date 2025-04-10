import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ProcedureEditor = ({ department }) => {
  const { user } = useAuth();
  const [procedures, setProcedures] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchProcedures = async () => {
      const res = await axios.get(`/api/procedures?department=${department}`);
      setProcedures(res.data);
    };
    fetchProcedures();
  }, [department]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/procedures/${editingId}`, formData);
    } else {
      await axios.post("/api/procedures", { ...formData, department });
    }
    // Refresh procedures
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this procedure?")) {
      await axios.delete(`/api/procedures/${id}`);
      // Refresh procedures
    }
  };

  return (
    <div>
      <h2>
        {department.charAt(0).toUpperCase() + department.slice(1)} Procedures
      </h2>

      {(user.role === "director" || user.role === "manager") && (
        <form onSubmit={handleSubmit}>
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Procedure title"
            required
          />
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Detailed procedure"
            required
          />
          <button type="submit">
            {editingId ? "Update" : "Create"} Procedure
          </button>
        </form>
      )}

      <div className="procedure-list">
        {procedures.map((proc) => (
          <div key={proc.id} className="procedure-item">
            <h3>{proc.title}</h3>
            <p>{proc.description}</p>
            <div className="procedure-actions">
              {(user.role === "employee" || user.role === "accountant") && (
                <button onClick={() => openSuggestionModal(proc.id)}>
                  Suggest Change
                </button>
              )}
              {user.role === "manager" && (
                <button
                  onClick={() => {
                    setEditingId(proc.id);
                    setFormData({
                      title: proc.title,
                      description: proc.description,
                    });
                  }}
                >
                  Edit
                </button>
              )}
              {user.role === "director" && (
                <button onClick={() => handleDelete(proc.id)}>Delete</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
