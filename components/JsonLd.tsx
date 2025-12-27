import React from "react";

export function JsonLd() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rufusgladness.com";

    const personData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rufus Gladness",
        "url": baseUrl,
        "jobTitle": "Lead Software Developer & Architect",
        "sameAs": [
            "https://github.com/RkayG",
            "https://www.linkedin.com/in/gladness-rufus/",
            "https://x.com/gladness_rkay"
        ],
        "description": "Lead Software Developer & Architect specializing in building scalable systems from zero to one. Expert in Next.js, Python, Solidity, and technical strategy."
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rufus Gladness Portfolio",
        "url": baseUrl,
        "author": {
            "@type": "Person",
            "name": "Rufus Gladness"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
        </>
    );
}
