import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`} className="link">
        <span className="title">{post.title}</span>
        <img className="img" src={post.img} alt={post.title} />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
