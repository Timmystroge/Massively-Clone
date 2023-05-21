import React from "react";
import "./posts.css";
import blogPost1 from "../../assets/images/6.jpg";
import blogPost2 from "../../assets/images/5.jpg";
import blogPost3 from "../../assets/images/4.jpg";
import blogPost4 from "../../assets/images/3.jpg";
import blogPost5 from "../../assets/images/1.jpg";
import blogPost6 from "../../assets/images/2.jpg";
import FullStoryBtn from "../elements/FullStoryBtn";

const Posts = () => {
  return (
    <>
      <section className="posts  container_main_section bg-white">
        <div className="flex flex-col md:flex-row items-center">
          <article className="post border-right">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. ho ma g
            </h2>
            <div className="postImaage my-6">
              <img src={blogPost1} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>

          <article className="post border-left">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. the way
            </h2>
            <div className="postImage my-6">
              <img src={blogPost2} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <article className="post border-right">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. ho ma g
            </h2>
            <div className="postImaage my-6">
              <img src={blogPost3} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>

          <article className="post border-left">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. the way
            </h2>
            <div className="postImage my-6">
              <img src={blogPost4} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <article className="post border-right">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. ho ma g
            </h2>
            <div className="postImaage my-6">
              <img src={blogPost5} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>

          <article className="post border-left">
            <div className="postDate">May 17, 2023</div>
            <h2 className="postTitle font-black tracking-wider uppercase">
              Lorem ipsum dolor sit. the way
            </h2>
            <div className="postImage my-6">
              <img src={blogPost6} alt="post Image" />
            </div>
            <div className="postText font-light text-secondary text-left my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur atque voluptatum, voluptatem corporis ab alias
              laudantium nulla ut dicta dolor?
            </div>
            <FullStoryBtn value="full story" />
          </article>
        </div>
      </section>

      {/* load more button */}
      <div className="loadMore container_main_section bg-white text-center py-10">
        <div className="container_wrapper px-3">
          <FullStoryBtn value="load more" />
        </div>
      </div>
    </>
  );
};

export default Posts;
