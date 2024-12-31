"use client";

import React, { useEffect, useState } from "react";

import { ChartArea, MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [phoneNumber, setphoneNumber] = useState("");

  useEffect(() => {
    // Access localStorage only in the browser
    if (typeof window !== "undefined") {
      setphoneNumber(localStorage.getItem("phoneWa") || "");
    }
  }, []);

  const message = "Halo, saya ingin bertanya tentang emas ABI"; // Pesan default

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bg-success text-white p-3 mb-4 me-4 rounded-circle shadow-lg d-flex align-items-center justify-content-center"
      style={{ bottom: 0, right: 0 }}
    >
      <MessageCircle />
    </a>
  );
};

export default FloatingWhatsApp;
