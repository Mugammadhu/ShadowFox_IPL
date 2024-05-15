/* eslint-disable react/prop-types */
import { useState } from "react";
import { getImageUrl } from "../../utils.jsx";
import "./card.css";

export const Card = ({
  data: {
    id,
    SrcImage: [img1, img2, img3],
    title,
    alt,
    description,
    link,
    more,
  },
}) => {
  const [showLess, setShowLess] = useState(true);
  return (
    <div className="card">
      <div
        id={`carouselExampleInterval${id}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={getImageUrl(img1)}className="card-img-top" alt={alt} />
          </div>
          <div className="carousel-item" data-bs-interval="4500">
            <img src={getImageUrl(img2)} className="card-img-top" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={getImageUrl(img3)} className="card-img-top" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExampleInterval${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExampleInterval${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {showLess && description.length > 130
            ? description.slice(0, 130) + "..."
            : description}{" "}
          <button
            onClick={() => {
              setShowLess((preShowLess) => !preShowLess);
            }}
            className="btn text-info border-0"
          >
            ReadMore
          </button>
        </p>
        <div className="btn-group">
          <a href={link} className="btn btn-primary" target="_blank">
            {title}
          </a>
          <a href={more} className="btn btn-warning d-flex align-items-center" target="_blank">
            More
          </a>
        </div>
      </div>
    </div>
  );
};
