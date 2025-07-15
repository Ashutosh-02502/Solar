import React from "react";
import "../css/About.css";

const content = {
  hi: {
    title: "हमारे बारे में",
    lines: [
      "विश्वसनीय साझेदारी: हम INA SOLAR के प्रमाणित साझेदार हैं, जो आपको उच्च गुणवत्ता और सरकार द्वारा अनुमोदित सोलर उत्पाद प्रदान करते हैं।",
      "पीएम सूर्य घर योजना कार्यान्वयन: हम घरों को प्रधानमंत्री रूफटॉप सोलर योजना का लाभ उठाने में मदद करते हैं, आवेदन से लेकर इंस्टॉलेशन तक मार्गदर्शन प्रदान करते हैं।",
      "सरकारी सब्सिडी सहायता: हमारी टीम पीएम सूर्य घर योजना के तहत सब्सिडी प्राप्त करने की प्रक्रिया को सरल बनाती है, जिससे सोलर सभी के लिए किफायती बनता है।",
      "स्मार्ट बचत: हमारी प्रणाली को आपके मासिक बिजली बिल को 80% तक कम करने के लिए डिज़ाइन किया गया है, जिससे आपको लंबे समय तक आर्थिक लाभ मिलता है।",
      "पर्यावरण-संवेदनशील दृष्टिकोण: हम नवीकरणीय ऊर्जा को अपनाने को सक्रिय रूप से बढ़ावा देते हैं ताकि कार्बन उत्सर्जन को कम किया जा सके और पर्यावरण की रक्षा की जा सके।",
      "अनुकूलित सोलर योजना: हम आपकी संपत्ति और ऊर्जा आवश्यकताओं का मूल्यांकन करते हैं ताकि कुशल और किफायती सोलर समाधान प्रदान किए जा सकें।",
      "समग्र सेवाएँ: परामर्श, दस्तावेज़ीकरण, सब्सिडी प्रक्रिया से लेकर इंस्टॉलेशन और सपोर्ट तक – हम सब कुछ एक ही जगह प्रदान करते हैं।",
      "प्रौद्योगिकी-आधारित उत्पाद: हम अत्याधुनिक सोलर पैनल, इन्वर्टर और बैटरियाँ प्रदान करते हैं जो टिकाऊ और उच्च प्रदर्शन के लिए डिज़ाइन की गई हैं।",
      "सहायता और रखरखाव: हमारी इंस्टॉलेशन के बाद की सेवा यह सुनिश्चित करती है कि आपका सिस्टम न्यूनतम रखरखाव के साथ अधिकतम उत्पादन दे।",
      "** हम गाज़ीपुर और लखनऊ में सोलर ऊर्जा इंजीनियरिंग पेशेवर हैं और शहरी/ग्रामीण क्षेत्रों में छत पर सोलर पैनल लगाकर तथा मौजूदा इन्वर्टर/UPS को सोलर से जोड़कर पूर्ण सोलर समाधान प्रदान करते हैं। **"
    ],
  },
  en: {
    title: "About Us",
    lines: [
      "Trusted Partnership: We are certified partners of INA SOLAR, ensuring you receive top-quality and government-compliant solar products..",
      "PM Surya Ghar Yojana Implementation: We help households take advantage of the Prime Minister’s Rooftop Solar Scheme, providing guidance from application to installation.",
      "Government Subsidy Assistance: Our team simplifies the process to avail subsidies under PM Surya Ghar Yojana, making solar affordable for everyone.",
      "Smart Savings: Our systems are engineered to reduce up to 80% of your monthly electricity bills, offering long-term economic benefits.",
      "Eco-Conscious Approach: We actively promote renewable energy adoption to reduce carbon footprints and protect the environment.",
      "Custom Solar Planning: We assess your property and energy needs to deliver tailor-made solar solutions—efficient and cost-effective.",
      "End-to-End Services: From consultation, documentation, subsidy processing to installation and support, we handle everything under one roof.",
      "Technology-Driven Products: We offer cutting-edge solar panels, inverters, and batteries that are built for durability and high performance.",
      "Support & Maintenance: Our post-installation support ensures your system runs smoothly with minimal maintenance and maximum output.",
      "** We are solar energy engineering professional at Ghazipur & Lucknow And we provide a complete solar solution in Urban/ Rural areas by installing solar panel at rooftop and solarize existing inverter/Ups. **",
    ],
  },
};

const About = ({ language = "hi" }) => {
  const t = content[language];

  return (
    <div className="about" id="index">
      <h1>{t.title}</h1>
      {t.lines.map((line, idx) => (
        <p key={idx}>
          <span className="about-line"><h3>{line}</h3></span>
        </p>
      ))}
    </div>
  );
};

export default About;