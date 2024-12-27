import { Link } from "react-router-dom";
const Navbar = () => {
  const imgSrc =
    "https://res.cloudinary.com/dmvawq2ak/image/upload/v1735150663/haircare_p0tizw.png";
  return (
    <div className="navbar">
      <div>
        <Link className="logo-box" to="/">
          <img className="navbar-logo" src={imgSrc} alt="haircare logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/products" className="navbar-link">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
