import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ExcelImporter = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [importType, setImportType] = useState("inventory");
  const [imports, setImports] = useState([]);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("importType", importType);

    await axios.post("/api/excel/import", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // Refresh import history
  };

  return (
    <div>
      <h2>Data Import</h2>
      {user.role === "accountant" && (
        <form onSubmit={handleFileUpload}>
          <select
            value={importType}
            onChange={(e) => setImportType(e.target.value)}
          >
            <option value="inventory">Inventory Data</option>
            <option value="financial">Financial Data</option>
            <option value="production">Production Data</option>
          </select>
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <button type="submit">Upload and Process</button>
        </form>
      )}

      <div className="import-history">
        <h3>Import History</h3>
        {imports.map((imp) => (
          <div key={imp.id}>
            <p>File: {imp.file_name}</p>
            <p>Type: {imp.import_type}</p>
            <p>Status: {imp.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
