import { useState } from "react";
import { motion} from "framer-motion";

const ZippoTop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      style={{
        width: 150,
        height: 100,
        marginTop: 50,
        marginLeft: 70,
        marginBottom: 0,
        position: "relative",
        zIndex: 10,
        backgroundColor: "silver",
        transformOrigin: "bottom right", // Set the transform origin to bottom right
      }}
      onClick={() => setIsOpen(!isOpen)}
      animate={{
        rotate: isOpen ? 0 : 90
      }}

    />
  );
};

export default ZippoTop;
