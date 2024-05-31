/* eslint-disable react/prop-types */
import "./Home.css";
import { Card } from "./Card";
import iplhome from "../../data/ipl/iplhome.json";
import cupsCard from "../../data/ipl/cupsCard.json";
import { getImageUrl } from "../../utils";
import { useState } from "react";
import homeImage1 from "../../assets/Navbar/homepage2.png";
import homeImage2 from "../../assets/Navbar/homepage1.png";

export const Home = () => {
  let homeData = JSON.parse(localStorage.getItem("homeData"));
  let cardData = JSON.parse(localStorage.getItem("cardData"));
  const [showDefaultHome, setShowDefaultHome] = useState(false);

  if (homeData === null && cardData === null) {
    localStorage.setItem("homeData", JSON.stringify(iplhome));
    localStorage.setItem("cardData", JSON.stringify(cupsCard));
    homeData = JSON.parse(localStorage.getItem("homeData"));
    cardData = JSON.parse(localStorage.getItem("cardData"));
    setShowDefaultHome(true);
  }
 

  if (homeData !== null) {
    var { icon, team, teamOffPage, noCup, homeVideo, homeAuido } = homeData;
  }

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

      {homeData === null && <h1>Hello</h1>}
      {showDefaultHome === false && (
        <>
          <audio src={getImageUrl(homeAuido)} autoPlay loop></audio>
          <video src={getImageUrl(homeVideo)} muted autoPlay loop></video>
        </>
      )}

      {showDefaultHome && (
        <div
          id="carouselExampleInterval"
          className="carousel slide homeCarousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={homeImage1}
                className="d-block homeimg1"
                alt="players with ipl trophy"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={homeImage2}
                className="d-block homeimg2"
                alt="ipl all teams 2024"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Indian Premier League</h5>
                <p>
                  IPL Starts from 22Mar and Ends 26May with 10 Teams.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="36000">
              <video
                className=" homeVideoCarousel"
                src={getImageUrl(homeVideo)}
                 controls
              ></video>
             
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
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
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

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
