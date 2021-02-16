import React from "react";

const Button = ({ classOverride, label, color, rightIcon, leftIcon, onClick }) => {
  const textColor = `text-${color} cursor-pointer`;
  return (
    <div className={`flex items-center justify-center cursor-pointer ${classOverride}`} onClick={onClick}>
      {leftIcon}<label className={textColor}>{label}</label>{rightIcon}
    </div>
  );
};

export default Button;
