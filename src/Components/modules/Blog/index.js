import React from "react";
import BlogListSection from "./component/BlogListSection";
import BlogSideSection from "./component/BlogSideSection";

export const Blog = () => {
  return (
    <>
      <section className="sectionImg">
        <center>
          <h1>Blog</h1>
        </center>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <BlogListSection />
            <BlogSideSection />
          </div>
        </div>
      </section>
    </>
  );
};
