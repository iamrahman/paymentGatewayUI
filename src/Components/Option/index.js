import React, { useState } from "react";

const Option = ({ label, classOverride }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex items-center justify-center ${classOverride} h-20 shadow-md ${
        isActive ? "border-2 border-primary" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <h1 className="text-center">{label}</h1>
    </div>
  );
};

export default Option;
