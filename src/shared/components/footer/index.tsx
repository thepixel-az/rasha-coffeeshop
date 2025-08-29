import "./Footer.css";

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
    <footer className="footer">
      <div className="footer__div footer__div__logo">
        <img className="footer__div__logo_" src="/header-logo.png" alt="Logo" />
        <div className="footer__div__logo__text">
          {footerLinks[0].map((Link, index) => (
            <a key={index} href={Link.link} className="footerLink">
              {Link.name}
            </a>
          ))}
          <div className="footer__div__logo__text__social">
            <img src="/facebook.svg" alt="Logo" />
            <img src="/instagram.svg" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="footer__div">
        <div className="footer__div__links">
          {footerLinks[1].map((Link, index) => (
            <a key={index} href={Link.link} className="footerLink">
              {Link.name}
            </a>
          ))}
        </div>
        <span className="footer__div__company">© {new Date().getFullYear()} Rasha. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;