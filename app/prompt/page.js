"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <input type="text" name="firstName" id="firstName" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" name="lastName" id="lastName" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault();
                    if (firstName.trim() && lastName.trim()) router.push(`/display?firstName=${firstName.trim()}&lastName=${lastName.trim()}`);
                }}>Submit</button>
            </main>
        </div>
    );
}

