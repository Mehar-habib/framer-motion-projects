import * as motion from "motion/react-client";

function ColorChange() {
  return (
    <motion.div
      className="w-32 h-32"
      animate={{ backgroundColor: ["#ff0000", "#00ff00", "#0000ff"] }}
      transition={{ duration: 3, ease: "linear", repeat: Infinity }}
    ></motion.div>
  );
}

export default ColorChange;
