
/* eslint-disable react/prop-types */
import { PlayerCard } from "./PlayerCard";
import "./players.css";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import batIcon from '../../assets/Players/logo/batsman.png'
import allIcon from '../../assets/Players/logo/allrounder.png'
import bowlIcon from '../../assets/Players/logo/bowler.png'
import AllBatters from "../../data/batplayers.json"
import AllBowlers from "../../data/bowlplayers.json";
import AllAllRounders from "../../data/allRoundPlayers.json";

export const Players = () => {
  const [openList, setOpenList] = useState(false);
  const [batters, setBatters] = useState([]);
  const [allRounders, setAllRounders] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [bgColor, setBgColor] = useState("#a2d2ff"); // Default background color
  const [txtColor, setTxtColor] = useState("#000"); // Default text color

  useEffect(() => {
    const storedBatters = JSON.parse(localStorage.getItem("batters"));
    const storedAllRounders = JSON.parse(localStorage.getItem("allRounders"));
    const storedBowlers = JSON.parse(localStorage.getItem("bowlers"));

    if (!storedBatters && !storedAllRounders && !storedBowlers) {
      localStorage.setItem("batters", JSON.stringify(AllBatters));
      localStorage.setItem("allRounders", JSON.stringify(AllAllRounders));
      localStorage.setItem("bowlers", JSON.stringify(AllBowlers));
      setBatters(AllBatters);
      setAllRounders(AllAllRounders);
      setBowlers(AllBowlers);
    } else {
      setBatters(storedBatters);
      setAllRounders(storedAllRounders);
      setBowlers(storedBowlers);
    }

    const storedBgColor = localStorage.getItem("bgColor");
    const storedTxtColor = localStorage.getItem("txtColor");
    if (storedBgColor) setBgColor(storedBgColor);
    if (storedTxtColor) setTxtColor(storedTxtColor);
  }, []); // Run once on component mount

  return (
    <main className="playerContainer">
      <div className="container">
        <img
          src={getImageUrl(openList ? "Players/o-c-btn/close.png" : "Players/o-c-btn/open.png")}
          onClick={() => setOpenList(prevOpenList => !prevOpenList)}
          className="playerMenu"
          alt="Toggle Player List"
        />
        <ul
          style={{ backgroundColor: bgColor, color: txtColor }}
          className={`playersList ${openList ? "openList" : ""}`}
          onClick={() => setOpenList(prevOpenList => !prevOpenList)}
        >
          <li style={{ border: "1.5px solid #000", borderRadius: "5px" }}>
            <a href="#bat">BATTERS</a>
          </li>
          <li style={{ border: "1.5px solid #000", borderRadius: "5px" }}>
            <a href="#all">ALL-ROUNDERS</a>
          </li>
          <li style={{ border: "1.5px solid #000", borderRadius: "5px" }}>
            <a href="#bowl">BOWLERS</a>
          </li>
        </ul>

        <section id="bat">
          <h1 className="batter-title">BATTERS</h1>
          <div className="row batter">
            {batters.map(batter => (
              <PlayerCard key={batter.id} data={batter} typeIcon={batIcon} bgColor={bgColor} txtColor={txtColor}/>
            ))}
          </div>
        </section>

        <section id="all">
          <h1 className="allRounder-title">ALL-ROUNDERS</h1>
          <div className="row allRounder">
            {allRounders.map(allrounder => (
              <PlayerCard key={allrounder.id} data={allrounder} typeIcon={allIcon}  bgColor={bgColor} txtColor={txtColor}/>
            ))}
          </div>
        </section>

        <section id="bowl">
          <h1 className="bowler-title">BOWLERS</h1>
          <div className="row bowler">
            {bowlers.map(bowler => (
              <PlayerCard key={bowler.id} data={bowler} typeIcon={bowlIcon}  bgColor={bgColor} txtColor={txtColor}/>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
