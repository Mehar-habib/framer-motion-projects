import * as motion from "motion/react-client";

function ComplexAnimation() {
  return (
    <motion.div
      className="bg-purple-500 h-28 w-28"
      animate={{ x: 200, rotate: 360, scale: 1.5, borderRadius: "50%" }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}

export default ComplexAnimation;
