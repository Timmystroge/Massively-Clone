import React from "react";
import "./mainSection.css";
import Headline from "../headline/Headline";
import Posts from "../headline/Posts";

const MainSection = () => {
  return (
    <>
      <main>
        <div className="mainSection">
          <section className="section" id="massively">
            <div className="container_main_section bg-white py-8 px-5 lg:py-8 lg:px-10">
              <Headline />
            </div>
            <Posts />
          </section>
        </div>
      </main>
    </>
  );
};

export default MainSection;
