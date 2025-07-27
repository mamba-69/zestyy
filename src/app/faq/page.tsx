'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  // This would normally be fetched from a database or CMS
  const faqs = [
    {
      question: "What makes ZestyRed ketchup different from other brands?",
      answer: "ZestyRed ketchup is made from premium-quality tomatoes sourced directly from India's finest tomato-growing regions. Our unique recipe preserves the natural flavor and nutritional value of tomatoes while maintaining the perfect balance of tanginess and sweetness. We use minimal preservatives and no artificial colors or flavors."
    },
    {
      question: "Are ZestyRed products vegetarian/vegan?",
      answer: "Yes, all ZestyRed ketchup products are 100% vegetarian and vegan. They contain no animal-derived ingredients or by-products."
    },
    {
      question: "How long does ZestyRed ketchup last after opening?",
      answer: "Once opened, ZestyRed ketchup should be refrigerated and consumed within 3 months for optimal flavor and quality. The exact expiry date is printed on each bottle."
    },
    {
      question: "Does ZestyRed ketchup contain preservatives?",
      answer: "ZestyRed ketchup contains minimal preservatives necessary to maintain product safety and shelf life. We prioritize natural preservation methods and use only food-grade preservatives approved by FSSAI in the smallest quantities possible."
    },
    {
      question: "Is ZestyRed ketchup gluten-free?",
      answer: "Yes, ZestyRed ketchup is gluten-free. It does not contain wheat, barley, rye, or any gluten-containing ingredients."
    },
    {
      question: "Where can I buy ZestyRed products?",
      answer: "ZestyRed products are available at major supermarkets, grocery stores, and retail chains across India. You can also purchase our products online through our website or major e-commerce platforms. For bulk orders or distribution inquiries, please visit our Contact page."
    },
    {
      question: "Do you offer customized ketchup formulations for restaurants and food service businesses?",
      answer: "Yes, we offer customized ketchup formulations for restaurants, hotels, catering services, and other food service businesses. We can adjust spice levels, consistency, packaging, and branding according to your specific requirements. Please contact our business team through the Retail & Distribution Inquiry Form for more details."
    },
    {
      question: "What sustainability practices does ZestyRed follow?",
      answer: "ZestyRed is committed to sustainable practices throughout our supply chain. We work with farmers who use eco-friendly farming methods, optimize our manufacturing processes to reduce water and energy consumption, use recyclable packaging materials, and support community development in the regions where we source our tomatoes."
    },
    {
      question: "How can I provide feedback about ZestyRed products?",
      answer: "We value your feedback! You can share your thoughts, suggestions, or concerns through our Contact page, by emailing feedback@zestyred.com, or by calling our customer service at +91 98765 43210. You can also connect with us on our social media platforms."
    },
    {
      question: "Does ZestyRed offer internship or job opportunities?",
      answer: "Yes, ZestyRed regularly offers internship and job opportunities across various departments including food technology, quality control, marketing, sales, and administration. Please visit the Careers section of our website or email your resume to careers@zestyred.com for current openings."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-display">Frequently Asked Questions</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-8">
              Find answers to commonly asked questions about ZestyRed products, services, and policies. If you can&apos;t find the information you&apos;re looking for, please don&apos;t hesitate to contact us.  
            </p>
            
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="/contact" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}