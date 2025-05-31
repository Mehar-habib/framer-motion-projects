import * as motion from "motion/react-client";

function ZigZagAnimation() {
  return (
    <motion.div
      className="w-16 h-16 bg-pink-500"
      animate={{ x: [0, 50, 0, -50, 0], y: [0, -50, 0, 50, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>
  );
}

export default ZigZagAnimation;
