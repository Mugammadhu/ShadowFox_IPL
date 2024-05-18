/* eslint-disable react/prop-types */
import "./Home.css";
import { Card } from "./Card";
import iplhome from "../../data/ipl/iplhome.json";
import cupsCard from "../../data/ipl/cupsCard.json"
import { getImageUrl } from "../../utils";

export const Home = () => {
  let homeData = JSON.parse(localStorage.getItem("homeData"));
  let cardData = JSON.parse(localStorage.getItem("cardData"));

  if (homeData === null && cardData === null) {
    localStorage.setItem("homeData", JSON.stringify(iplhome));
    localStorage.setItem("cardData", JSON.stringify(cupsCard));
    homeData = JSON.parse(localStorage.getItem("homeData"));
    cardData = JSON.parse(localStorage.getItem("cardData"));
  }

  if (homeData !== null) {
    var { icon, team, teamOffPage, noCup, homeVideo, homeAuido } = homeData;
  }

  console.log(cardData)

  return (
    <div className="Home-container">
      <div className="home_head">
        <a href={teamOffPage} target="_blank">
          <img src={getImageUrl(icon)} alt="team logo" />
        </a>
        <div className="homeTitle">
          <h1>Welcome to {team} FanClub </h1>
        </div>
      </div>
      <audio src={getImageUrl(homeAuido)} autoPlay loop></audio>
      <video src={getImageUrl(homeVideo)} muted autoPlay loop></video>

      {cardData !== null && (
        <div className="cupDiv">
          <h1 className="cupTitle">{team} TROPHIES</h1>
          <div className="cups">
            <div
              className={`HomeCardContainer ${
                cardData.length === 1 && "cardLength1"
              } ${cardData.length === 2 && "cardLength2"}`}
            >
              {cardData.map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      )}

      {cardData !== null && cardData < 1 && (
        <div className="noCup_container">
          <h1 className="nocupTitle">No Trophies</h1>
          <div className="noCup">
            <img src={getImageUrl("Team/cup.png")} alt="cup image" />
            <p>
              <span className="dcNoCup">
                {" "}
                The {team} have indeed never won an IPL title.
              </span>
              {noCup}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
