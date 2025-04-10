import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ExcelImportPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/excel/import", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully");
        navigate("/dashboard");
      } else {
        alert("Failed to upload file");
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Import Excel File</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Select Excel File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} required />
        </Form.Group>

        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </Form>
    </Container>
  );
};

export default ExcelImportPage;
