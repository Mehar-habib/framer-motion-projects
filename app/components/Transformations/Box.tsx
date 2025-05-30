import * as motion from "motion/react-client";

function Box() {
  return (
    <motion.div
      className="bg-blue-500 h-32 w-32"
      initial={{ x: -100 }}
      animate={{ x: 200 }}
      transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
    />
  );
}

export default Box;
