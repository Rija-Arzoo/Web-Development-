import React from "react";

function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-blue-900 text-white rounded-2xl shadow-lg hover:scale-105 transition"
        >
            {label}
        </button>
    );
}
export default Button;
