import React, { useState } from "react";

const Option = ({ label }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex items-center justify-center w-48 h-24 shadow-md ${
        isActive ? "border-2 border-primary" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <h1 className="text-center">{label}</h1>
    </div>
  );
};

export default Option;
