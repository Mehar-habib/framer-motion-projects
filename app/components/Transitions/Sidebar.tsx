"use client";
import { motion } from "motion/react";
import { useState } from "react";

function SidebarExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="mb-4 p-2 bg-teal-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Sidebar
      </button>

      <motion.div
        className="fixed left-0 top-0 h-full w-64 bg-gray-700 text-white p-4 shadow-lg z-50"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h2 className="text-lg font-bold">Sidebar</h2>
        <p>My Personal Content</p>
      </motion.div>
    </div>
  );
}

export default SidebarExample;
