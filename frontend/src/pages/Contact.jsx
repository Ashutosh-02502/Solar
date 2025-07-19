import React from "react";
import "../css/Contact.css";

const content = {
  hi: {
    title: "संपर्क करें",
    phoneLabel: "फोन",
    phones: "7007111763, 9839605023",
    locationLabel: "स्थान",
    location: "यादव मोड़, जंगीपुर, गाज़ीपुर",
    timeLabel: "समय",
    time: "सोमवार - शनिवार | सुबह 9:00 से शाम 6:00",
  },
  en: {
    title: "Contact",
    phoneLabel: "Phone",
    phones: "7007111763, 9839605023",
    locationLabel: "Location",
    location: "Yadav Modh, Jangipur, Ghazipur",
    timeLabel: "Hours",
    time: "Monday - Saturday | 9:00am to 6:00pm",
  },
};

const Contact = ({ language = "hi" }) => {
  const t = content[language];
  return (
    <div className="contact" id="index">
      <h1>{t.title}</h1>
      <h3>
        <strong>{t.phoneLabel}:</strong> {t.phones}
      </h3>
      <h3>
        <strong>{t.locationLabel}:</strong> {t.location}
      </h3>
      <h3>
        <strong>{t.timeLabel}:</strong> {t.time}
      </h3>
    </div>
  );
};

export default Contact;