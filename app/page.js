"use client";

import { useEffect, useState } from "react";
import products from "../data/products.json";

const gallery = [
  {
    image: "/img/cll/img.jpg",
    title: "Floor Tiles",
    description:
      "Strong and stylish tiles perfect for living rooms, hallways, and commercial spaces.",
  },
  {
    image: "/img/charlesdeluvio-LyQi9DS7AEg-unsplash.jpg",
    title: "Wall Tiles",
    description:
      "Elegant wall tiles that bring color and texture to your interiors.",
  },
  {
    image: "/img/charlesdeluvio-LyQi9DS7AEg-unsplash.jpg",
    title: "Bathroom Tiles",
    description:
      "Moisture-resistant tiles designed for a clean and modern bathroom look.",
  },
];

const features = [
  [
    "fa-shield-halved",
    "Durable & Long-Lasting",
    "Crafted with precision to withstand years of use while maintaining their elegance.",
  ],
  [
    "fa-water",
    "Waterproof",
    "Ideal for bathrooms, kitchens, and outdoor areas — resistant to moisture and stains.",
  ],
  [
    "fa-broom",
    "Easy to Clean",
    "Our tiles require minimal maintenance, keeping your space looking fresh and new.",
  ],
  [
    "fa-leaf",
    "Eco-Friendly Materials",
    "We use sustainable materials and processes to protect the planet and your home.",
  ],
];

const firstTypedWords = ["Leave a", "Lë një", "Laissez un", "Hinterlasse eine", "Leave a"];
const secondTypedWords = ["Message", "Mesazh", "Message", "Nachricht", "Message"];

