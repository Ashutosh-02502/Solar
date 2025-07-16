import React, { useState } from "react";
import Image1 from "../../images/work&installations/1.jpg";
import Image2 from "../../images/work&installations/2.jpg";
import Image3 from "../../images/work&installations/3.jpg";
import Image4 from "../../images/work&installations/4.jpg";
import Image5 from "../../images/work&installations/5.jpg";
import Image6 from "../../images/work&installations/6.jpg";
import Image7 from "../../images/work&installations/7.jpg";
import Image8 from "../../images/work&installations/8.jpg";
import Image9 from "../../images/work&installations/9.jpg";
// import Image10 from "../../images/work&installations/10.jpg";
import "../css/Gallery.css";

const images = [
  Image1, Image2, Image3, Image4, Image5,
  Image7, Image9, Image6, Image8,
];

const content = {
  hi: {
    title: "हमारे कुछ कार्य",
    subtitle: "हमने अनेक घरों, दुकानों और संस्थानों में सफलतापूर्वक सोलर इंस्टॉलेशन किए हैं। नीचे कुछ उदाहरण देखें:",
    alt: (idx) => `गैलरी ${idx + 1}`,
  },
  en: {
    title: "Our Work",
    subtitle: "We have successfully installed solar systems in many homes, shops, and institutions. See some examples below:",
    alt: (idx) => `Gallery ${idx + 1}`,
  },
};

const Gallery = ({ language = "hi" }) => {
  const [current, setCurrent] = useState(0);
  const t = content[language];

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="gallery">
      <h1>{t.title}</h1>
      <h3>{t.subtitle}</h3>
      <div className="carousel">
        <button onClick={prevImage} className="carousel-btn" aria-label="Previous">&#x276E;</button>
        <img
          src={images[current]}
          alt={t.alt(current)}
          className="carousel-img"
        />
        <button onClick={nextImage} className="carousel-btn" aria-label="Next">&#x276F;</button>
      </div>
      <div className="carousel-counter">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default Gallery;