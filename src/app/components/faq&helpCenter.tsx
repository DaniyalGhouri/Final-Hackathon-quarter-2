
'use client';

import React, { useState } from "react";
import Banner from "./banner";
import { Link } from "lucide-react";
import client from "@/sanity/lib/client";


const faqData = [
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking number provided in your confirmation email.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank card, cash on delivery, and other major payment options.",
  },
  {
    question: "Can I return or exchange an item?",
    answer: "Yes, you can return or exchange an item within 90 days of purchase. Please check our Return Policy for details.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to multiple countries. Check our Shipping Policy for details.",
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact our customer service through the Contact Us page on our website or by calling our helpline.",
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes, we offer digital gift cards in various denominations. You can purchase them on our website.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Orders can be canceled within 24 hours of purchase. Please contact our support team as soon as possible.",
  },
  {
    question: "How do I know if my order is confirmed?",
    answer: "Once your order is confirmed, you will receive a confirmation email with your order details.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "We offer free shipping on orders above $50. Please check our Shipping Policy for more details.",
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "You can change your shipping address within 24 hours of placing the order by contacting our support team.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Same-day delivery is available in select areas. Please check during checkout for availability.",
  },
  {
    question: "What should I do if I receive a damaged item?",
    answer: "Please contact customer service within 48 hours if you receive a damaged item, and we will assist with a return or replacement.",
  },
  {
    question: "Can I apply multiple discount codes?",
    answer: "Only one discount code can be applied per order. You cannot combine codes.",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on the 'Forgot Password' link on the login page, and follow the instructions to reset your password.",
  },
  {
    question: "Do you offer warranty on products?",
    answer: "Yes, we offer a 1-year warranty on most products. Please refer to the product details for warranty information.",
  },
];

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [name, setName] = useState(""); // 🔹 Name State
  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState("");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.create({
        _type: "question",
        question: query,
        name: name,
        
      });
      setNotification("Your question has been submitted. We will get back to you soon!");
      setTimeout(() => setNotification(""), 3000);
      setName(""); // 🔹 Reset Name Input
      setQuery("");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <>
      {/* Banner */}
      <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-4xl font-bold">FAQ & Help Center</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; FAQ & Help Center
            </p>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className="fixed top-0 left-0 right-0 bg-green-600 text-white py-3 text-center">
          {notification}
        </div>
      )}

      {/* Search Form */}
      <section className="bg-white py-8 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="query" className="block text-sm sm:text-base font-medium text-gray-700">
                  Type your question
                </label>
                <input
                  type="text"
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type your question here..."
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-600 w-full py-3 border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-center mb-8 sm:mb-12 mt-8 sm:mt-12">
            <h1 className="text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h1>
            <p className="text-gray-600 mt-4">Got questions? We have got answers! Below are some of the most commonly asked questions.</p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button className="w-full text-left text-lg sm:text-xl font-medium text-gray-700 flex justify-between items-center py-3" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenter;
