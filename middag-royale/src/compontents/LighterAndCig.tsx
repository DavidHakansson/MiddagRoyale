import Lighter from "./CiggaretteLighterParts/Lighter";
import Cigarette from "./CiggaretteLighterParts/Ciggarette";

const LighterAndCig: React.FC = () => {
  return (
    <>
      <Cigarette />
      <Lighter />
    </>
  );
};

export default LighterAndCig;
