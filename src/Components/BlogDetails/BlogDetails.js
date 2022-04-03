import React, { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(` https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);
  return (
    <>
      <div className="header-gradient" />

      <div>
        <button onClick={() => navigate("/home")} className="back-button">
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
