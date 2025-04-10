import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: "coffee",
      title: "IBACO Premium Coffee",
      description:
        "Grown in the fertile volcanic soils of Western Uganda, our Robusta coffee beans develop a distinctive aroma and full-bodied flavor profile.",
      care: "We practice shade-grown cultivation to protect biodiversity, using organic compost from our dairy farm as natural fertilizer.",
      image: "/images/coffee-product.jpg",
      features: ["100% Organic", "Fair Trade Certified", "Single-Origin"],
    },
    {
      id: "poultry",
      title: "Free-Range Eggs",
      description:
        "Our chickens roam freely in spacious pastures, resulting in eggs with richer flavor and deeper colored yolks.",
      care: "We maintain a stress-free environment with a maximum of 500 birds per acre. Our chickens enjoy natural sunlight and fresh air.",
      image: "/images/poultry-product.jpg",
      features: ["Antibiotic-Free", "Pasture-Raised", "Daily Collection"],
    },
    {
      id: "apiary",
      title: "Pure Organic Honey",
      description:
        "Our honey is harvested from bees that forage on diverse wildflowers in Uganda's pristine ecosystems.",
      care: "We practice sustainable beekeeping using traditional Kenyan top-bar hives placed in chemical-free zones.",
      image: "/images/apiary-product.jpg",
      features: ["Raw & Unprocessed", "Single-Origin", "Sustainably Harvested"],
    },
    {
      id: "dairy",
      title: "Fresh Dairy Products",
      description:
        "Our dairy range includes fresh milk, artisanal ghee, and natural yogurt produced from grass-fed Ankole cattle.",
      care: "Our cattle graze on open pastures with access to clean water and mineral supplements.",
      image: "/images/dairy-product.jpg",
      features: ["Grass-Fed", "Small-Batch", "Handcrafted"],
    },
  ];

  return (
    <Container className="py-5">
      <SectionHeader
        title="Our Premium Products"
        subtitle="Sustainably grown and ethically produced for exceptional quality"
      />

      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-5 ${index % 2 === 0 ? "bg-light" : ""}`}
        >
          <Container>
            <Row
              className={`align-items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <Col md={6} className="mb-4 mb-md-0">
                <Card.Img
                  src={product.image}
                  alt={product.title}
                  className="rounded shadow"
                />
              </Col>
              <Col md={6}>
                <h2 className="mb-3">{product.title}</h2>
                <p className="lead">{product.description}</p>

                <h4 className="mt-4">Our Care Process</h4>
                <p>{product.care}</p>

                <div className="d-flex flex-wrap gap-2 my-3">
                  {product.features.map((feature, i) => (
                    <span key={i} className="badge bg-primary">
                      <i className="fas fa-check me-1"></i> {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/contact?product=${product.id}`}
                  className="btn btn-primary mt-3"
                >
                  Inquire About {product.title.split(" ")[0]}
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </Container>
  );
};

export default Products;
