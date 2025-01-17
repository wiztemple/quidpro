"use client"

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "What is Qpaid?",
      answer: "Qpaid is a trusted escrow platform that secures funds between buyers and sellers until agreed-upon terms are met. Every transaction is insured, providing peace of mind for both parties."
    },
    {
      question: "How does Qpaid work?",
      answer: "With Qpaid, the buyer deposits funds into an insured account. The seller delivers the product or service. Once the buyer confirms receipt and satisfaction, Qpaid releases the payment to the seller."
    },
    {
      question: "Why should I use Qpaid for my transactions?",
      answer: "Qpaid protects your money by holding it securely until all conditions are fulfilled, ensuring both parties are safeguarded from fraud or disputes."
    },
    {
      question: "Are my transactions insured on Qpaid?",
      answer: "Yes, every transaction on Qpaid is fully insured, giving you unmatched security and confidence in your dealings."
    },
    {
      question: "Who can use Qpaid?",
      answer: "Qpaid is perfect for e-commerce businesses, service providers, buyers, and anyone needing secure, insured transactions."
    },
    {
      question: "How long does a transaction take on Qpaid?",
      answer: "The timeline depends on the terms you set with the other party, including delivery and inspection periods. Qpaid ensures quick processing once conditions are satisfied."
    },
    {
      question: "What fees does Qpaid charge?",
      answer: "Qpaid charges a transparent fee based on the transaction amount, with no hidden charges. All fees are clearly communicated before completing your transaction."
    },
    {
      question: "What happens if there is a dispute between the buyer and the seller?",
      answer: "Qpaid provides expert dispute resolution services. We work with both parties to reach a fair resolution, keeping funds secure until the issue is resolved."
    },
    {
      question: "What types of transactions can Qpaid secure?",
      answer: "Qpaid supports transactions for buying and selling goods, freelance services, real estate, and more. If it involves money changing hands, Qpaid makes it safe."
    },
    {
      question: "How safe is my money with Qpaid?",
      answer: "Your money is held in a secure escrow account and insured until the transaction is complete. With Qpaid, you are protected from start to finish, no matter the size of the deal."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8  bg-[#F9FBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold mb-4">FAQs</h2>
        </div>

        <div className="max-w-3xl mx-auto border border-[#E1E6ED] rounded-lg">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-left text-[#1F2126]">{faq.question}</span>
                <div className="w-[30px] h-[30px] bg-[#F3F5F6] flex justify-center items-center rounded-full">
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C9DB1] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 py-4 bg-white">
                  <p className="text-[#5F738C] text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;