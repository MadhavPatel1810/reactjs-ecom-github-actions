import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import blog01 from "../../../../assets/images/blog-04.jpg";
import blog02 from "../../../../assets/images/blog-05.jpg";
import blog03 from "../../../../assets/images/blog-06.jpg";
import { handleFetchBlogList } from "../store/action";

const BlogListSection = () => {
  const dispatch = useDispatch();
  const { BlogList } = useSelector((state) => state.Blog);
  const blogSection = [
    {
      blog_image: blog01,
      blog_Date: "22",
      blog_year: "Jan 2022",
      blog_title: "8 Inspiring Ways to Wear Dresses in the Winter",
      blog_desc:
        "class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      detail_Desc: "Continue Reading",
    },
    {
      blog_image: blog02,
      blog_Date: "18",
      blog_year: "Jan 2022",
      blog_title: "The Great Big List of Men’s Gifts for the Holidays",
      blog_desc:
        "class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      detail_Desc: "Continue Reading",
    },
    {
      blog_image: blog03,
      blog_Date: "16",
      blog_year: "Jan 2022",
      blog_title: "5 Winter-to-Spring Fashion Trends to Try Now",
      blog_desc:
        "class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
      detail_Desc: "Continue Reading",
    },
  ];

  /** Blog list */
  useEffect(() => {
    dispatch(handleFetchBlogList({ blogSection }));
  }, [dispatch]);

  return (
    <div className="col-lg-9 pt-5 pb-5">
      {BlogList.map((element, index) => {
        return (
          <div className="blogImg" key={index}>
            <Link to="#">
              <img src={element.blog_image} className="myImg" alt="Blog" />
              <div className="blogDate">
                <span className="date">{element.blog_Date}</span>
                <span className="year">{element.blog_year}</span>
              </div>
            </Link>
            <div className="pt-4 blogDescription">
              <h4 className="pb-4">
                <Link to="#">{element.blog_title}</Link>
              </h4>
              <p>{element.blog_desc}</p>
            </div>
            <div className="pt-4 detailBlog">
              <span>
                By <b>Admin</b> | <b>StreetStyle, Fashion, Couple</b> |{" "}
                <b>8 Comments</b>
              </span>
              <Link to="#" className="continueReading">
                {element.detail_Desc}
                <i className="fa-solid fa-arrow-right-long mx-4"></i>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogListSection;
