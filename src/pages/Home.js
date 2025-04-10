import React from "react";
import Hero from "../components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import SectionHeader from "../components/SectionHeader";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "IBACO Coffee",
      description: "Premium Robusta coffee grown in Western Uganda",
      image: "/images/coffee-product.jpg",
      link: "/products#coffee",
    },
    {
      id: 2,
      title: "Free-Range Eggs",
      description: "Nutrient-rich eggs from pasture-raised chickens",
      image: "/images/poultry-product.jpg",
      link: "/products#poultry",
    },
    {
      id: 3,
      title: "Organic Honey",
      description: "Pure, raw honey from our sustainable apiaries",
      image: "/images/apiary-product.jpg",
      link: "/products#apiary",
    },
  ];

  return (
    <>
      <Hero
        title="Millennium Association of Six"
        subtitle="Building sustainable businesses that empower communities"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Explore Our Products"
        ctaLink="/products"
      />

      <section className="py-5">
        <Container>
          <SectionHeader
            title="Our Featured Products"
            subtitle="Sustainably grown and ethically produced"
          />
          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} md={4}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  link={product.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
