"use client";
import { motion } from "motion/react";

function ResponsiveButton() {
  return (
    <motion.div
      className="p-2 bg-blue-500 text-white rounded transition-transform duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Click Me!
    </motion.div>
  );
}

export default ResponsiveButton;
