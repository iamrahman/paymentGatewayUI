import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card from "../Card";
import { Routes } from "../../Utils";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { Button } from "../../Components";

const Layout = ({ children, heading, backBtn, nextBtn, subChild = null}) => {
  return (
    <div className="container px-20">
      <div className="flex w-full bg-white">
        <div className="w-4/12 h-40 primary-linear p-6">
          {backBtn && (
            <div
              className="text-white cursor-pointer"
              onClick={() => Routes.back()}
            >
              <ArrowBackIcon style={{ color: "white" }} /> Go back
            </div>
          )}
          {subChild ? subChild: null}
        </div>
        <div className="w-7/12 h-40">
          <div className=" py-6">
            <h1 className="text-4xl text-center">{heading}</h1>
          </div>
          {children}
        </div>
        {nextBtn && false && <div className="w-1/12 flex">
          <Button
            label="Next"
            rightIcon={<ChevronRightOutlinedIcon style={{ color: "white" }} />}
            classOverride="mt-56 ml-16 w-20 h-20 bg-secondry rounded-full shadow-lg absolute"
            color="white"
            onClick={() => Routes.go("/card-payment")}
          />
        </div>}
      </div>
    </div>
  );
};
export default Layout;
