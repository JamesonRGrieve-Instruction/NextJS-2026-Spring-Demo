import React from "react";
import { redirect } from "next/navigation";

export default function Nav() {
    async function go(formData) {
        "use server";

        const navValue = formData.get("nav");
        redirect(`/render-slug/${navValue}`);
    }

    async function goOverride(formData) {
        "use server";

        const navValue = formData.get("nav");
        redirect(`/render-slug/${navValue}/override`);
    }

    async function goQuery(formData) {
        "use server";

        const navValue = formData.get("nav");
        redirect(`/render-query?query=${navValue}`);
    }

    return (
        <nav>
            <form>
                <input id="nav" name="nav" type="text" />

                <button formAction={go}>
                    Go
                </button>

                <button formAction={goOverride}>
                    Go Override
                </button>

                <button formAction={goQuery}>
                    Go Query
                </button>
            </form>
        </nav>
    );
}