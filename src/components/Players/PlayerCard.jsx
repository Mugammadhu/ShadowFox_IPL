/* eslint-disable react/prop-types */


import { getImageUrl } from "../../utils";
import "./playercard.css";
import { Link } from "react-router-dom";


export const PlayerCard = ({
  data: { id, name, Specialization, imgSrc, logo, tlogo },
  typeIcon, bgColor,txtColor
}) => {
 
  return (
    
    <>
     <Link
        to={`/players/${id}`}
        className="card col-sm-12 col-md-6 col-lg-3 col-xl-1 playerCard"
        style={{ width: "18rem", backgroundColor: bgColor, color: txtColor }}
      >
        <div>
          {logo && (
            <img
              className="positionIcon"
              src={getImageUrl(logo)}
              alt="captain or country logo"
            />
          )}
          {tlogo && (
            <img
              className="tLogo"
              src={getImageUrl(tlogo)}
              alt="captain or wicket keeper logo"
            />
          )}
          <img src={typeIcon} alt="bat-ion" className="typeIcon" />
        </div>
        <img
          src={getImageUrl(imgSrc)}
          className="card-img-top playerimg"
          alt={name + "image"}
        />
        <div className="card-body">
          <h3 className="card-title playertitle">{name}</h3>
          <p className="card-text playertext">{Specialization}</p>
        </div>
      </Link>
    </>
  );
};
