import React, { useState } from "react";
import "../css/FAQ.css";
import consumerVideo from "../../images/Video/PM Surya Ghar_ Muft Bijli Yojana- Consumer- How to submit application.mp4"


const content = {
  hi: [
    {
      q: "प्रश्न 1: क्या मैं पीएम सूर्य घर योजना में आवेदन कर सकता हूँ?",
      a: (
        <>
          <strong>उत्तर:</strong> हाँ, आप <strong>प्रधानमंत्री सूर्य घर फ्री बिजली योजना (PM Surya Ghar: Muft Bijli Yojana)</strong> के अंतर्गत आवेदन कर सकते हैं, यदि आप निम्नलिखित मानदंडों को पूरा करते हैं:
          <ul>
            <li>आप एक भारतीय नागरिक हों।</li>
            <li>आपके पास खुद का मकान हो जिसमें सोलर पैनल इंस्टॉल किया जा सके।</li>
            <li>घर की छत सौर ऊर्जा सिस्टम लगाने योग्य हो।</li>
            <li>आपके पास घरेलू बिजली कनेक्शन हो।</li>
          </ul>
          <p>
            <strong>योजना का उद्देश्य:</strong><br />
            इस योजना का मुख्य उद्देश्य घर-घर सौर ऊर्जा को प्रोत्साहित करना, बिजली खर्च में बचत करना, और स्वच्छ ऊर्जा उत्पादन को बढ़ावा देना है। सरकार इस योजना के अंतर्गत सोलर पैनल इंस्टॉलेशन पर वित्तीय सहायता (सब्सिडी) प्रदान करती है।
          </p>
          <p>
            <strong>आवेदन प्रक्रिया:</strong><br />
            <ol>
              <li>योजना की आधिकारिक वेबसाइट <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer">https://pmsuryaghar.gov.in</a> पर जाएँ।</li>
              <li>“Apply for Rooftop Solar” विकल्प पर क्लिक करें।</li>
              <li>आवश्यक विवरण भरें और आवश्यक दस्तावेज़ अपलोड करें।</li>
              <li>DISCOM (बिजली वितरण कंपनी) द्वारा आवेदन की सत्यता की जाँच की जाएगी।</li>
              <li>अनुमोदन के बाद इंस्टॉलेशन कराया जा सकता है और सब्सिडी सीधे खाते में भेजी जाती है।</li>
            </ol>
          </p>
          <p><strong>नोट:</strong> आवेदन से पूर्व संबंधित राज्य की DISCOM वेबसाइट पर योजना की स्थानीय शर्तें अवश्य पढ़ें।</p>
        </>
      ),
    },
    {
      q: "प्रश्न 2: सरकार से कितनी सब्सिडी मिलती है?",
      a: (
        <>
          <p>
            प्रधानमंत्री सूर्य घर योजना के अंतर्गत, सरकार द्वारा घरेलू उपभोक्ताओं को सोलर रूफटॉप इंस्टॉलेशन के लिए आर्थिक सहायता (सब्सिडी) प्रदान की जाती है। सब्सिडी की राशि इंस्टॉल की गई क्षमता (kW) के अनुसार निर्धारित की जाती है:
          </p>
          <ul>
            <li><strong>1 किलोवाट (kW) तक:</strong> ₹30,000 तक की सब्सिडी मिलती है।</li>
            <li><strong>2 किलोवाट (kW) तक:</strong> ₹60,000 तक की सब्सिडी मिलती है।</li>
            <li><strong>3 किलोवाट (kW) या उससे अधिक:</strong> अधिकतम ₹78,000 तक की सब्सिडी मिल सकती है।</li>
          </ul>
          <p>
            यह सब्सिडी सीधे उपभोक्ता के बैंक खाते में भेजी जाती है, और इसका लाभ केवल पात्र घरेलू उपभोक्ताओं को मिलता है। योजना का उद्देश्य हर घर को सौर ऊर्जा से सशक्त बनाना और बिजली खर्च को कम करना है।
          </p>
        </>
      ),
    },
    {
      q: "प्रश्न 3: सोलर पैनल की लाइफ कितनी होती है?",
      a: (
        <>
          <p>
            आमतौर पर सोलर पैनलों की औसत आयु <strong>25 से 30 वर्ष</strong> होती है। हालांकि, उनकी कार्यक्षमता समय के साथ धीरे-धीरे घटती है। प्रमुख बिंदु निम्नलिखित हैं:
          </p>
          <ul>
            <li>पहले 10-12 वर्षों तक पैनल लगभग <strong>90% क्षमता</strong> पर कार्य करते हैं।</li>
            <li>25 वर्षों के बाद भी पैनल <strong>80% या उससे अधिक क्षमता</strong> से बिजली उत्पन्न कर सकते हैं।</li>
            <li>पैनलों की लाइफ अवधि कंपनी द्वारा दी गई <strong>वारंटी</strong> पर भी निर्भर करती है, जो अक्सर 25 साल तक होती है।</li>
            <li>अच्छी गुणवत्ता की देखभाल और नियमित सफाई से पैनलों की कार्यक्षमता और आयु दोनों को बढ़ाया जा सकता है।</li>
          </ul>
          <p>इसलिए, सोलर पैनल एक दीर्घकालिक निवेश होते हैं जो वर्षों तक विश्वसनीय रूप से बिजली उत्पन्न करते हैं।</p>
        </>
      ),
    },
    {
      q: "प्रश्न 4: इंस्टॉलेशन में कितना खर्च आता है?",
      a: (
        <>
          <p>
            सोलर पैनल इंस्टॉलेशन की लागत मुख्यतः आपके द्वारा चुने गए सिस्टम की क्षमता (kW) पर निर्भर करती है। भारत सरकार की पीएम सूर्य घर योजना के अंतर्गत <strong>घरेलू उपयोगकर्ताओं को सब्सिडी</strong> प्रदान की जाती है, जिससे कुल लागत में काफी कमी आती है।
          </p>
          <p>औसत अनुमानित लागत विवरण इस प्रकार है:</p>
          <ul>
            <li><strong>1 kW सिस्टम:</strong> ₹60,000 – ₹70,000 (सरकारी सब्सिडी के बाद ₹25,000 – ₹30,000)</li>
            <li><strong>2 kW सिस्टम:</strong> ₹1,20,000 – ₹1,30,000 (सब्सिडी के बाद ₹50,000 – ₹55,000)</li>
            <li><strong>3 kW या उससे अधिक:</strong> ₹1,80,000+ (सब्सिडी के बाद ₹75,000 – ₹90,000 तक)</li>
          </ul>
          <p>
            <strong>नोट:</strong> ये कीमतें अनुमानित हैं और इंस्टॉलेशन स्थान, डिस्कॉम नियमों और ब्रांड पर निर्भर करती हैं। सटीक मूल्य जानने के लिए स्थानीय सेवा प्रदाता या DISCOM से संपर्क करें।
          </p>
        </>
      ),
    },
    {
      q: "प्रश्न 5: क्या EMI विकल्प उपलब्ध है?",
      a: (
        <>
          <p>
            हाँ, कई सौर ऊर्जा सेवा प्रदाता (Solar Service Providers) और बैंक, पीएम सूर्य घर योजना के तहत <strong>EMI (किस्त भुगतान)</strong> विकल्प उपलब्ध कराते हैं। यदि उपयोगकर्ता एकमुश्त भुगतान नहीं कर सकते, तो वे इन संस्थाओं से <strong>कम ब्याज दरों</strong> पर वित्तीय सहायता प्राप्त कर सकते हैं।
          </p>
          <p>
            <strong>मुख्य विशेषताएँ:</strong><br />
            - आसान मासिक किस्तों में भुगतान की सुविधा<br />
            - ऋण राशि पर सब्सिडी योजना का भी लाभ<br />
            - ऋण अवधि आमतौर पर 3 से 5 वर्ष<br />
            - अधिकृत बैंकों/एनबीएफसी के माध्यम से आवेदन संभव<br />
          </p>
          <p>
            <strong>कैसे प्राप्त करें:</strong><br />
            1. DISCOM पोर्टल पर सोलर आवेदन सबमिट करने के बाद, किसी पंजीकृत वेंडर से संपर्क करें।<br />
            2. वे संबंधित बैंक या फाइनेंसिंग पार्टनर से EMI सुविधा के लिए मार्गदर्शन करेंगे।<br />
            3. पात्रता, दस्तावेज़ और क्रेडिट स्कोर के आधार पर ऋण स्वीकृत किया जाता है।<br />
          </p>
          <p>
            <strong>ध्यान दें:</strong> EMI विकल्प योजना के अंतर्गत प्रत्यक्ष रूप से सरकार द्वारा नहीं, बल्कि पार्टनर बैंकों और निजी कंपनियों द्वारा प्रदान किए जाते हैं।
          </p>
        </>
      ),
    },
    {
      q: "प्रश्न 6: उपभोक्ता लॉगिन कैसे करें?",
      a: (
        <div style={{ textAlign: "center" }}>
          <video
            src={consumerVideo}
            controls
            style={{ maxWidth: "100%", width: "790px", borderRadius: "12px",  }}
          >
            आपका ब्राउज़र वीडियो टैग को सपोर्ट नहीं करता।
          </video>
          <div style={{ marginTop: 10, color: "#853535" }}>
            उपभोक्ता लॉगिन प्रक्रिया देखने के लिए ऊपर वीडियो देखें।
          </div>
        </div>
      ),
    },

  ],
  en: [
    {
      q: "Q1: Can I apply for the PM Surya Ghar Scheme?",
      a: (
        <>
          <strong>Answer:</strong> Yes, you can apply under the <strong>PM Surya Ghar: Muft Bijli Yojana</strong> if you meet the following criteria:
          <ul>
            <li>You are an Indian citizen.</li>
            <li>You own a house where solar panels can be installed.</li>
            <li>Your roof is suitable for solar installation.</li>
            <li>You have a domestic electricity connection.</li>
          </ul>
          <p>
            <strong>Scheme Objective:</strong><br />
            The main aim is to promote solar energy in every home, save on electricity bills, and encourage clean energy production. The government provides financial assistance (subsidy) for solar panel installation under this scheme.
          </p>
          <p>
            <strong>Application Process:</strong><br />
            <ol>
              <li>Visit the official website <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer">https://pmsuryaghar.gov.in</a>.</li>
              <li>Click on “Apply for Rooftop Solar”.</li>
              <li>Fill in the required details and upload necessary documents.</li>
              <li>Application will be verified by DISCOM (electricity distribution company).</li>
              <li>After approval, installation can be done and subsidy is sent directly to your account.</li>
            </ol>
          </p>
          <p><strong>Note:</strong> Please read the local terms on your state’s DISCOM website before applying.</p>
        </>
      ),
    },
    {
      q: "Q2: How much subsidy is provided by the government?",
      a: (
        <>
          <p>
            Under the PM Surya Ghar scheme, the government provides financial assistance (subsidy) to domestic consumers for solar rooftop installation. The amount depends on the installed capacity (kW):
          </p>
          <ul>
            <li><strong>Up to 1 kW:</strong> Subsidy up to ₹30,000</li>
            <li><strong>Up to 2 kW:</strong> Subsidy up to ₹60,000</li>
            <li><strong>3 kW or more:</strong> Subsidy up to ₹78,000</li>
          </ul>
          <p>
            The subsidy is sent directly to the consumer’s bank account and is available only to eligible domestic consumers. The aim is to empower every home with solar energy and reduce electricity costs.
          </p>
        </>
      ),
    },
    {
      q: "Q3: What is the lifespan of solar panels?",
      a: (
        <>
          <p>
            Typically, solar panels have an average lifespan of <strong>25 to 30 years</strong>. However, their efficiency gradually decreases over time. Key points:
          </p>
          <ul>
            <li>For the first 10-12 years, panels operate at about <strong>90% efficiency</strong>.</li>
            <li>After 25 years, panels can still generate electricity at <strong>80% or more efficiency</strong>.</li>
            <li>Lifespan also depends on the warranty provided by the company, often up to 25 years.</li>
            <li>Good maintenance and regular cleaning can further enhance panel efficiency and lifespan.</li>
          </ul>
          <p>Thus, solar panels are a long-term investment that reliably generate electricity for years.</p>
        </>
      ),
    },
    {
      q: "Q4: What is the cost of installation?",
      a: (
        <>
          <p>
            The cost of solar panel installation mainly depends on the capacity (kW) you choose. Under the PM Surya Ghar scheme, <strong>domestic users get a subsidy</strong> which significantly reduces the total cost.
          </p>
          <p>Average estimated costs:</p>
          <ul>
            <li><strong>1 kW system:</strong> ₹60,000 – ₹70,000 (after subsidy: ₹25,000 – ₹30,000)</li>
            <li><strong>2 kW system:</strong> ₹1,20,000 – ₹1,30,000 (after subsidy: ₹50,000 – ₹55,000)</li>
            <li><strong>3 kW or more:</strong> ₹1,80,000+ (after subsidy: ₹75,000 – ₹90,000)</li>
          </ul>
          <p>
            <strong>Note:</strong> These prices are approximate and depend on location, DISCOM rules, and brand. For exact prices, contact your local provider or DISCOM.
          </p>
        </>
      ),
    },
    {
      q: "Q5: Is EMI option available?",
      a: (
        <>
          <p>
            Yes, many solar service providers and banks offer <strong>EMI (installment)</strong> options under the PM Surya Ghar scheme. If you cannot pay in one go, you can get financial assistance at <strong>low interest rates</strong> from these institutions.
          </p>
          <p>
            <strong>Main Features:</strong><br />
            - Easy monthly installment facility<br />
            - Subsidy benefit on loan amount<br />
            - Loan tenure usually 3 to 5 years<br />
            - Application possible through authorized banks/NBFCs<br />
          </p>
          <p>
            <strong>How to get:</strong><br />
            1. After submitting a solar application on the DISCOM portal, contact a registered vendor.<br />
            2. They will guide you for EMI facility with the relevant bank or financing partner.<br />
            3. Loan is approved based on eligibility, documents, and credit score.<br />
          </p>
          <p>
            <strong>Note:</strong> EMI options are not provided directly by the government, but by partner banks and private companies.
          </p>
        </>
      ),
    },
    {
      q: "Q6: How to login as a consumer?",
      a: (
        <div style={{ textAlign: "center" }}>
          <video
            src={consumerVideo}
            controls
            style={{ maxWidth: "100%", width: "480px", borderRadius: "12px", margin: "20px auto" }}
          >
            Your browser does not support the video tag.
          </video>
          <div style={{ marginTop: 10, color: "#853535" }}>
            Watch the video above for the consumer login process.
          </div>
        </div>
      ),
    },
  ],
};

const FAQ = ({ language = "hi" }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = content[language];

  const toggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="FAQ" id="index">
      <h1>{language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}</h1>
      {faqs.map((item, idx) => (
        <div className="q" key={idx}>
          <div
            className="faq-question-row"
            onClick={() => toggle(idx)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              background: "#f7f7f7",
              borderRadius: "18px",
              padding: "12px 18px",
              marginBottom: "6px",
              boxShadow: openIndexes.includes(idx)
                ? "0 2px 8px rgba(25,118,210,0.08)"
                : "none",
              fontWeight: 600,
              fontSize: "1.08rem",
            }}
          >
            <span><h3>{item.q}</h3></span>
            <span
              className={`faq-toggle-icon${openIndexes.includes(idx) ? " open" : ""}`}
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
              className="faq-answer"
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
              <h3>{item.a}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;