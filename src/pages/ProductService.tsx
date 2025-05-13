import React from 'react';
import { Container } from '../shared/container/ui/Container';

export const ProductService: React.FC = () => {
  return (
    <Container>
      <div className="product-service">
        <h1>Products & Services</h1>
        <section className="coffee-products">
          <h2>Our Coffee Products</h2>
          <p>Discover our premium selection of coffee products, carefully sourced and roasted to perfection.</p>
          <ul>
            <li>Specialty Coffee Beans</li>
            <li>Ground Coffee</li>
            <li>Coffee Pods</li>
            <li>Gift Sets</li>
          </ul>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <p>We offer a range of services to enhance your coffee experience:</p>
          <ul>
            <li>Coffee Tasting Sessions</li>
            <li>Brewing Workshops</li>
            <li>Corporate Events</li>
            <li>Custom Roasting</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}; 