import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card from "../Card";
import { Routes } from "../../Utils";

const Layout = ({ children, heading, backBtn }) => {
  return (
    <div className="container shadow-xl">
      <div className="grid grid-flow-col bg-white">
        <div className="grid-cols-4 h-40 primary-linear p-6">
          {backBtn && (
            <div className="text-white cursor-pointer" onClick={() => Routes.back()}>
              <ArrowBackIcon style={{color: 'white'}} /> Go back
            </div>
          )}
          {false && <Card />}
        </div>
        <div className="grid-cols-8 h-40 ">
          <div className="grid grid-flow-row">
            <div className="grid grid-rows-12 py-6">
              <h1 className="text-4xl">{heading}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
