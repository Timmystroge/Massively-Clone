import React from "react";
import ArrowDownCircle, {
  Facebook,
  Github,
  Instagram,
  Twitter,
} from "../Icons";

import "./header.css";
//
const Header = () => {
  return (
    <>
      <header className="relative">
        <div className="header__cover h-auto">
          <div className="headerCover__overlay bg-secondary opacity-90"></div>
          <div className="container_wrapper">
            <div className="headerContent">
              <div className="header__text">
                <h1 className="text-grayish font-black uppercase headerText text-center">
                  this is <br /> massively
                </h1>
                <p className="headerparagraph text-grayish font-lightItalic text-center">
                  A free Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ad quos, recusandae pariatur sequi fugiat facilis
                  corrupti cupiditate.
                </p>

                <div className="scroll_to flex justify-center">
                  <a href="#headline" className="text-grayish ">
                    <ArrowDownCircle />
                  </a>
                </div>
              </div>

              <div className="header__nav">
                <div className="headerNav__links">
                  <ul className="flex uppercase">
                    <a href="" className="active">
                      <li>this is massively</li>
                    </a>
                    <a href="">
                      <li>generic page</li>
                    </a>
                    <a href="">
                      <li>elements reference</li>
                    </a>
                  </ul>
                </div>

                <div className="headerNav__icons">
                  <ul className="flex gap-1">
                    <a href="">
                      <li>
                        <Twitter />
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <Facebook />
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <Instagram />
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <Github />
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
