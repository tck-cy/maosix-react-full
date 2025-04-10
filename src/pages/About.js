import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <Container className="py-5">
      <SectionHeader
        title="About MAOSIX Ltd"
        subtitle="Millennium Association of Six"
      />
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h3>Our Story</h3>
          <p>
            Founded on September 9th, 1999, MAOSIX began as a retail shop on Old
            Kampala Road. Over the past two decades, we have evolved into a
            multi-sector business group with diversified ventures in real
            estate, agriculture, and livestock.
          </p>
        </div>
        <div className="col-lg-6">
          <h3>Our Mission</h3>
          <p>
            At the heart of MAOSIX is a commitment to empowering communities and
            fostering sustainable growth. Our mission goes beyond business — we
            aim to create meaningful employment, offer training opportunities,
            and address the unique challenges of the neighborhoods where we
            operate.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
