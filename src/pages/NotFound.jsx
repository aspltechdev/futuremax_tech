import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page not-found-page">
      <section className="page-banner">
        <div className="container">

          <h1>404</h1>

          <h2>Page Not Found</h2>

          <p>
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="btn-primary">
            Back to Home
          </Link>

        </div>
      </section>
    </main>
  );
};

export default NotFound;