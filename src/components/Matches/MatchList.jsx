/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";
import "./matchlist.css";
import playIcon from "../../assets/matches/play.png"

export const MatchList = ({
  data: {
    id,
    date,
    team1,
    team1Logo,
    team1Score,
    team2,
    team2Logo,
    team2Score,
    sortdesc,
    highlights,
    moreLink,
    imgSrc,
    winTeam,
    duration,
  },
}) => {
  return (
      <div className="matchCard">
       <a href={moreLink} target="_blank">
        <div className="matchCardHead">
          <p className="matchNo">{`T20 ${id} of 74`}</p>
          <p className="matchDate">{date}</p>
        </div>
        <div className="matchCardBody1">
          <div className="matchCardBody__team">
            <img
              className="teamLogo"
              src={getImageUrl(team1Logo)}
              alt={`${team1} Logo`}
            />
            <p id="matchTeamName" className={winTeam==="team1" ? "blackTeam" :"grayTeam"}>{team1}</p>
          </div>
          <p className={winTeam==="team1" ? "blackTeam" :"grayTeam"}>{team1Score}</p>
        </div>
        <div className="matchCardBody2">
          <div className="matchCardBody__team">
            <img
              className="teamLogo"
              src={getImageUrl(team2Logo)}
              alt={`${team2} Logo`}
            />
            <p id="matchTeamName" className={winTeam==="team2" ? "blackTeam" :"grayTeam"}>{team2}</p>
          </div>
          <p className={winTeam==="team2" ? "blackTeam" :"grayTeam"}>{team2Score}</p>
        </div>
        <div className="matchCardFoot">
          <p className="matchDesc">{sortdesc}</p>
          <a href={highlights} className="hightlights" target="_blank">
            <img
              className="matchHightlightsImg"
              src={getImageUrl(imgSrc)}
              alt="hightlights team image"
            />
            <div className={`duraion `}>
              <img src={playIcon} alt="" className="playicon"/>
              <p className="matchdurationtime">{duration}</p>
            </div>
          </a>
        </div>
        </a> 
        
      </div>
   
  );
};
