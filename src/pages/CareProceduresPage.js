import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CareProceduresPage = () => {
  const [procedures, setProcedures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const response = await fetch("/api/procedures");
        if (response.ok) {
          const data = await response.json();
          setProcedures(data);
        } else {
          alert("Failed to fetch procedures");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProcedures();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Care Procedures</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Department</th>
            <th>Current Version</th>
            <th>Created By</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {procedures.map((procedure) => (
            <tr key={procedure.id}>
              <td>{procedure.id}</td>
              <td>{procedure.title}</td>
              <td>{procedure.description}</td>
              <td>{procedure.department}</td>
              <td>{procedure.current_version}</td>
              <td>{procedure.created_by}</td>
              <td>{procedure.created_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default CareProceduresPage;
