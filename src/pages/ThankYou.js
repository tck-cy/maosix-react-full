import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const ThankYou = () => {
  return (
    <Container className="py-5 text-center">
      <SectionHeader
        title="Thank You!"
        subtitle="We've received your message"
      />
      <div className="mb-4">
        <p className="lead">
          Thank you for contacting MAOSIX Ltd. We'll get back to you within 24
          hours.
        </p>
      </div>
      <Button as={Link} to="/" variant="primary">
        Return to Home
      </Button>
    </Container>
  );
};

export default ThankYou;
