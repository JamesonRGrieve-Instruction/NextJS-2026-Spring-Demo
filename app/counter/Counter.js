"use client";

import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => {setCount(old => old+1)}}>Count Up From {count}</button>
    );
}

