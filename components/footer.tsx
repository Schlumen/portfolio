import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Lumen Haendler. All rights reserved.
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-xs">
        <span className="font-semibold">Imprint:</span> Lumen Haendler Software
        Engineering, Franz-Haas-Str. 10a, 79761 Waldshut-Tiengen, Germany,
        Phone: +49 176 5555 9701, Email: lumen@haendler.dev, VAT ID: DE361858026
      </p>
    </footer>
  );
}
