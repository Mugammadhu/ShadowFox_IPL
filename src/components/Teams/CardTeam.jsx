/* eslint-disable react/prop-types */

import { getImageUrl } from "../../utils";
import "./cardteam.css";
import { Link } from "react-router-dom";


export const CardTeam = ({ team: { id, ImgSrc, team,fullname,years} }) => {


  return (
    <Link to={`/teams/${id}`} >
      <div className="teambox" >
        <div className={`card teamCard ${team}-bottom ${years && "nodisplay"}`}>
          <div className={`teamlogo ${team}-top`}>
            <img src={getImageUrl(ImgSrc)} alt={team} />
          </div>
          <div className="teamname">
            <h1 className={`head-${team}`}>{fullname}</h1>
          </div>
        </div>

        {
        years && <div className={`${years && "years"}`}>
          <div className="teamInfo">
            
            <img src={getImageUrl(ImgSrc)} alt={team} />
            <h4>{team}</h4>
          </div>
          <img src={getImageUrl('Team/cup.png')} alt="cup" className="cup "/>
          <h1 >{years}</h1>
        </div>
       }

        </div>
        

      
    </Link>
  );
};
