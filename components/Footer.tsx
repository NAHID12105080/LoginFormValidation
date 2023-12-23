import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-500 text-white fixed bottom-0 w-full text-center p-4">
      <p>&copy; {currentYear} LeafNote. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
