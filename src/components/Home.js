import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../static/site.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import Link from "next/link";

function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom jumbotron">
            <h6 className="margintopbottom20">
              Welcome to the Whiskey Fan Page! Head over to the{" "}
              <Link href="/whiskeys">
                <a>
                  <em>Whiskeys</em>
                </a>
              </Link>{" "}
              page to view a full list of the available types of whiskeys. You
              can also choose to filter by the type of whiskey and even add the
              ones you really enjoy to your favorites list!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
