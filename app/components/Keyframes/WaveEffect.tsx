import * as motion from "motion/react-client";

function WaveEffect() {
  const boxes = Array.from({ length: 5 });
  return (
    <div className="flex space-x-2">
      {boxes.map((_, index) => (
        <motion.div
          key={index}
          className="w-16 h-16 bg-purple-500"
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 1,
          }}
        />
      ))}
    </div>
  );
}

export default WaveEffect;
