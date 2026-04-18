"use client";

import { useState } from "react";

function randomColour() {
    return "#" + Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16);
}

export default function Home() {
    const [colour, setColour] = useState("#FFF");
    return (
        <button style={{backgroundColor: colour}} onClick={() => {setColour(randomColour())}}>Randomize Colour</button>
    );
}

