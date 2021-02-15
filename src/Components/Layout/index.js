import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Layout = ({ children, heading, backBtn }) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div class="flex flex-row w-70">
        <div className="flex h-40 w-1/3 p-6 primary-linear">
          {backBtn && (
            <div>
              <ArrowBackIcon color="primary" /> Go back
            </div>
          )}
        </div>
        <div className="flex h-40 w-2/3 p-6">
          <div className="flex flex-col">
            <h1 className="text-4xl">{heading}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
