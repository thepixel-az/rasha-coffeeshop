import React from 'react';
import { Container } from '../shared/container/ui/Container';

export const About: React.FC = () => {
  return (
    <Container>
      <div className="about">
        <h1>About Rasha Coffee</h1>
        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Rasha Coffee began with a simple mission: to bring the finest coffee
            experience to our customers. Our journey started in a small roastery, where we
            discovered our passion for perfecting the art of coffee roasting.
          </p>
        </section>
        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <h3>Quality</h3>
              <p>We source only the finest beans and maintain strict quality control throughout our process.</p>
            </li>
            <li>
              <h3>Sustainability</h3>
              <p>We work directly with farmers who practice sustainable farming methods.</p>
            </li>
            <li>
              <h3>Community</h3>
              <p>We believe in building strong relationships with our customers and partners.</p>
            </li>
          </ul>
        </section>
        <section className="our-team">
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate coffee enthusiasts, professional baristas, and
            experienced roasters who are dedicated to bringing you the perfect cup of coffee.
          </p>
        </section>
      </div>
    </Container>
  );
}; 