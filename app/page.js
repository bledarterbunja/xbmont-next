"use client";

import { useState } from "react";
import products from "../data/products.json";

const gallery = [
  { image: "/img/traf-sL7w1eUfHJQ-unsplash.jpg", title: "Placeholder text" },
  { image: "/img/adadsd.jpg", title: "Placeholder text" },
  { image: "/img/tile-floor.jpg", title: "Placeholder text" },
  { image: "/img/interior-designer-working-on-new-600nw-2340696285.webp", title: "Placeholder text" },
];

const features = [
  ["fa-gem", "Placeholder text", "Placeholder text"],
  ["fa-compass-drafting", "Placeholder text", "Placeholder text"],
  ["fa-clock", "Placeholder text", "Placeholder text"],
  ["fa-handshake", "Placeholder text", "Placeholder text"],
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [slide, setSlide] = useState(0);
  const [popup, setPopup] = useState(null);
  const [copied, setCopied] = useState(false);
  const visibleProducts = products.filter((product) => product.published);
  const displayedProducts = showAll ? visibleProducts : visibleProducts.slice(0, 3);
  const currentImage = gallery[slide];

  async function copyPhone() {
    await navigator.clipboard.writeText("+1 234 567 890");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main>
      <header id="home" className="site-header">
        <nav className="nav" aria-label="Main navigation">
          <div className="container">
            <a className="brand" href="#home">XB-Mont</a>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <div className="container inside">
            <p>Interior and exterior design</p>
            <h1>Placeholder text</h1>
            <p>Placeholder text</p>
            <a className="button-57" href="#services">
              <span>Explore services</span><span>Explore services</span>
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="service">
        <div className="container">
          <div className="content">
            <p>What we do</p>
            <h2>Our services</h2>
            <p>Placeholder text</p>
          </div>
          <div className="row">
            {displayedProducts.map((product) => (
              <article className="col" key={product.id}>
                <div className="card-header">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div className="card-footer">
                  <a className="cta" href="#contact">
                    <span className="hover-underline-animation">Get started</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          {visibleProducts.length > 3 && (
            <button className="more" type="button" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show less" : "View all"}
            </button>
          )}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="col">
            <p>About XB-Mont</p>
            <h2>Placeholder text</h2>
            <p>Placeholder text</p>
            <button className="btn2" type="button" onClick={copyPhone}>
              <span className="spn2">{copied ? "Phone copied" : "Copy phone"}</span>
            </button>
          </div>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <h2 id="gallery-title">Our work</h2>
        <p className="subtitle">Placeholder text</p>
        <div className="slider-container">
          <button className="slider-btn prev" type="button" aria-label="Previous image" onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}>‹</button>
          <article className="slide">
            <img src={currentImage.image} alt={currentImage.title} />
            <h3>{currentImage.title}</h3>
            <p>Placeholder text</p>
            <button className="view-btn" type="button" onClick={() => setPopup(currentImage)}>Full View</button>
          </article>
          <button className="slider-btn next" type="button" aria-label="Next image" onClick={() => setSlide((slide + 1) % gallery.length)}>›</button>
        </div>
      </section>

      <section className="features" aria-labelledby="why-title">
        <h2 id="why-title">Why Choose Us</h2>
        <p className="subtitle">Placeholder text</p>
        <div className="features-grid">
          {features.map(([icon, title, text]) => (
            <article className="feature-card visible" key={icon}>
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="title">
          <h2>Contact us</h2>
          <p>Placeholder text</p>
        </div>
        <form action="https://formsubmit.co/your@email.com" method="POST">
          <label className="form">
            <input className="input" name="name" type="text" placeholder="Name" required />
            <span className="input-border" />
          </label>
          <label className="form">
            <input className="input" name="email" type="email" placeholder="Email" required />
            <span className="input-border" />
          </label>
          <label className="form">
            <textarea className="input" name="message" placeholder="Message" rows="4" required />
            <span className="input-border" />
          </label>
          <button className="btn2" type="submit"><span className="spn2">Send message</span></button>
        </form>
      </section>

      <footer className="footer">
        <div className="row"><a href="#home">XB-Mont</a></div>
        <div className="row"><a href="#about">About</a> · <a href="#services">Services</a> · <a href="#contact">Contact</a></div>
        <div className="row">© 2026 XB-Mont. Placeholder text.</div>
      </footer>

      {popup && (
        <div className="image-popup active" role="dialog" aria-modal="true" aria-label="Full view" onClick={() => setPopup(null)}>
          <button className="close" type="button" aria-label="Close full view" onClick={() => setPopup(null)}>×</button>
          <img src={popup.image} alt={popup.title} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
