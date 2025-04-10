import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content text-center text-white">
        <h1 className="display-4 fw-bold mb-4">{title}</h1>
        <p className="lead mb-5">{subtitle}</p>
        <Button
          as={Link}
          to={ctaLink}
          variant="primary"
          size="lg"
          className="px-4 py-2"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