function useTypedWords(words, typeSpeed) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const word = words[wordIndex];
      characterIndex += deleting ? -1 : 1;
      setText(word.slice(0, characterIndex));

      if (!deleting && characterIndex === word.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, typeSpeed * 4);
        return;
      }

      if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeoutId = window.setTimeout(tick, typeSpeed);
    }

    tick();
    return () => window.clearTimeout(timeoutId);
  }, [words, typeSpeed]);

  return text;
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [slide, setSlide] = useState(0);
  const [popup, setPopup] = useState(null);
  const [copied, setCopied] = useState(false);
  const firstMessage = useTypedWords(firstTypedWords, 130);
  const secondMessage = useTypedWords(secondTypedWords, 150);
  const visibleProducts = products.filter((product) => product.published);
  const displayedProducts = showAll ? visibleProducts : visibleProducts.slice(0, 3);
  const currentSlide = gallery[slide];

  async function copyPhone(event) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText("044970581");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy phone number:", error);
    }
  }

  return (
    <main>
      <header className="site-header" id="home">
        <div className="nav">
          <div className="container">
            <div className="logo">
              <img src="/img/nobgclose.png" alt="XB Mont" />
            </div>
            <ul>
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="inside">
              <h1>X&B mont</h1>
              <p>Placeholder text</p>
              <a className="button-57" href="#contact">
                <span className="text">Contact Us</span><span>Now !</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="service" id="services">
        <div className="container">
          <div className="content">
            <p>Service</p>
            <h1>Our Solution To All Your Problems</h1>
            <p>Placeholder text</p>
          </div>
          <div className="row">
            {displayedProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="card">
                  <div className="card-header">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="card-body">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                  </div>
                  <div className="card-footer">
                    <a className="cta" href="#contact">
                      <span className="hover-underline-animation">Get started</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="button-28" type="button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View all"}
        </button>
      </section>

      <section id="about">
        <div className="container">
          <div className="col">
            <h1>About<br />Us</h1>
          </div>
          <div className="col">
            <h1>XB Mont</h1>
            <p>
              Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut
              pharetra sit amet aliquam id diam maecenas ultricies mi.
              Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras
              sed felis eget. Amet risus nullam eget felis eget nunc. Lacus
              vestibulum sed arcu non odio euismod. Consectetur adipiscing elit
              duis tristique.Pharetra magna ac placerat vestibulum lectus mauris
              ultrices. Ut pharetra sit amet aliquam id diam maecenas ultricies
              mi. Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis
              cras sed felis eget. Amet risus nullam eget felis eget nunc. Lacus
              vestibulum sed arcu non odio euismod. Consectetur adipiscing elit
              duis tristique.
            </p>
            <ul className="wrapper">
              <li className="icon facebook">
                {/* Replace with Facebook URL when available */}
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
                <span className="tooltip">Facebook</span>
              </li>
              <li className="icon phone">
                <a href="tel:+38344970581" onClick={copyPhone} aria-label="Phone">
                  <i className="fa fa-phone" />
                </a>
                <span className="tooltip">{copied ? "Copied!" : "Phone"}</span>
              </li>
              <li className="icon instagram">
                <a href="https://www.instagram.com/xbmont/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                <span className="tooltip">Instagram</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <h2>Our Tile Collection</h2>
        <p className="subtitle">Explore our wide range of high-quality tiles for every space</p>
        <div className="slider-container">
          <button className="slider-btn prev" type="button" aria-label="Previous slide" onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}>&#10094;</button>
          <div className="slider">
            <div className="slide">
              <img src={currentSlide.image} alt={currentSlide.title} />
              <h3>{currentSlide.title}</h3>
              <p>{currentSlide.description}</p>
              <button className="view-btn" type="button" onClick={() => setPopup(currentSlide)}>Full View</button>
            </div>
          </div>
          <button className="slider-btn next" type="button" aria-label="Next slide" onClick={() => setSlide((slide + 1) % gallery.length)}>&#10095;</button>
          {popup && (
            <div className="image-popup active" role="dialog" aria-modal="true" aria-label="Full View" onClick={() => setPopup(null)}>
              <button className="close" type="button" aria-label="Close Full View" onClick={() => setPopup(null)}>&times;</button>
              <img className="popup-img" src={popup.image} alt={popup.title} onClick={(event) => event.stopPropagation()} />
            </div>
          )}
        </div>
      </section>

      <section className="features" id="features">
        <h2>Why Choose Us</h2>
        <p className="subtitle">Tiles built for quality, beauty, and durability</p>
        <div className="features-grid">
          {features.map(([icon, title, text]) => (
            <div className="feature-card visible" key={title}>
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="title">
            <div className="msg1">
              <span style={{ fontSize: "45px" }}>{firstMessage}</span>
              <br /><span style={{ fontSize: "45px" }}>{secondMessage}</span>
            </div>
            <div className="msg2"><span style={{ fontSize: "45px" }}>Location</span></div>
          </div>
          <div className="row">
            <form action="https://formsubmit.co/bledarterbunja88@gmail.com" method="POST" className="col">
              <div className="form">
                <label htmlFor="name">Full Name</label>
                <input className="input" id="name" name="name" placeholder="Emri" required type="text" />
                <span className="input-border" />
              </div>
              <div className="form">
                <label htmlFor="email">Email</label>
                <input className="input" id="email" name="email" placeholder="Email" required type="email" />
                <span className="input-border" />
              </div>
              <div className="form">
                <label htmlFor="phone">Phone Number</label>
                <input className="input" id="phone" name="phone" placeholder="Number" required type="tel" />
                <span className="input-border" />
              </div>
              <div className="form">
                <label htmlFor="message">Mesazhi</label>
                <textarea className="input" id="message" name="message" placeholder="Message" rows="5" required />
                <span className="input-border" />
              </div>
              <button className="btn2" type="submit"><span className="spn2">SUBMIT !</span></button>
            </form>
            <div className="col location">
              <iframe
                title="Pristina map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46940.2060114189!2d21.1587273!3d42.666380100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1728569240295!5m2!1sen!2s"
                width="400"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=Pristina" target="_blank" rel="noreferrer">Open in Maps</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <div className="row">
            <a href="https://www.instagram.com/xbmont/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram" /></a>
            {/* Replace with Facebook URL when available */}
            <a href="#"><i className="fa-brands fa-facebook" /></a>
            <a href="tel:+38344970581" onClick={copyPhone}><i className="fa fa-phone" /></a>
          </div>
          <div className="row">
            <ul>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div className="row">XB MONT Copyright © 2021 - All rights reserved</div>
        </div>
      </footer>
    </main>
  );
}
