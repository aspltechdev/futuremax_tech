import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import IndustriesPage from "./pages/IndustriesPage";

// Icons
import { FaWhatsapp } from "react-icons/fa";

// Global CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/products" element={<Products />} />

        <Route path="/technology" element={<Technology />} />

        <Route path="/industries" element={<IndustriesPage />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/support" element={<Support />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919840077793?text=Hi%20Futuremax%20Technology,%20I%20would%20like%20to%20know%20more%20about%20your%20Mobile%20Signal%20Boosters%20and%20DAS%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat With Us</span>
        <span className="whatsapp-ripple"></span>
        <FaWhatsapp />
      </a>
    </BrowserRouter>
  );
}

export default App;