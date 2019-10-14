import React from "react";
import SignMeUp from "./SignMeUp";

export const Header = () => {
  const signUpCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          {/* <h6 className="text-uppercase">{new Date().toString()}</h6> */}
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/logo.png" />
          </div>
          <h2>Welcome to the Whiskey Fan Page</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signUpCallback={signUpCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
