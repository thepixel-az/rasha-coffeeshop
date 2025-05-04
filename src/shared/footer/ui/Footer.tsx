import React from "react";
import styles from "./Footer.module.css";

const footerLinks = [
  [
    { name: "Product & Service", link: "/product-and-service" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ],
  [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Legal", link: "/legal" },
  ]
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__div}>
        <img src="/header-logo.png" alt="Logo" />
        {footerLinks[0].map((Link, index) => (
          <a key={index} href={Link.link} className={styles.footerLink}>
            {Link.name}
          </a>
        ))}
        <div>
          <img src="/facebook.svg" alt="Logo" />
          <img src="/instagram.svg" alt="Logo" />
        </div>
      </div>
      <div className={styles.footer__div}>
        <div>
          {footerLinks[1].map((Link, index) => (
            <a key={index} href={Link.link} className={styles.footerLink}>
              {Link.name}
            </a>
          ))}
        </div>
        <span>© {new Date().getFullYear()} Rasha. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;