import * as motion from "motion/react-client";

function AnimatedBackground() {
  return (
    <motion.div
      className="h-screen w-screen"
      animate={{ backgroundColor: ["#ff0000", "#00ff00", "#0000ff"] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export default AnimatedBackground;
