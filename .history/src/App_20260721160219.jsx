import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import ScrollToTop from "./components/layScrollToTop";

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

// Global CSS


function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About/>} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/products" element={<Products />} />

        <Route path="/technology" element={<Technology/>} />

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