import React, {useState} from "react";
import "../css/Service.css";

const content = {
  hi: {
    title: "हमारी सेवाएँ",
    scheme: "पीएम सूर्य घर मुफ्त बिजली योजना",
    plans: [
      {
        title: "1 किलोवाट लोड के उपभोक्ताओं हेतु",
        details: [
          "1 किलोवाट सोलर पर 70% सब्सिडी",
          "सरकार ₹30000/- सब्सिडी देती है और ₹15000/- उपभोक्ता भुगतान करता है",
          "बिजली बिल शून्य किया जाएगा",
          "₹350/- प्रति माह EMI पर सोलर लोन",
          "4 पंखे, 4 बल्ब, टीवी और 25W फ्रिज चल सकते हैं",
          "सोलर प्लांट हेतु 100 Sqft जगह आवश्यक",
        ],
      },
      {
        title: "2 किलोवाट लोड के उपभोक्ताओं हेतु",
        details: [
          "2 किलोवाट सोलर पर 70% सब्सिडी",
          "सरकार ₹60000/- सब्सिडी देती है और ₹30000/- उपभोक्ता भुगतान करता है",
          "बिजली बिल शून्य किया जाएगा",
          "₹700/- प्रति माह EMI पर सोलर लोन",
          "6 पंखे, 6 बल्ब, टीवी, 200L फ्रिज, वाशिंग मशीन",
          "सोलर प्लांट हेतु 200 Sqft जगह आवश्यक",
        ],
      },
      {
        title: "3 किलोवाट लोड के उपभोक्ताओं हेतु",
        details: [
          "3 किलोवाट सोलर पर 60% सब्सिडी",
          "सरकार ₹78000/- सब्सिडी देती है और ₹30000/- उपभोक्ता भुगतान करता है",
          "बिजली बिल शून्य किया जाएगा",
          "₹1800/- प्रति माह EMI पर सोलर लोन",
          "8 पंखे, 8 बल्ब, टीवी, 240L फ्रिज, वाशिंग मशीन, 1.5 टन AC",
          "सोलर प्लांट हेतु 300 Sqft जगह आवश्यक",
        ],
      },
      {
        title: "4 किलोवाट लोड के उपभोक्ताओं हेतु",
        details: [
          "4 किलोवाट सोलर पर 45% सब्सिडी",
          "सरकार ₹78000/- सब्सिडी देती है और ₹30000/- उपभोक्ता भुगतान करता है",
          "बिजली बिल शून्य किया जाएगा",
          "₹3300/- प्रति माह EMI पर सोलर लोन",
          "8 पंखे, 8 बल्ब, टीवी, 300L फ्रिज, वाशिंग मशीन, 1.5 टन AC, पानी की मोटर",
          "सोलर प्लांट हेतु 400 Sqft जगह आवश्यक",
        ],
      },
      {
        title: "5 किलोवाट लोड के उपभोक्ताओं हेतु",
        details: [
          "5 किलोवाट सोलर पर 40% सब्सिडी",
          "सरकार ₹78000/- सब्सिडी देती है और ₹30000/- उपभोक्ता भुगतान करता है",
          "बिजली बिल शून्य किया जाएगा",
          "₹5700/- प्रति माह EMI पर सोलर लोन",
          "8 पंखे, 10 बल्ब, 2 टीवी, 300L फ्रिज, वाशिंग मशीन, 1.5 टन AC, पानी की मोटर",
          "सोलर प्लांट हेतु 500 Sqft जगह आवश्यक",
        ],
      },
    ],
  },
  en: {
    title: "Our Services",
    scheme: "PM Surya Ghar Free Electricity Scheme",
    plans: [
      {
        title: "For 1 kW Load Consumers",
        details: [
          "70% subsidy on 1 kW solar",
          "Govt gives ₹30,000/- subsidy, consumer pays ₹15,000/-",
          "Electricity bill will be zero",
          "Solar loan at ₹350/- per month EMI",
          "Can run 4 fans, 4 bulbs, TV, and 25W fridge",
          "100 Sqft space required for solar plant",
        ],
      },
      {
        title: "For 2 kW Load Consumers",
        details: [
          "70% subsidy on 2 kW solar",
          "Govt gives ₹60,000/- subsidy, consumer pays ₹30,000/-",
          "Electricity bill will be zero",
          "Solar loan at ₹700/- per month EMI",
          "Can run 6 fans, 6 bulbs, TV, 200L fridge, washing machine",
          "200 Sqft space required for solar plant",
        ],
      },
      {
        title: "For 3 kW Load Consumers",
        details: [
          "60% subsidy on 3 kW solar",
          "Govt gives ₹78,000/- subsidy, consumer pays ₹30,000/-",
          "Electricity bill will be zero",
          "Solar loan at ₹1800/- per month EMI",
          "Can run 8 fans, 8 bulbs, TV, 240L fridge, washing machine, 1.5 ton AC",
          "300 Sqft space required for solar plant",
        ],
      },
      {
        title: "For 4 kW Load Consumers",
        details: [
          "45% subsidy on 4 kW solar",
          "Govt gives ₹78,000/- subsidy, consumer pays ₹30,000/-",
          "Electricity bill will be zero",
          "Solar loan at ₹3300/- per month EMI",
          "Can run 8 fans, 8 bulbs, TV, 300L fridge, washing machine, 1.5 ton AC, water pump",
          "400 Sqft space required for solar plant",
        ],
      },
      {
        title: "For 5 kW Load Consumers",
        details: [
          "40% subsidy on 5 kW solar",
          "Govt gives ₹78,000/- subsidy, consumer pays ₹30,000/-",
          "Electricity bill will be zero",
          "Solar loan at ₹5700/- per month EMI",
          "Can run 8 fans, 10 bulbs, 2 TVs, 300L fridge, washing machine, 1.5 ton AC, water pump",
          "500 Sqft space required for solar plant",
        ],
      },
    ],
  },
};

const Services = ({ language = "hi" }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const t = content[language];

  const toggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="service-faq" id="service-faq">
      <h1>{t.title}<br></br>
      {t.scheme}</h1>
      {t.plans.map((plan, idx) => (
        <div className="service-q" key={idx}>
          <div
            className="service-question-row"
            onClick={() => toggle(idx)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: "#f7f7f7",
              borderRadius: "18px",
              padding: "30px 35px",
              marginBottom: "16px",
              boxShadow: openIndexes.includes(idx)
                ? "0 2px 8px rgba(25,118,210,0.08)"
                : "none",
              fontWeight: 600,
              fontSize: "1.12rem",
            }}
          >
            <span><h3 style={{margin:0}}>{plan.title}</h3></span>
            <span
              className={`service-toggle-icon${openIndexes.includes(idx) ? " open" : ""}`}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: openIndexes.includes(idx) ? "#fff" : "#712a2aff",
                marginLeft: "18px",
                userSelect: "none",
                transition: "color 0.2s, background 0.2s, transform 0.2s",
              }}
            >
              +
            </span>
          </div>
          {openIndexes.includes(idx) && (
            <div
              className="service-answer"
              style={{
                background: "#fff",
                borderRadius: "0 0 8px 8px",
                padding: "18px 24px 12px 24px",
                marginBottom: "18px",
                boxShadow: "0 2px 8px rgba(25,118,210,0.06)",
                fontWeight: 400,
                fontSize: "1.03rem",
                color: "#222",
              }}
            >
              <ul style={{margin:0, paddingLeft: "1.2em"}}>
                {plan.details.map((d, i) => (
                  <li key={i} style={{marginBottom:"8px"}}><h3>{d}</h3></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;