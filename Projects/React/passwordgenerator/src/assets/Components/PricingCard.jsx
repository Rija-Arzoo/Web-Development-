import React from "react";

const PricingCard = ({ title, price, features, buttonText, popular }) => {
    return (
        <div
            className={`relative shadow-2xl  rounded-2xl p-6 text-center w-full border transition-all duration-300 hover:shadow-xl 
        ${popular ? "border-pink-900 border-2 scale-105" : "border-gray-800"}`}
        >
            {popular && (
                <span className="bg-pink-700 text-white text-xs px-3 py-1 rounded-full absolute mt-[-20px]">
                    Most Popular
                </span>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>

            {/* Price */}
            <p className="text-3xl font-bold text-blue-900 mb-6">{price}</p>

            {/* Features */}
            <ul className="text-gray-400 mb-6 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                        ✅ <span className="ml-2">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard;
