import React from 'react';
import { Container } from '../shared/container/ui/Container';

export const Legal: React.FC = () => {
  return (
    <Container>
      <div className="legal">
        <h1>Legal Information</h1>
        <section>
          <h2>Terms and Conditions</h2>
          <p>By using our services, you agree to the following terms:</p>
          <ul>
            <li>You must be at least 18 years old to make purchases</li>
            <li>All prices are subject to change without notice</li>
            <li>We reserve the right to refuse service to anyone</li>
            <li>Orders are subject to availability</li>
          </ul>
        </section>
        <section>
          <h2>Shipping and Returns</h2>
          <p>Our shipping and return policies:</p>
          <ul>
            <li>Orders are processed within 1-2 business days</li>
            <li>Shipping times vary by location</li>
            <li>Returns accepted within 30 days of delivery</li>
            <li>Items must be unopened and in original condition</li>
          </ul>
        </section>
        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics,
            logos, and images, is the property of Rasha Coffee and is protected by
            intellectual property laws.
          </p>
        </section>
        <section>
          <h2>Disclaimer</h2>
          <p>
            The information provided on this website is for general informational
            purposes only. We make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability of the information.
          </p>
        </section>
      </div>
    </Container>
  );
}; 