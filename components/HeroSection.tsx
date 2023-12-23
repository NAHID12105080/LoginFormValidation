"use client";

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button"; // Make sure this import is correct based on your project structure

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="bg-green-500 text-white py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          variants={textVariants}
        >
          Join Our Tree Lovers Community
        </motion.h1>
        <motion.p className="text-lg md:text-xl mb-8" variants={textVariants}>
          Connect with fellow tree enthusiasts and make a difference in the
          world.
        </motion.p>
        {/* Use motion.button for animations */}
        <motion.button
          className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300"
          variants={textVariants}
        >
          <Link href="/sign-in">Join Now</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
