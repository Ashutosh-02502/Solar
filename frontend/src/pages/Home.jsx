import React from "react";
import shopImage from "../../images/sarthak/INA.jpg";
import "../css/Home.css";

const content = {
  hi: {
    title: "सार्थक इलेक्ट्रिकल & सोलर सॉल्यूशन",
    alt: "सार्थक सोलर शॉप",
    line1: "आपके घर और व्यवसाय के लिए भरोसेमंद सोलर समाधान।",
    line2: "सरकारी सब्सिडी योजना के अंतर्गत सोलर पैनल इंस्टॉलेशन में हमारी मदद लें।",
    address: <><strong>स्थान:</strong> जंगीपुर, गाज़ीपुर | 📞 7007111763, 9839605023</>,
  },
  en: {
    title: "Sarthak Electrical & Solar Solution",
    alt: "Sarthak Solar Shop",
    line1: "Trusted solar solutions for your home and business.",
    line2: "Get our help for solar panel installation under government subsidy scheme.",
    address: <><strong>Location:</strong> Jangipur, Ghazipur | 📞 7007111763, 9839605023</>,
  },
};

const Home = ({ language = "hi" }) => {
  const t = content[language];
  return (
    <>
      <div className="home-container" id="index">
        <h1>{t.title}</h1>
        <img
          src={shopImage}
          alt={t.alt}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
        />
        <p><h3>{t.line1}</h3></p>
        <p><h3>{t.line2}</h3></p>
        <p><h3>{t.address}</h3></p>
      </div>
    </>
  );
};

export default Home;