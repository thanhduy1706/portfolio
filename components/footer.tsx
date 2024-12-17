import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2025 Nguyen Dang Thanh Duy. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React (Next.JS), TypeScript, TailwindCSS, Framer Motion, and Vercel
        hosting.
      </p>
    </footer>
  );
}
