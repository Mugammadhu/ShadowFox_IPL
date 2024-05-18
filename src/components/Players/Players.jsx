
import  { useState, useEffect, useMemo } from "react";
import { PlayerCard } from "./PlayerCard";
import "./players.css";
import { getImageUrl } from "../../utils";
import batIcon from "../../assets/Players/logo/batsman.png";
import allIcon from "../../assets/Players/logo/allrounder.png";
import bowlIcon from "../../assets/Players/logo/bowler.png";
import AllBatters from "../../data/batplayers.json";
import AllBowlers from "../../data/bowlplayers.json";
import AllAllRounders from "../../data/allRoundPlayers.json";

export const Players = () => {
  const [openList, setOpenList] = useState(false);
  const [bgColor, setBgColor] = useState("#a2d2ff"); // Default background color
  const [txtColor, setTxtColor] = useState("#000"); // Default text color

  useEffect(() => {
    const storedBgColor = localStorage.getItem("bgColor");
    const storedTxtColor = localStorage.getItem("txtColor");
    if (storedBgColor) setBgColor(storedBgColor);
    if (storedTxtColor) setTxtColor(storedTxtColor);
  }, []);

  const batters = useMemo(() => {
    const storedBatters = JSON.parse(localStorage.getItem("batters"));
    return storedBatters ? storedBatters : AllBatters;
  }, []);

  const allRounders = useMemo(() => {
    const storedAllRounders = JSON.parse(localStorage.getItem("allRounders"));
    return storedAllRounders ? storedAllRounders : AllAllRounders;
  }, []);

  const bowlers = useMemo(() => {
    const storedBowlers = JSON.parse(localStorage.getItem("bowlers"));
    return storedBowlers ? storedBowlers : AllBowlers;
  }, []);

  return (
    <main className="playerContainer">
      <div className="container">
        <img
          src={getImageUrl(
            openList ? "Players/o-c-btn/close.png" : "Players/o-c-btn/open.png"
          )}
          onClick={() => setOpenList((prevOpenList) => !prevOpenList)}
          className="playerMenu"
          alt="Toggle Player List"
        />
        <ul
          style={{ backgroundColor: bgColor}}
          className={`playersList ${openList ? "openList" : ""}`}
          onClick={() => setOpenList((prevOpenList) => !prevOpenList)}
        >
          <li style={{ border:`1.5px solid ${txtColor}`, borderRadius: "5px"}}>
            <a href="#bat" style={{color: txtColor }}>BATTERS</a>
          </li>
          <li style={{ border:`1.5px solid ${txtColor}`, borderRadius: "5px" }}>
            <a href="#all" style={{color: txtColor }}>ALL-ROUNDERS</a>
          </li>
          <li style={{ border: `1.5px solid ${txtColor}`, borderRadius: "5px" }}>
            <a href="#bowl" style={{color: txtColor }}>BOWLERS</a>
          </li>
        </ul>

        <section id="bat">
          <h1 className="batter-title">BATTERS</h1>
          <div className="row batter">
            {batters.map((batter) => (
              <PlayerCard
                key={batter.id}
                data={batter}
                typeIcon={batIcon}
                bgColor={bgColor}
                txtColor={txtColor}
              />
            ))}
          </div>
        </section>

        <section id="all">
          <h1 className="allRounder-title">ALL-ROUNDERS</h1>
          <div className="row allRounder">
            {allRounders.map((allrounder) => (
              <PlayerCard
                key={allrounder.id}
                data={allrounder}
                typeIcon={allIcon}
                bgColor={bgColor}
                txtColor={txtColor}
              />
            ))}
          </div>
        </section>

        <section id="bowl">
          <h1 className="bowler-title">BOWLERS</h1>
          <div className="row bowler">
            {bowlers.map((bowler) => (
              <PlayerCard
                key={bowler.id}
                data={bowler}
                typeIcon={bowlIcon}
                bgColor={bgColor}
                txtColor={txtColor}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
