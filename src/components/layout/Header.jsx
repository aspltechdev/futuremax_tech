import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";



const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenu(false);

  return (
    <header className={sticky ? "header sticky" : "header"}>

      <div className="container header-container">

        {/* Logo */}

        <Link to="/" className="logo">

          <img
            src="/images/logo.png"
            alt="Futuremax Technology"
          />

        </Link>

        {/* Navigation */}

        <nav className={mobileMenu ? "nav active" : "nav"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/solutions" onClick={closeMenu}>
            Solutions
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/technology" onClick={closeMenu}>
            Technology
          </NavLink>

          <NavLink to="/industries" onClick={closeMenu}>
            Industries
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </nav>

        {/* CTA */}

        <div className="header-right">

          <Link
            to="/contact"
            className="quote-btn"
          >
            Request Survey
            <ArrowRight size={18} />
          </Link>

          <button
            className="mobile-btn"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

    </header>
  );
};

export default Header;