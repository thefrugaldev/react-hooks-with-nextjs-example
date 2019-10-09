import React from "react";
import "bootstrap/dist/css/boostrap.min.css";
import "../static/site.css";
import { Header } from "./Header";
import { Menu } from "./Menu";

function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              This is my homepage. It should describe what this website or
              application is all about.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
