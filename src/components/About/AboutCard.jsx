/* eslint-disable react/prop-types */
import "./aboutcard.css";
import { useState } from "react";
import { getImageUrl } from "../../utils.jsx";

export const AboutCard = ({
  abt: { occupation, name, imgSrc, content, link, linkData },
}) => {
  const [showLess, setShowLess] = useState(true);
  return (
    <div className="card abtCard">
      <img
        src={getImageUrl(imgSrc)}
        className="card-img-top abtCardImg"
        alt={`${name} image`}
      />
      <div className="card-body">
        <h5 className="card-title ">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary abtCardSubTitle">
          {occupation}
        </h6>
        <p className="card-text abtCardTitle">
          {showLess && content.length > 130
            ? content.slice(0, 130) + "..."
            : content}{" "}
          <button
            onClick={() => {
              setShowLess((preShowLess) => !preShowLess);
            }}
            className="btn text-info border-0"
          >
            ReadMore
          </button>
        </p>
        <a href={link} className="btn btn-primary" target="_blank">
          {`More About ${linkData}`}
        </a>
      </div>
    </div>
  );
};
