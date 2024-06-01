/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";
import "./groundCard.css";
import { Link } from "react-router-dom";

export const GroundCard = ({
  ground: {
    id,
    stadium,
    place,
    imgSrc: [img1, img2, img3],
    location,
  },
}) => {
  const handleLocationClick = (e) => {
    // Stop the event from propagating to the Link component
    e.stopPropagation();
  };
  return (
    <Link to={`/grounds/${id}`}>
      <div className="card groundCard">
        <div
          id={`carouselExampleInterval${id}`}
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src={getImageUrl(img1)}
                className="card-img-top"
                alt={stadium}
              />
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

        <div className="card-body groundCardBody">
          <h5 className="card-title">{stadium}</h5>
          <p className="card-text">{place}</p>
          <a
            href={location}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLocationClick}
          >
            Location
          </a>
        </div>
      </div>
    </Link>
  );
};
