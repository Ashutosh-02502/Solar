import React from "react";
import "../css/Benefits.css";

const content = {
  hi: {
    title: "सोलर एनर्जी के लाभ",
    points: [
      "300 यूनिट तक मुफ्त बिजली योजना (पीएम सूर्य घर योजना)",
      "70% तक सरकारी सब्सिडी",
      "बिजली बिलों में भारी बचत",
      "25 वर्षों तक टिकाऊ और भरोसेमंद",
      "7% की न्यूनतम बैंक ब्याज दर पर इंस्टॉलेशन",
      "पर्यावरण के लिए लाभकारी",
    ],
  },
  en: {
    title: "Benefits of Solar Energy",
    points: [
      "Up to 300 units free electricity (PM Surya Ghar Yojana)",
      "Up to 70% government subsidy",
      "Huge savings on electricity bills",
      "Durable and reliable for 25 years",
      "Installation at minimum 7% bank interest rate",
      "Environmentally friendly",
    ],
  },
};

const Benefits = ({ language = "hi" }) => {
  const t = content[language];

  return (
    <div className="benefits" id="index">
      <h1>{t.title}</h1>
      <ul>
        {t.points.map((point, idx) => (
          <li key={idx}>
            <h3>{point}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;