/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Link } from 'react-router-dom';
import './blogCard.css';

const BlogCard = ({
  index, id,content,subTitle,title,postId,createdAt
}) => {
  const readMoreColor = ['pink', 'orange', 'yellow'];
  const image = ['images/peo.jpg','images/y2.jpg','images/y3.jpg'];
  return (

    <div
      key={id}
      className="BlogCard card col-lg-4 col-md-12 mb-lg-1"
      style={{ padding: '0 20px',background:' linear-gradient(to left, #ccffff 0%, #ffffff 100%)'}}
    >
      <div class="row">
     <div class="col-sm-4">
      <p>
        <img className="img-fluid card-img-top" alt="blogPic" src={image[index]}  />
          <h4 className=" card-title font-weight-bold ml-auto mb-2 center" style={{display:'inline-block',overflow: 'hidden',whiteSpace:'nowrap',textAlign:'center'}}>{title}</h4>
      </p>
      <p className="card-text bold">
        {subTitle}
      </p>
      <Link
        className='button mb-5'  style={{backgroundColor:readMoreColor[index]}}
        to={`/post/${postId}`}
        type="button"
      >
        Read More
      </Link>
    </div>
    </div>
    </div>

  );
};

export default BlogCard;
