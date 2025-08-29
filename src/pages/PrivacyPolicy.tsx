import React from 'react';
import { Container } from '../shared/container/ui/Container';

export const PrivacyPolicy: React.FC = () => {
  return (
    <Container>
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <section>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Order history</li>
          </ul>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your orders and payments</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our services</li>
          </ul>
        </section>
        <section>
          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Payment processors</li>
            <li>Shipping partners</li>
          </ul>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}; 