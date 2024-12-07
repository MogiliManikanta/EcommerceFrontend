import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

function InfoSection() {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-4xl text-red-600" />,
      title: "Free Shipping",
      description:
        "Get your orders delivered at no extra cost, quickly and safely.",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-600" />,
      title: "Support 24/7",
      description: "Our team is available around the clock to assist you.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refunds guaranteed if you're not satisfied.",
    },
    {
      icon: <FaLock className="text-4xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payment information is encrypted and secure.",
    },
    {
      icon: <FaTag className="text-4xl text-red-600" />,
      title: "Exclusive Discounts",
      description: "Save big with special offers and discounts.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Shop With Us?
          </h2>
          <p className="mt-2 text-gray-600">
            Experience unparalleled convenience and quality.
          </p>
        </div>
        {/* Info Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg 
              transition duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
