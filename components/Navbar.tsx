"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gem } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-green-500 text-white py-2 m-3 fixed w-full left-0 top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex text-center items-center justify-center">
          <Gem className="font-bold cursor-pointer" />
          <div className="">
            <h2 className="text-2xl font-bold">LeafNote</h2>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/about">
            <span className="hover:text-gray-300 cursor-pointer text-xl">
              About Us
            </span>
          </Link>
          <Link href="/community">
            <span className="hover:text-gray-300 cursor-pointer text-xl">
              Community
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300 cursor-pointer text-xl">
              Contact
            </span>
          </Link>
        </div>
        {/* Hamburger icon for smaller screens */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </div>
      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="md:hidden text-center">
          <Link href="/about">
            <span
              className="block py-2 text-xl hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              About Us
            </span>
          </Link>
          <Link href="/community">
            <span
              className="block py-2 text-xl hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Community
            </span>
          </Link>
          <Link href="/contact">
            <span
              className="block py-2 text-xl hover:text-gray-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
