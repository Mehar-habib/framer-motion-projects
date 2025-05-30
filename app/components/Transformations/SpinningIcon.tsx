import * as motion from "motion/react-client";

function SpinningIcon() {
  return (
    <motion.img
      src="hishem.png"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="rounded-full h-52 w-52"
    />
  );
}

export default SpinningIcon;
