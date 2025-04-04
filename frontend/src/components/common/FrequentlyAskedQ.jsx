import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does the SOS alert system work?",
    answer:
      "The SOS alert system is activated with a single tap. Once triggered, it immediately sends your real-time location to your emergency contacts and nearby authorities. The system also begins recording audio and video evidence while sending continuous location updates.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we use end-to-end encryption for all personal data and location information. Our security measures comply with international data protection standards, and you have complete control over who can access your information.",
  },
  {
    question: "Can I use Alertra without internet connection?",
    answer:
      "Yes, Alertra has an offline mode that maintains core safety features. Emergency alerts can still be triggered, and location data is cached and sent once connection is restored.",
  },
  {
    question: "How do I add emergency contacts?",
    answer:
      "You can add emergency contacts through the app's settings menu. Simply enter their contact information and send them an invitation. Once they accept, they'll be able to receive your emergency alerts and location updates.",
  },
];

const FrequentlyAskedQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-center flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-12">
        Everything you need to know about Alertra&apos;s safety features and
        functionality
      </p>
      <div className="space-y-6 w-full max-w-xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md w-full">
            <button
              className="w-full text-left flex justify-between items-center p-4 font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQ;
