"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/constants";

export function JsonLd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "medical-webpage-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      author: { "@type": "Person", name: SITE_CONFIG.author },
      reviewer: { "@type": "Person", name: SITE_CONFIG.reviewer },
      lastReviewed: new Date().toISOString().split("T")[0],
      specialty: "Obstetrics",
    });
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("medical-webpage-schema");
      if (el) el.remove();
    };
  }, []);

  return null;
}
