// components/ZippoLighter.tsx
import React from "react";
import ZippoTop from "./ZippoTop";
import ZippoBody from "./Zippobody";

const Lighter: React.FC = () => {
  return (
    <>
      <div className="relative">
        <span
          role="img"
          aria-label="flame"
          className="absolute top-0 right-0 text-yellow-500 text-4xl "
          style={{ fontSize: "48px", transform: "translate(-102px, 50px)" }}
        >
          🔥
        </span>
        <div className="z-10">
          <ZippoTop />
        </div>
      </div>
      <ZippoBody />
    </>
  );
};

export default Lighter;
