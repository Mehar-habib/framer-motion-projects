"use client";
import * as motion from "motion/react-client";
import { useState } from "react";

function SkewRectangle() {
  const [isSkewed, setIsSkewed] = useState(true);

  return (
    <motion.div
      className="bg-yellow-500 w-80 h-40"
      onClick={() => setIsSkewed(!isSkewed)}
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default SkewRectangle;
