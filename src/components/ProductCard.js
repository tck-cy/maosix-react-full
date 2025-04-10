import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, image, link }) => {
  return (
    <Card className="product-card h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button as={Link} to={link} variant="primary" className="mt-auto">
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
