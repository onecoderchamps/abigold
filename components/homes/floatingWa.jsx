import { ChartArea, MessageCircle } from 'lucide-react';
import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '6281999717666'; // Ganti dengan nomor WhatsApp Anda
  const message = 'Halo, saya ingin bertanya tentang emas ABI'; // Pesan default

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
