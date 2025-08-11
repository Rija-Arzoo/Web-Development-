import React, { useState } from "react";
import Button from "./Components/Button";

function BackgroundChanger() {
    const [bgColor, setBgColor] = useState("#ffffff");

    const handleColorChange = (event) => {
        setBgColor(event.target.value);

    };

    return (
        <div
            className="h-screen flex flex-col items-center justify-center transition-colors duration-500"
            style={{ backgroundColor: bgColor }}
        >
            <h1 className={`text-2xl font-bold drop-shadow-xl mb-4 ${bgColor === "#ffffff" ? "text-black" : "text-white"}`}>
                Pick a Background Color
            </h1>

            {/* Color Picker */}
            <input
                type="color"
                value={bgColor}
                onChange={handleColorChange}
                className="mb-4 w-20 h-12 border-2 border-gray-300 rounded-md outline-none cursor-pointer"
            />

            {/* Reusable Button */}
            <Button label="Reset to White" onClick={() => setBgColor("#ffffff")} />
        </div>
    );
}

export default BackgroundChanger;
