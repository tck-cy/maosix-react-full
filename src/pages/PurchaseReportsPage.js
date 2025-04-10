import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PurchaseReportsPage = () => {
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await fetch("/api/purchases");
        if (response.ok) {
          const data = await response.json();
          setPurchases(data);
        } else {
          alert("Failed to fetch purchases");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Purchase Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Requested By</th>
            <th>Approved By</th>
            <th>Approved At</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.amount}</td>
              <td>{purchase.description}</td>
              <td>{purchase.status}</td>
              <td>{purchase.requester_id}</td>
              <td>{purchase.approved_by}</td>
              <td>{purchase.approved_at}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PurchaseReportsPage;
