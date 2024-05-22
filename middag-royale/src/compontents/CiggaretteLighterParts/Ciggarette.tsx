// Cigarette.tsx
import React from "react";
import { motion, useMotionValue } from "framer-motion";

interface CigaretteProps {
  touchedFlame: boolean;
  setTouchedFlame: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cigarette: React.FC<CigaretteProps> = ({ touchedFlame, setTouchedFlame }) => {
  const x = useMotionValue(0);
  const flameX = useMotionValue(0);

  flameX.set(0);

  x.onChange((cigX) => {
    flameX.set(cigX);
    if (cigX > 200) {
      setTouchedFlame(true); // Update parent state
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
        top: 280,
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
          x,
        }}
      />
    </>
  );
};

export default Cigarette;
