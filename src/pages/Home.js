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
  const heroImages = [
    "/images/hero-bg1.jpg",
    "/images/hero-bg1.jpg",
    "/images/hero-bg1.jpg",
  ];

  return (
    <>
      <Hero
        title="Millennium Association of Six"
        subtitle="Building sustainable businesses that empower communities"
        images={heroImages}
        ctaText="Explore Our Products"
        ctaLink="/products"
        minHeight={{
          base: "90vh", // Mobile
          sm: "95vh", // Small devices
          md: "100vh", // Medium devices
          lg: "105vh", // Large devices
          xl: "110vh", // Extra large
        }}
        titleSize={{ base: "2.5rem", md: "3.5rem" }}
        subtitleSize={{ base: "1rem", md: "1.25rem" }}
        interval={4000}
      />

      <section className="py-5">
        <Container>
          <SectionHeader
            title="Our Featured Products"
            subtitle="Sustainably grown and ethically produced"
          />
          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4}>
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
