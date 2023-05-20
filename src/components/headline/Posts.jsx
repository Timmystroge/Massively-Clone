import React from "react";
import "./posts.css";

const Posts = () => {
  return (
    <>
      <section className="posts flex flex-col md:flex-row items-center container_main_section bg-white">
        <article className="post border-right">
          <div className="postDate">May 17, 2023</div>
          <h2 className="postTitle font-black tracking-wider">
            Lorem ipsum dolor sit. ho ma g
          </h2>
          <div className="postImaage">
            <img src="" alt="" />
          </div>
          <div className="postText"></div>
          <div className="readMore"></div>
        </article>
        <article className="post border-left">
          <div className="postDate">May 17, 2023</div>
          <h2 className="postTitle font-black tracking-wider">
            Lorem ipsum dolor sit. the way 
          </h2>
          <div className="psotImage">
            <img src="" alt="" />
          </div>
          <div className="postText"></div>
          <div className="readMore"></div>
        </article>
      </section>
    </>
  );
};

export default Posts;
