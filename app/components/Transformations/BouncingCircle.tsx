import * as motion from "motion/react-client";

function BouncingCircle() {
  return (
    <motion.div
      className="bg-blue-500 h-32 w-32 rounded-full"
      animate={{ y: [0, -100, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default BouncingCircle;
