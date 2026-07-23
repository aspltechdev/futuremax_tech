import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import IndustriesPage from "./pages/IndustriesPage";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Automatically scroll to top on route change */}
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
    </BrowserRouter>
  );
}

export default App;