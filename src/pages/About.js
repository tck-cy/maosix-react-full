import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";
import ValueCard from "../components/ValueCard";

const About = () => {
  const milestones = [
    { year: "1999", description: "Founded as a retail shop in Old Kampala" },
    { year: "2005", description: "Expanded into real estate development" },
    { year: "2010", description: "Ventured into agricultural businesses" },
    { year: "2020", description: "Launched IBACO coffee brand" },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty and transparency at all levels.",
    },
    {
      title: "Sustainability",
      description:
        "Our operations prioritize environmental conservation and long-term viability.",
    },
    {
      title: "Community",
      description:
        "We measure success by our positive impact on people's lives.",
    },
    {
      title: "Innovation",
      description:
        "We continuously seek better ways to serve our customers and community.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero bg-dark text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">MAOSIX</h1>
          <p className="lead">Millennium Association of Six</p>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-5">
        <SectionHeader
          title="Our Story"
          subtitle="From humble beginnings to diversified growth"
        />

        <Row className="mb-5">
          <Col md={6}>
            <p className="lead">
              Founded on September 9th, 1999, MAOSIX began as a retail shop on
              Old Kampala Road.
            </p>
            <p>
              Over the past two decades, we have evolved into a multi-sector
              business group with diversified ventures in real estate,
              agriculture, and livestock, including dairy, apiary, piggery, and
              poultry.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/images/about-history.jpg"
              alt="MAOSIX early days"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Timeline Section */}
        <SectionHeader
          title="Our Journey"
          subtitle="Key milestones in our growth"
          className="mt-5"
        />
        <Timeline items={milestones} />

        {/* Mission Section */}
        <SectionHeader
          title="Our Mission & Values"
          subtitle="What drives us forward"
          className="mt-5"
        />

        <Row className="mb-4">
          <Col lg={8} className="mx-auto text-center">
            <p className="lead">
              At the heart of MAOSIX is a commitment to empowering communities
              and fostering sustainable growth. Our mission goes beyond business
              — we aim to create meaningful employment, offer training
              opportunities, and address the unique challenges of the
              neighborhoods where we operate.
            </p>
          </Col>
        </Row>

        {/* Values Grid */}
        <Row className="g-4">
          {values.map((value, index) => (
            <Col key={index} md={6} lg={3}>
              <ValueCard title={value.title} description={value.description} />
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <section className="bg-light p-5 rounded mt-5 text-center">
          <h3 className="mb-3">Ready to partner with us?</h3>
          <p className="mb-4">
            Whether you're interested in our products, want to visit our farms,
            or explore collaboration opportunities, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Talk to us
          </a>
        </section>
      </Container>
    </>
  );
};

export default About;
