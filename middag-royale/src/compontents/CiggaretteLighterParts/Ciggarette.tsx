import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const Cigarette: React.FC = () => {
  const x = useMotionValue(0);
  const [touchedFlame, setTouchedFlame] = useState(false);

    const flameX = useMotionValue(0);
    flameX.set(0); 

    x.onChange((cigX) => {
      flameX.set(cigX); 
    });

    x.onChange((cigX) => {
      if (cigX > 200) {
        setTouchedFlame(true);
      } 
    });

  const CigFlame = () => (
    <motion.span
    role="img"
    aria-label="flame"
    className="absolute top-0 right-0 text-yellow-500 text-4xl"
    style={{
      fontSize: "48px",
      x: flameX,
      left: -500,
      top: 340,
      zIndex: 10,
      pointerEvents: "none",

    }}
  >
    🔥
  </motion.span>
  );


  // Define constraints for dragging
  const dragConstraints = {
    left: -100, // Adjust as needed based on container width
    right: 100,
  };

  // Calculate rotation based on drag position

  return (
    <>
    {touchedFlame && <CigFlame />}
    <motion.div
      drag="x"
      dragConstraints={dragConstraints}
      style={{
        width: 250,
        height: 40,
        left: -350,
        top: 140,
        backgroundColor: "brown",
        borderRadius: 10,
        position: "relative",
        
        x
      }}
    />
    </>
  );
};

export default Cigarette;
