import React, { useState } from "react";

const Option = ({ label, icon, classOverride, onClick, isActive }) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer ${classOverride} h-20 shadow-md rounded ${
        isActive ? "border-2 border-secondry" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="flex items-center justify-center">
      {icon}
      </div>
      <p className="flex text-center">{label}</p>
    </div>
  );
};

export default Option;
