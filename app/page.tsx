import * as motion from "motion/react-client";

function Home() {
  return (
    <div>
      <motion.div className="box" animate={{ x: 100, y: 100 }} />
    </div>
  );
}

export default Home;
