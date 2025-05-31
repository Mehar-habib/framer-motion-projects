import * as motion from "motion/react-client";

function PulsatingButton() {
  return (
    <motion.button
      className="p-4 bg-blue-500 text-white rounded"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      Pulse Me
    </motion.button>
  );
}

export default PulsatingButton;
