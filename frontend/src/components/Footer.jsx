import React from "react";
import "../css/Footer.css";
import logo from "../../images/sarthak/logo.jpg";

const content = {
  hi: {
    brand: <>Sarthak <span className="orange-text">Solar</span></>,
    tagline: "साफ ऊर्जा, एक उज्जवल भविष्य",
    quickLinks: "झटपट लिंक",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    benefits: "सोलर के लाभ",
    faq: "सामान्य प्रश्न",
    gallery: "परियोजनाएँ",
    contact: "संपर्क करें",
    ourServices: "हमारी सेवाएँ",
    serviceList: [
      "ग़ाज़ीपुर",
      "वाराणसी",
      "मऊ",
      "आज़मगढ़",
      "बलिया",
      "लखनऊ",
      "इलाहाबाद",
    ],
    office: "कार्यालय पता",
    mainOffice: "मुख्य कार्यालय:",
    address: (
      <>
        यादव मोड़, जंगीपुर, गाज़ीपुर<br />
        उत्तर प्रदेश - 233005
      </>
    ),
    contactUs: "संपर्क करें :-",
    phone: (
      <>
        📞 +91 70071 11763<br />
        📞 +91 98396 05023
      </>
    ),
    email: "sarthaksolar@gmail.com",
    hours: "🕘 09:00am – 6:00pm",
    days: "सोमवार से शनिवार",
    copyright:
      "Copyright © 2025 Sarthak Electrical & Solar Solutions. All rights reserved.",
  },
  en: {
    brand: <>Sarthak <span className="orange-text">Solar</span></>,
    tagline: "Clean energy, a brighter future",
    quickLinks: "Quick Links",
    about: "About Us",
    services: "Services",
    benefits: "Solar Benefits",
    faq: "FAQ",
    gallery: "Gallery",
    contact: "Contact",
    ourServices: "Our Services At",
    serviceList: [
      "GHAZIPUR",
      "VARANASI",
      "MAU",
      "AZAMGARH",
      "BALLIA",
      "LUCKNOW",
      "ALLAHABAD",
    ],
    office: "Office Address",
    mainOffice: "Main Office:",
    address: (
      <>
        Yadav Modh, Jangipur, Ghazipur<br />
        Uttar Pradesh - 233005
      </>
    ),
    contactUs: "Contact :-",
    phone: (
      <>
        📞 +91 70071 11763<br />
        📞 +91 98396 05023
      </>
    ),
    email: "sarthaksolar@gmail.com",
    hours: "🕘 09:00am – 6:00pm",
    days: "Monday to Saturday",
    copyright:
      "Copyright © 2025 Sarthak Electrical & Solar Solutions. All rights reserved.",
  },
};

const Footer = ({ language = "hi" }) => {
  const t = content[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Social */}
        <div className="footer-section logo-social">
          <h1 className="logo">{t.brand}</h1>
          <img
            src={logo}
            alt="Sarthak Solar"
            style={{
              width: "50%",
              borderRadius: "8px",
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p className="tagline">
            <h3>{t.tagline}</h3>
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/solarwithkamlesh?mibextid=ZbWKwL "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                width="24"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                width="24"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                width="24"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h1>{t.quickLinks}</h1>
          <ul>
            <li>
              <a href="/about">
                <h3>{t.about}</h3>
              </a>
            </li>
            <li>
              <a href="/services">
                <h3>{t.services}</h3>
              </a>
            </li>
            <li>
              <a href="/benefits">
                <h3>{t.benefits}</h3>
              </a>
            </li>
            <li>
              <a href="/faq">
                <h3>{t.faq}</h3>
              </a>
            </li>
            <li>
              <a href="/gallery">
                <h3>{t.gallery}</h3>
              </a>
            </li>
            <li>
              <a href="/contact">
                <h3>{t.contact}</h3>
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h1>{t.ourServices}</h1>
          <ul>
            {t.serviceList.map((service, idx) => (
              <li key={idx}>
                <h3>{service}</h3>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="footer-section">
          <h1>{t.office}</h1>
          <p>
            <strong>
              <h3>{t.mainOffice}</h3>
            </strong>
            <h3>{t.address}</h3>
          </p>
          <h3>{t.contactUs}</h3>
          <p>
            <h4>
              {t.phone}
              <br />
              📧 {t.email}
              <br />
              {t.hours}
            </h4>
            <h4>{t.days}</h4>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;