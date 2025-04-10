import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SalesReportsPage = () => {
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch("/api/sales");
        if (response.ok) {
          const data = await response.json();
          setSales(data);
        } else {
          alert("Failed to fetch sales");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchSales();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Sales Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.amount}</td>
              <td>{sale.description}</td>
              <td>{sale.status}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/sales/${sale.id}`)}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SalesReportsPage;
