import { useMemo, useState } from "react";

import iBoostSlimline from "../assets/iboost-slimline.png";
import smartLcdAngle from "../assets/smart-lcd-angle.png";
import smartLcdFront from "../assets/smart-lcd-front.png";
import tripleBandCommercial from "../assets/triple-band-commercial.png";
import adjustableGain from "../assets/adjustable-gain.png";
import industrialHighPower from "../assets/industrial-high-power.png";

import "./Products.css";

const products = [
  {
    id: 1,
    slug: "iboost-slimline-smart-booster",
    name: "i-Boost Slimline Smart Signal Booster",
    category: "Compact Signal Booster",
    featured: true,
    images: [iBoostSlimline],

    overview:
      "A slim, wall-mountable cellular signal booster designed for homes, small offices, shops, cabins, and other compact indoor environments. Its front monitoring display provides a quick visual indication of operating status while the low-profile enclosure allows discreet installation.",

    shortDescription:
      "Compact 25 mm signal booster with front monitoring display and wall-mounting points.",

    specifications: [
      { label: "Dimensions", value: "158 × 190 × 25 mm" },
      { label: "Display", value: "Front status monitoring display" },
      { label: "RF Interfaces", value: "Two external antenna connectors" },
      { label: "Mounting", value: "Four integrated wall-mounting points" },
      {
        label: "Housing",
        value: "Low-profile heat-dissipating enclosure",
      },
      { label: "Installation Type", value: "Indoor fixed installation" },
    ],

    coverage: {
      value: "Small to medium indoor areas",
      note:
        "Actual coverage depends on outdoor signal strength, antenna selection, cable loss, wall construction, building layout, and supported network bands.",
    },

    applications: [
      "Homes and apartments",
      "Small offices",
      "Retail shops",
      "Reception areas",
      "Meeting rooms",
      "Small restaurants and cafés",
    ],

    benefits: [
      "Slim 25 mm enclosure",
      "Simple wall-mounted installation",
      "Visual operating-status monitoring",
      "Compact and discreet appearance",
      "Improved indoor voice and data reliability",
    ],

    installationRequirements: [
      "Usable mobile signal outside the building",
      "Compatible outdoor donor antenna",
      "Compatible indoor service antenna",
      "Low-loss coaxial cables and RF connectors",
      "Safe separation between indoor and outdoor antennas",
      "Nearby power outlet",
      "Professional installation recommended",
    ],

    brochure: "/brochures/iboost-slimline-booster.pdf",

    faqs: [
      {
        question: "Where should the booster be mounted?",
        answer:
          "Install it indoors in a dry, ventilated position near a power outlet and away from direct sunlight, moisture, and excessive heat.",
      },
      {
        question: "Does the booster create mobile signal?",
        answer:
          "No. It receives an existing outdoor signal, amplifies it, and redistributes it inside the coverage area.",
      },
      {
        question: "Can it be installed in a large commercial building?",
        answer:
          "This compact model is better suited to smaller areas. Large buildings may require a higher-power repeater or multiple indoor antennas.",
      },
    ],
  },

  {
    id: 2,
    slug: "smart-dynamic-lcd-signal-booster",
    name: "Smart Dynamic LCD Signal Booster",
    category: "Smart Multi-Band Repeater",
    featured: true,
    images: [smartLcdAngle, smartLcdFront],

    overview:
      "An intelligent indoor cellular repeater with a dynamic LCD interface for monitoring input and output signal levels. Dedicated BS and MS antenna ports simplify installation, while the ribbed aluminium housing supports passive heat dissipation.",

    shortDescription:
      "Smart repeater with dynamic LCD monitoring, BS/MS antenna ports, automatic control, and passive cooling.",

    specifications: [
      { label: "Display", value: "Dynamic LCD status display" },
      { label: "Outdoor Port", value: "BS antenna port" },
      { label: "Indoor Port", value: "MS antenna port" },
      { label: "Connector Type", value: "N-type RF connector" },
      { label: "Power Input", value: "DC power input" },
      { label: "Controls", value: "UP and DOWN interface buttons" },
      {
        label: "Automatic Functions",
        value: "AGC and oscillation monitoring",
      },
      { label: "Cooling", value: "Passive finned heat-sink chassis" },
      { label: "Mounting", value: "Four wall-installation tabs" },
      { label: "Approximate Size", value: "175 × 135 × 35 mm" },
      { label: "Approximate Weight", value: "1 kg" },
    ],

    coverage: {
      value: "Up to approximately 800 m²",
      note:
        "The displayed product information claims coverage up to 800 m². Actual coverage depends on outdoor signal strength, cable length, antennas, building materials, interference, and floor layout.",
    },

    applications: [
      "Corporate offices",
      "Retail stores",
      "Restaurants",
      "Clinics",
      "Warehouses",
      "Residential buildings",
      "Basements",
      "Shopping-centre units",
    ],

    benefits: [
      "Live signal-level monitoring",
      "Automatic gain-control support",
      "Oscillation-status indication",
      "Separate indoor and outdoor antenna interfaces",
      "Passive cooling without a fan",
      "Compact wall-mounted enclosure",
    ],

    installationRequirements: [
      "Confirm the required mobile network bands",
      "Test outdoor signal strength",
      "Install an outdoor donor antenna",
      "Install an indoor panel or ceiling antenna",
      "Maintain adequate separation between antennas",
      "Use 50-ohm low-loss coaxial cable",
      "Secure all RF connectors before powering on",
      "Professional RF survey recommended",
    ],

    brochure: "/brochures/smart-dynamic-lcd-booster.pdf",

    faqs: [
      {
        question: "What do BS and MS mean?",
        answer:
          "BS identifies the base-station or outdoor antenna side. MS identifies the mobile-station or indoor antenna side.",
      },
      {
        question: "What information appears on the LCD?",
        answer:
          "Depending on the model, the screen may show band status, input and output levels, gain-control status, and oscillation warnings.",
      },
      {
        question: "Why is antenna separation important?",
        answer:
          "Insufficient separation may cause feedback or oscillation, which can reduce booster performance.",
      },
    ],
  },

  {
    id: 3,
    slug: "triple-band-lcd-commercial-repeater",
    name: "Triple-Band LCD Commercial Repeater",
    category: "Commercial Signal Repeater",
    featured: false,
    images: [tripleBandCommercial],

    overview:
      "A commercial-grade repeater designed to improve multiple cellular bands inside medium-sized commercial environments. Its front LCD and status lights allow technicians to monitor operating conditions quickly.",

    shortDescription:
      "Commercial triple-band repeater with LCD monitoring, status LEDs, and heavy-duty thermal housing.",

    specifications: [
      { label: "Band Configuration", value: "Three-band configuration" },
      { label: "Display", value: "Front LCD signal display" },
      { label: "Indicators", value: "Three operating-status LEDs" },
      { label: "Outdoor Interface", value: "BTS antenna connector" },
      { label: "Indoor Interface", value: "Indoor antenna connector" },
      { label: "Housing", value: "Ribbed metal heat-sink enclosure" },
      { label: "Mounting", value: "Integrated mounting tabs" },
      { label: "Power", value: "External DC power adapter" },
    ],

    coverage: {
      value: "Medium commercial indoor environments",
      note:
        "Buildings with concrete walls, metal partitions, several floors, or long corridors may require additional indoor antennas.",
    },

    applications: [
      "Shopping centres",
      "Showrooms",
      "Hotels",
      "Large retail stores",
      "Office floors",
      "Educational buildings",
      "Restaurants",
      "Commercial basements",
    ],

    benefits: [
      "Supports multiple signal bands",
      "Clear LCD monitoring",
      "Quick visual status indicators",
      "Suitable for commercial operation",
      "Wall-mounted design",
      "Passive heat dissipation",
    ],

    installationRequirements: [
      "Confirm network-band compatibility",
      "Complete a professional signal survey",
      "Install a suitable outdoor donor antenna",
      "Install one or more indoor antennas",
      "Calculate splitter and cable losses",
      "Use low-loss 50-ohm coaxial cable",
      "Maintain adequate antenna isolation",
      "Use a protected and ventilated mounting location",
    ],

    brochure: "/brochures/triple-band-commercial-repeater.pdf",

    faqs: [
      {
        question: "Does triple-band support every operator?",
        answer:
          "Not necessarily. The three configured bands must match the frequencies used by the required mobile operators.",
      },
      {
        question: "Can several indoor antennas be connected?",
        answer:
          "Yes, but splitter losses, cable loss, output power, and antenna placement must be calculated correctly.",
      },
      {
        question: "Can it be mounted outdoors?",
        answer:
          "It should normally be mounted indoors unless the specific model has a certified weather-resistant enclosure.",
      },
    ],
  },

  {
    id: 4,
    slug: "adjustable-gain-multiband-repeater",
    name: "Adjustable-Gain Multi-Band Signal Repeater",
    category: "Professional RF Repeater",
    featured: false,
    images: [adjustableGain],

    overview:
      "A professional multi-band amplifier with independent front-panel adjustment controls. These controls allow trained installers to balance gain or attenuation for different bands in complex indoor environments.",

    shortDescription:
      "Professional multi-band repeater with independent manual adjustment and a large passive heat sink.",

    specifications: [
      { label: "Band Control", value: "Independent adjustment by band" },
      { label: "Adjustment Type", value: "Front-panel DIP switch banks" },
      { label: "Housing", value: "Heavy-duty aluminium heat sink" },
      { label: "Cooling", value: "Fanless passive thermal management" },
      {
        label: "Application Level",
        value: "Professional and commercial",
      },
      { label: "Installation", value: "Fixed indoor installation" },
    ],

    coverage: {
      value: "Large or technically complex indoor areas",
      note:
        "Coverage depends on model output, frequency bands, donor signal, cable losses, antenna quantity, splitter losses, and floor layout.",
    },

    applications: [
      "Factories",
      "Warehouses",
      "Large offices",
      "Hospitals",
      "Hotels",
      "Parking areas",
      "Commercial complexes",
      "Multi-room installations",
    ],

    benefits: [
      "Independent band-level adjustment",
      "Useful where signal conditions vary by band",
      "Professional installation flexibility",
      "Large heat-dissipation surface",
      "Suitable for multi-antenna systems",
      "Stable fixed installation",
    ],

    installationRequirements: [
      "Installation by a qualified RF technician",
      "Indoor and outdoor signal survey",
      "Correct band-specific gain configuration",
      "Calculated cable and splitter losses",
      "High-isolation antenna placement",
      "Proper grounding and surge protection",
      "Adequate ventilation",
      "Post-installation oscillation testing",
    ],

    brochure: "/brochures/adjustable-gain-multiband-repeater.pdf",

    faqs: [
      {
        question: "Should users adjust the DIP switches?",
        answer:
          "No. Incorrect gain settings can reduce coverage or cause oscillation. Adjustment should be completed by a trained installer.",
      },
      {
        question: "Why are there separate controls for each band?",
        answer:
          "Signal conditions may differ across frequency bands. Independent control allows each band to be balanced separately.",
      },
      {
        question: "Does the unit require a cooling fan?",
        answer:
          "The enclosure uses passive heat dissipation, but it must still be installed in a ventilated area.",
      },
    ],
  },

  {
    id: 5,
    slug: "industrial-high-power-multiband-repeater",
    name: "Industrial High-Power Multi-Band Repeater",
    category: "Enterprise Signal Distribution",
    featured: true,
    images: [industrialHighPower],

    overview:
      "A high-capacity multi-band repeater designed for enterprise and industrial signal-distribution projects. Its large finned enclosure and multiple adjustment sections make it suitable for professionally engineered coverage systems.",

    shortDescription:
      "High-capacity enterprise repeater for multi-antenna and multi-zone cellular coverage projects.",

    specifications: [
      { label: "System Type", value: "High-power multi-band repeater" },
      {
        label: "Band Sections",
        value: "Multiple independently controlled sections",
      },
      {
        label: "Gain Control",
        value: "Manual front-panel adjustment banks",
      },
      { label: "Cooling", value: "Large passive heat-sink enclosure" },
      { label: "Installation", value: "Enterprise fixed installation" },
      {
        label: "Distribution",
        value: "Supports engineered multi-antenna layouts",
      },
    ],

    coverage: {
      value: "Enterprise buildings and large indoor zones",
      note:
        "Large projects may require several indoor antennas, splitters, couplers, or multiple repeater zones.",
    },

    applications: [
      "Industrial facilities",
      "Warehouses and logistics centres",
      "Large corporate offices",
      "Shopping centres",
      "Hotels and resorts",
      "Hospitals",
      "Underground parking structures",
      "Large institutional buildings",
    ],

    benefits: [
      "Suitable for large coverage projects",
      "Multi-band signal support",
      "Independent system tuning",
      "Robust industrial enclosure",
      "Large passive cooling surface",
      "Compatible with distributed antenna layouts",
    ],

    installationRequirements: [
      "Detailed RF site survey",
      "Link-budget and coverage design",
      "Operator and frequency-band confirmation",
      "Outdoor donor antenna alignment",
      "Indoor antenna distribution plan",
      "Low-loss feeder cable",
      "Splitters and couplers where required",
      "Electrical grounding and lightning protection",
      "Professional commissioning",
    ],

    brochure: "/brochures/industrial-high-power-repeater.pdf",

    faqs: [
      {
        question: "Is this suitable for a single room?",
        answer:
          "It is normally oversized for a single room. A compact booster is generally more appropriate.",
      },
      {
        question: "How many indoor antennas can be used?",
        answer:
          "The number depends on output power and total distribution loss. A link-budget calculation is required.",
      },
      {
        question: "Can one repeater cover several floors?",
        answer:
          "Potentially, but every floor must be included in the RF design and may require additional antennas or separate zones.",
      },
    ],
  },
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  product: "",
  area: "",
  message: "",
};

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeImage, setActiveImage] = useState(products[0].images[0]);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const selectedIndex = useMemo(
    () =>
      products.findIndex(
        (product) => product.id === selectedProduct.id
      ),
    [selectedProduct]
  );

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setOpenFaq(null);

    window.requestAnimationFrame(() => {
      document
        .getElementById("product-details")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  const showPreviousProduct = () => {
    const previousIndex =
      selectedIndex === 0
        ? products.length - 1
        : selectedIndex - 1;

    selectProduct(products[previousIndex]);
  };

  const showNextProduct = () => {
    const nextIndex =
      selectedIndex === products.length - 1
        ? 0
        : selectedIndex + 1;

    selectProduct(products[nextIndex]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleEnquiry = (event) => {
    event.preventDefault();

    console.log("Enquiry submitted:", formData);

    setSubmitted(true);
    setFormData(initialForm);
  };

  const enquiryForProduct = () => {
    setFormData((current) => ({
      ...current,
      product: selectedProduct.name,
    }));

    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="products-page-wrapper">
      <header className="products-hero-section">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-tag">
            Trusted Enterprise Signal Solutions
          </span>

          <h1 className="hero-title">
            Powerful Cellular Signal Boosters for
            <span> Homes, Offices & Industries</span>
          </h1>

          <p className="hero-subtitle">
            Improve indoor mobile connectivity with professional
            multi-band signal repeaters, smart monitoring,
            antenna-distribution systems, and installation support.
          </p>

          <div className="hero-buttons">
            <a href="#catalog" className="hero-btn-primary">
              Explore Products
            </a>

            <a href="#contact" className="hero-btn-secondary">
              Request Consultation
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h3>5</h3>
              <p>Unique Product Types</p>
            </div>

            <div className="stat-box">
              <h3>Multi-Band</h3>
              <p>Coverage Solutions</p>
            </div>

            <div className="stat-box">
              <h3>End-to-End</h3>
              <p>Installation Support</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="catalog"
          className="products-catalog-container"
        >
          <div className="section-intro">
            <span className="section-eyebrow">
              Product catalogue
            </span>

            <h2 className="section-heading">
              Our Signal Booster Range
            </h2>

            <p>
              Select a product to view its complete specifications,
              coverage guidance, applications, installation
              requirements, brochure, and frequently asked questions.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article
                key={product.id}
                className={`product-card ${
                  selectedProduct.id === product.id
                    ? "product-card-selected"
                    : ""
                }`}
              >
                {product.featured && (
                  <span className="featured-label">
                    Featured
                  </span>
                )}

                <div className="product-image-wrapper">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3 className="product-name">
                    {product.name}
                  </h3>

                  <p className="product-description">
                    {product.shortDescription}
                  </p>

                  <div className="product-card-meta">
                    <span>
                      {product.specifications.length} specifications
                    </span>

                    <span>
                      {product.applications.length} applications
                    </span>
                  </div>

                  <button
                    type="button"
                    className="product-action-btn"
                    onClick={() => selectProduct(product)}
                  >
                    View Product Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <article
          id="product-details"
          className="product-details-section"
        >
          <div className="details-container">
            <div className="details-navigation">
              <button
                type="button"
                className="detail-nav-btn"
                onClick={showPreviousProduct}
              >
                ← Previous
              </button>

              <span>
                Product {selectedIndex + 1} of {products.length}
              </span>

              <button
                type="button"
                className="detail-nav-btn"
                onClick={showNextProduct}
              >
                Next →
              </button>
            </div>

            <section className="product-overview-layout">
              <div className="product-gallery">
                <div className="main-product-image">
                  <img
                    src={activeImage}
                    alt={selectedProduct.name}
                  />
                </div>

                {selectedProduct.images.length > 1 && (
                  <div className="thumbnail-row">
                    {selectedProduct.images.map((image, index) => (
                      <button
                        type="button"
                        key={`${selectedProduct.id}-${index}`}
                        className={`thumbnail-btn ${
                          activeImage === image
                            ? "thumbnail-active"
                            : ""
                        }`}
                        onClick={() => setActiveImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${selectedProduct.name} view ${
                            index + 1
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="overview-content">
                <span className="product-category">
                  {selectedProduct.category}
                </span>

                <h2>{selectedProduct.name}</h2>

                <p className="overview-description">
                  {selectedProduct.overview}
                </p>

                <div className="overview-highlights">
                  <div>
                    <strong>
                      {selectedProduct.specifications.length}
                    </strong>
                    <span>Specifications</span>
                  </div>

                  <div>
                    <strong>
                      {selectedProduct.applications.length}
                    </strong>
                    <span>Applications</span>
                  </div>

                  <div>
                    <strong>
                      {selectedProduct.benefits.length}
                    </strong>
                    <span>Key Benefits</span>
                  </div>
                </div>

                <div className="overview-actions">
                  <button
                    type="button"
                    className="primary-detail-btn"
                    onClick={enquiryForProduct}
                  >
                    Enquire About This Product
                  </button>

                  <a
                    className="secondary-detail-btn"
                    href={selectedProduct.brochure}
                    download
                  >
                    Download Brochure
                  </a>
                </div>

                <p className="compliance-note">
                  Frequency compatibility and installation
                  requirements should be verified for local mobile
                  operators and applicable telecommunications
                  regulations before purchase.
                </p>
              </div>
            </section>

            <section className="detail-content-section">
              <div className="detail-section-heading">
                <span>Technical data</span>
                <h2>Technical Specifications</h2>
              </div>

              <div className="specification-table">
                {selectedProduct.specifications.map(
                  (specification) => (
                    <div
                      className="specification-row"
                      key={`${selectedProduct.id}-${specification.label}`}
                    >
                      <span className="specification-label">
                        {specification.label}
                      </span>

                      <span className="specification-value">
                        {specification.value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>

            <section className="coverage-section">
              <div className="coverage-card">
                <span className="coverage-icon">⌁</span>

                <div>
                  <span className="coverage-label">
                    Coverage guidance
                  </span>

                  <h2>{selectedProduct.coverage.value}</h2>

                  <p>{selectedProduct.coverage.note}</p>
                </div>
              </div>
            </section>

            <div className="two-column-detail-grid">
              <section className="detail-list-card">
                <span className="detail-card-number">01</span>
                <h2>Applications</h2>

                <ul>
                  {selectedProduct.applications.map(
                    (application) => (
                      <li key={application}>{application}</li>
                    )
                  )}
                </ul>
              </section>

              <section className="detail-list-card">
                <span className="detail-card-number">02</span>
                <h2>Benefits</h2>

                <ul>
                  {selectedProduct.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="installation-section">
              <div className="installation-heading">
                <span>Professional setup</span>
                <h2>Installation Requirements</h2>

                <p>
                  Correct antenna placement and system balancing are
                  essential for stable and effective signal
                  improvement.
                </p>
              </div>

              <div className="installation-steps">
                {selectedProduct.installationRequirements.map(
                  (requirement, index) => (
                    <div
                      className="installation-step"
                      key={`${selectedProduct.id}-${requirement}`}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{requirement}</p>
                    </div>
                  )
                )}
              </div>
            </section>

            <section className="brochure-section">
              <div>
                <span className="section-eyebrow">
                  Product documentation
                </span>

                <h2>Download the Product Brochure</h2>

                <p>
                  View technical information, installation guidance,
                  supported configurations, and product-selection
                  notes.
                </p>
              </div>

              <a
                className="brochure-download-btn"
                href={selectedProduct.brochure}
                download
              >
                <span>PDF</span>
                Download Brochure
              </a>
            </section>

            <section className="faq-section">
              <div className="detail-section-heading">
                <span>Help centre</span>
                <h2>Frequently Asked Questions</h2>
              </div>

              <div className="faq-list">
                {selectedProduct.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div className="faq-item" key={faq.question}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <strong>{isOpen ? "−" : "+"}</strong>
                      </button>

                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </article>

        <section id="contact" className="enquiry-section">
          <div className="enquiry-container">
            <div className="enquiry-copy">
              <span className="section-eyebrow">
                Project enquiry
              </span>

              <h2>
                Find the Right Signal Booster for Your Site
              </h2>

              <p>
                Provide information about the property, required
                coverage area, operators, and current signal
                condition.
              </p>

              <div className="enquiry-help-list">
                <div>
                  <strong>Site survey</strong>
                  <span>
                    Outdoor and indoor signal assessment
                  </span>
                </div>

                <div>
                  <strong>Product selection</strong>
                  <span>
                    Band, power, antenna, and coverage planning
                  </span>
                </div>

                <div>
                  <strong>Installation support</strong>
                  <span>
                    Professional setup and system commissioning
                  </span>
                </div>
              </div>
            </div>

            <form
              className="enquiry-form"
              onSubmit={handleEnquiry}
            >
              <div className="form-row">
                <label>
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Phone Number *
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Installation Location
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, state or country"
                  />
                </label>

                <label>
                  Approximate Coverage Area
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="Example: 500 m²"
                  />
                </label>
              </div>

              <label>
                Product of Interest
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                >
                  <option value="">Select a product</option>

                  {products.map((product) => (
                    <option
                      key={product.id}
                      value={product.name}
                    >
                      {product.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Project Details *
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Describe the building type, number of floors, current signal condition and required coverage."
                />
              </label>

              <button
                type="submit"
                className="enquiry-submit-btn"
              >
                Submit Enquiry
              </button>

              {submitted && (
                <p className="form-success-message">
                  Thank you. Your enquiry has been recorded.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;