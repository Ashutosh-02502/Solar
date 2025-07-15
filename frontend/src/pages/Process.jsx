import React from "react";
import "../css/Process.css";

const content = {
  hi: {
    title: "हमारी कार्यप्रणाली",
    steps: [
      "प्रारंभिक संपर्क:- हमारे साथ फोन, वेबसाइट या गाज़ीपुर/लखनऊ कार्यालय में व्यक्तिगत परामर्श के लिए संपर्क करें।",
      "साइट मूल्यांकन:- हमारे विशेषज्ञ आपकी छत की जगह, बिजली की खपत और भौगोलिक स्थिति को समझने के लिए ऑन-साइट या वर्चुअल सर्वे करते हैं।",
      "आवश्यकता एवं लक्ष्य विश्लेषण:- हम आपकी वर्तमान बिजली खपत और भविष्य की ऊर्जा आवश्यकताओं का मूल्यांकन कर सबसे उपयुक्त सौर क्षमता व समाधान सुझाते हैं।",
      "योजना चयन:- हम आपको अनुकूलित सोलर सिस्टम योजनाएं प्रदान करते हैं — जिसमें सिस्टम प्रकार (ऑन-ग्रिड, हाइब्रिड, ऑफ-ग्रिड), वारंटी और लाभ का अनुमान शामिल होता है।",
      "सब्सिडी मार्गदर्शन:- पीएम सूर्य घर योजना के तहत पात्र योजनाओं के चयन में पूरी सहायता दी जाती है ताकि आपको अधिकतम वित्तीय लाभ मिल सके।",
      "सरकारी पोर्टल सहायता:- राष्ट्रीय रूफटॉप सोलर पोर्टल पर आवेदन और दस्तावेज़ जमा करने में हम चरण-दर-चरण सहायता प्रदान करते हैं।",
      "दस्तावेज़ीकरण एवं अनुमोदन:- हमारी टीम सभी कागजात, स्थानीय डिस्कॉम समन्वय और सरकारी नियमों के अनुसार कार्य सुनिश्चित करती है।",
      "सिस्टम इंस्टॉलेशन:- हमारे प्रशिक्षित तकनीशियन MNRE और विद्युत मानकों के अनुसार सोलर पैनल, इन्वर्टर और सभी उपकरण स्थापित करते हैं।",
      "परीक्षण एवं कमीशनिंग:- पूरी गुणवत्ता जांच की जाती है और सिस्टम की सुरक्षा, दक्षता तथा ग्रिड सिंक्रोनाइज़ेशन का परीक्षण किया जाता है।",
      "हैंडओवर एवं समर्थन:- हम प्रदर्शन दस्तावेज़ों के साथ स्थापित सोलर सिस्टम सौंपते हैं और निरंतर तकनीकी सहायता व रखरखाव प्रदान करते हैं।"
    ],
  },
  en: {
    title: "Our Process",
    steps: [
      "Initial Contact:- Reach out to us via phone, website, or by visiting our office in Ghazipur or Lucknow for a personalized consultation.",
      "Site Assessment:- Our experts conduct an on-site or virtual survey to understand your rooftop space, power consumption, and geographical conditions.",
      "Needs & Goals Analysis:- We evaluate your current electricity usage and future energy goals to propose the most suitable solar capacity and configuration.",
      "Plan Selection:-We present you with customized solar system plans — including system type (on-grid, hybrid, off-grid), warranty details, and ROI estimates.",
      "Subsidy Guidance:-Get complete assistance in selecting eligible plans under the PM Surya Ghar Yojana, ensuring maximum financial benefits.",
      "Government Portal Support:-We help you apply and submit the necessary documents on the national rooftop solar portal with step-by-step guidance.",
      "Documentation & Approvals:- Our team ensures accurate paperwork, local DISCOM coordination, and compliance with government and safety norms.",
      "System Installation:- Our trained technicians install the solar panels, inverter, and all equipment as per MNRE and electrical standards.",
      "Testing & Commissioning:- A complete quality check is performed, and the system is tested for safety, efficiency, and grid synchronization.",
      "Handover & Support:- We hand over the installed solar system along with performance documents and provide ongoing technical support and maintenance.",
    ],
  },
};

const Process = ({ language = "hi" }) => {
  const t = content[language];

  return (
    <div className="process">
      <h1>{t.title}</h1>
      <ol className="process-steps">
        {t.steps.map((step, idx) => (
          <li key={idx}>
            <h3>{step}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Process;