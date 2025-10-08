import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Input from "./components/Input";
import Stat from "./components/Stat";
import "./styles.css";
import {
  FileText,
  Bath,
  MessageSquareMore,
  PencilLineIcon,
  PhoneCallIcon,
  CarFront,
  Dumbbell,
  BedDouble,
  WavesLadder,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function RealEstateLanding() {
  return (
    <div className="Landing">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Des logements pensés
              <br />
              pour votre style de vie
            </h1>
            <p className="hero-description">
              Découvrez nos propriétés exclusives et trouvez votre maison de
              rêve.
              <br />
              Nous proposons une sélection variée de logements adaptés à tous
              les besoins, que vous recherchiez une villa moderne, un
              appartement en centre-ville ou une résidence paisible en bord de
              mer. Profitez d’un accompagnement personnalisé et d’un service
              haut de gamme pour concrétiser votre projet immobilier en toute
              sérénité.
            </p>
          </div>
          <button className="book_btn">BOOK NOW</button>
        </div>
        <div className="slider">
          <div className="slide_item active_item"></div>
          <div className="slide_item"></div>
          <div className="slide_item"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">EVERYTHING SHOULD BE THIS EASY.</h2>
        <div className="services-list">
          <div className="service-item">
            <div className="service-icon">
              <MessageSquareMore className="icone" />
            </div>
            <span className="text-icon">Answer questions</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <FileText className="icone" />
            </div>
            <span className="text-icon">Select a quote</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <PencilLineIcon className="icone" />
            </div>
            <span className="text-icon">Get registered</span>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <PhoneCallIcon className="icone" />
            </div>
            <span className="text-icon">Service d'assistance</span>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="projects">
        <h2 className="section-title">OUR RECENT PROJECTS</h2>
        <div className="pagination-dots">
          <div className="dot dot-active"></div>
          <div className="dot dot-inactive"></div>
        </div>

        <div className="projects-list">
          <Card
            title={"Villa Elegance à Agadir"}
            description={
              "Une villa moderne avec vue sur l'océan, offrant luxe et confort dans un cadre exceptionnel."
            }
            imageUrl={"/appartment/villa-agadir.jpg"}
            rating={4.8}
          />

          <Card
            title={"Villa Harmonie à Tanger"}
            description={
              "Architecture contemporaine alliant tradition et modernité dans un environnement paisible."
            }
            imageUrl={"/appartment/villa-tanger.jpg"}
            rating={4.9}
          />
          <Card
            title={"Villa à Dar Dour CASABLANCA"}
            description={
              "Résidence de prestige au cœur de Casablanca, parfaite pour un vie urbaine raffinée."
            }
            imageUrl={"/appartment/villa-casa.jpg"}
            rating={3.9}
          />
        </div>
      </section>

      {/* Featured Villa */}
      <section className="featured-villa">
        <img
          src="villaO.jpg"
          alt="Villa Oasis à Marrakech"
          className="villa-image"
        />

        <div className="villa-details">
          <h2 className="villa-title">VILLA OASIS À MARRAKECH</h2>
          <p className="villa-description">
            Plongez dans un havre de paix au cœur de la nature. Villa Oasis vous
            offre une expérience unique alliant luxe et sérénité, conçue pour
            répondre à vos besoins les plus exigeants. Chaque espace a été pensé
            pour créer une ambiance apaisante et luxueuse.
            <br />
            Des terrasses ouvertes baignées de lumière et de verdure, jusqu'aux
            espaces intérieurs raffinés, cette villa incarne l'art de vivre
            marocain moderne. Un lieu où règne une ambiance apaisante et
            luxueuse.
            <br />
            Profitez d’installations haut de gamme, d’un jardin spacieux et
            d’une piscine privée pour des moments inoubliables en famille ou
            entre amis. La Villa Oasis est l’endroit idéal pour se ressourcer et
            savourer le meilleur du confort marocain.
          </p>
          <div className="villa-features">
            <div className="feature-item">
              <Bath className="feature-icon" />
              <span className="feature-number">2</span>
            </div>
            <div className="feature-item">
              <CarFront className="feature-icon" />
              <span className="feature-number">2</span>
            </div>
            <div className="feature-item">
              <Dumbbell className="feature-icon" />
              <span className="feature-number">1</span>
            </div>
            <div className="feature-item">
              <WavesLadder className="feature-icon" />
              <span className="feature-number">2</span>
            </div>
            <div className="feature-item">
              <BedDouble className="feature-icon" />
              <span className="feature-number">7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative  */}
      <div className="decoration-container">
        <img src="./decoration.png" className="decorative-divider" />
      </div>

      {/* Company Section */}
      <section className="company">
        <h2 className="section-title">
          WE ARE A GLOBAL, BOUTIQUE <br />
          REAL ESTATE BROKERAGE
        </h2>

        <div className="company-container">
          <div className="company-content">
            <div className="company-text">
              <h3 className="company-section-title">
                THE TRANSFER OF REAL ESTATE
              </h3>
              <p className="company-description">
                Notre équipe d'experts immobiliers s'engage à vous offrir un
                service personnalisé et professionnel. Nous comprenons que
                l'achat ou la vente d'une propriété est l'une des décisions les
                plus importantes de votre vie. C'est pourquoi nous mettons tout
                en œuvre pour vous accompagner à chaque étape.
                <br />
                Grâce à notre connaissance approfondie du marché et à notre
                réseau étendu, nous vous aidons à réaliser vos transactions en
                toute confiance et transparence. Notre objectif est de vous
                garantir une expérience immobilière fluide et réussie, adaptée à
                vos attentes.
              </p>
            </div>

            <div className="company-buttons">
              <Button label="Read more" dark={true} />
              <Button label="Book Now" />
            </div>
            <div className="stats">
              <Stat number="32+" label="Projets" />
              <Stat number="10+" label="Années" />
              <Stat number="50+" label="Clients" />
            </div>
          </div>
          <img
            src="/appartment/company.jpg"
            alt="Real estate professionals"
            className="company-image"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">CONTACT US</h2>
        <div className="contact-container">
          <img
            src="/appartment/contact_img.jpg"
            alt="Contact villa"
            className="contact-image"
          />
          <div className="contact-form">
            <h3 className="contact-form-title">Book appartement</h3>
            <p className="contact-form-description">
              Un nouveau style d'appartement avec vue sur la mer. Réservez
              maintenant pour découvrir le luxe.
              <br />
              Notre équipe est à votre écoute pour répondre à toutes vos
              questions et vous accompagner dans la réservation de votre futur
              logement. Profitez d’un service rapide et efficace pour
              concrétiser votre projet immobilier.
            </p>
            <form className="form">
              <div className="form-row">
                <Input
                  id="fname"
                  placeholder="first name"
                  label={"First Name"}
                />
                <Input id="lname" placeholder="last name" label={"Last Name"} />
              </div>
              <div className="form-row">
                <Input
                  id="email"
                  placeholder="Email"
                  label={"Email"}
                  type="email"
                />
                <Input id="phone" placeholder="Téléphone" label={"Téléphone"} />
              </div>
              <div className="form-row select-row">
                <label htmlFor={"service"} className="input-label">
                  Services
                </label>
                <select id="service" className="input">
                  <option value="achat">Achat</option>
                  <option value="vente">Vente</option>
                </select>
              </div>
              <button className="btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Decorative  */}
      <div className="decoration-container">
        <img src="./decoration.png" className="decorative-divider" />
      </div>

      {/* Location Section */}
      <section className="location">
        <h2 className="section-title">OUR LOCALISATION</h2>
        <img src="/appartment/map.png" alt="Morocco map" className="map-image" />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="connect-section">
              <div className="footer-brand">
                <img src="/appartment/logo_aprtement.svg" alt="logo_icon" />
                <span className="logo_title" style={{ color: "#fff" }}>
                  IMMOBILIER
                </span>
              </div>
              <div>
                <p className="footer-description">
                  Votre partenaire de confiance pour tous vos projets
                  immobiliers au Maroc. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Soluta error ipsam vero enim, saepe possimus
                  et impedit eius eos quidem, aspernatur odit sequi doloremque
                  sapiente autem. Suscipit odit tempora facilis!
                </p>
                <div className="social-links">
                  <div className="social-link">
                    <Facebook fill="#1e233e" />
                  </div>
                  <div className="social-link">
                    <Twitter fill="#1e233e" />
                  </div>
                  <div className="social-link">
                    <Linkedin fill="#1e233e" />
                  </div>
                  <div className="social-link">
                    <Instagram fill="#1e233e" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="footer-section-title">SERVICES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Vente de propriétés</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Gestion immobilière</a>
                </li>
                <li>
                  <a href="#">Conseil en investissement</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">LIENS UTILES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">À propos</a>
                </li>
                <li>
                  <a href="#">Nos projets</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Carrières</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">CONTACT INFO</h4>
              <ul className="footer-links">
                <li>+212 XXX XXX XXX</li>
                <li>contact@example.com</li>
                <li>Casablanca, Maroc</li>
              </ul>
              <div className="newsletter">
                <input placeholder="Votre email" className="input" />
                <button className="btn-primary">S'abonner</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy;2024 ARR, All right reserved.
            </p>
            <div className="footer-element">
              <p className="footer-copyright">Privacy Policy</p>
              <p className="footer-copyright">Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
