import React from "react";

const Button = ({ classOverride, label, color, rightIcon, leftIcon }) => {
  const textColor = `text-${color}`;
  return (
    <div className={`flex items-center justify-center ${classOverride}`}>
      {leftIcon}<label className={textColor}>{label}</label>{rightIcon}
    </div>
  );
};

export default Button;
