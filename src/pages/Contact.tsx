import React from 'react';
import { Container } from '../shared/container/ui/Container';

export const Contact: React.FC = () => {
  return (
    <Container>
      <div className="contact">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <section>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Reach out to us through any of the following channels:</p>
            <ul>
              <li>Email: info@rasha-coffee.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Coffee Street, Brew City, BC 12345</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}; 