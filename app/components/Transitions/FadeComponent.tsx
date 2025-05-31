"use client";
import * as motion from "motion/react-client";
import { useState } from "react";

function FadeComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Fade
      </button>
      {visible && (
        <motion.div
          className="p-4 bg-gray-400 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I am Fading Components
        </motion.div>
      )}
    </div>
  );
}

export default FadeComponent;
