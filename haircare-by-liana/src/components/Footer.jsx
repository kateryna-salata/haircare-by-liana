import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
          <div className="footer-links">
            <a href="#" className="footer-link">
              GitHub Repo
            </a>{" "}
            <Link to="/" className="footer-link">
              Homepage
            </Link>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </div>
          <section className="footer-contacts">
            <h4>Contact me</h4>
            <p>🖃 haircare@FakeEmail.com</p>
            <p>🕻 00000000 </p>
          </section>
        </div>
        <span className="copyright">Copyright © 2024 Haircare by Liana</span>
      </footer>
    </>
  );
};

export default Footer;
