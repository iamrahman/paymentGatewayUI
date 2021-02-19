import { Grid } from "@material-ui/core";
import React from "react";

const Button = ({
  classOverride,
  label,
  color,
  rightIcon,
  leftIcon,
  onClick,
}) => {
  return (
    <Grid
      item
      className={`center cursor-pointer ${classOverride}`}
      onClick={onClick}
    >
      {leftIcon}
      <label className={`${color} cursor-pointer`}>{label}</label>
      {rightIcon}
    </Grid>
  );
};

export default Button;
