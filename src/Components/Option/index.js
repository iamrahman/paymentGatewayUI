import React, { useState } from "react";

const Option = ({ label, icon, classOverride }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`flex items-center justify-center ${classOverride} h-20 shadow-md ${
        isActive ? "border-2 border-primary" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-center">
      {icon}
      </div>
      <p className="flex text-center">{label}</p>
    </div>
  );
};

export default Option;
