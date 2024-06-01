import { useParams } from "react-router-dom";
import player from "../../data/player.json";
import "./player.css";
import { PlayerCard } from "../Players/PlayerCard";
import { useState, useEffect, useMemo } from "react";
import { getImageUrl } from "../../utils";
import batIcon from "../../assets/Players/logo/batsman.png";
import allIcon from "../../assets/Players/logo/allrounder.png";
import bowlIcon from "../../assets/Players/logo/bowler.png";
import AllBatters from "../../data/batplayers.json";
import AllBowlers from "../../data/bowlplayers.json";
import AllAllRounders from "../../data/allRoundPlayers.json";
import { TableCard } from "./TableCard";
import { BowlTable } from "./BowlTable";

export const Player = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const playerId = Number(id);
  const data = player.find((player) => player.id === playerId);
  const {
    name,
    imgSrc,
    nationality,
    iplDebut,
    Specialization,
    dob,
    matches,
    about,
    batField,
    bowl,
  } = data;

  const [bgColor, setBgColor] = useState("#de3163");
  const [txtColor, setTxtColor] = useState("#01204E");

  useEffect(() => {
    const storedBgColor = localStorage.getItem("bgColor");
    const storedTxtColor = localStorage.getItem("txtColor");
    if (storedBgColor) setBgColor(storedBgColor);
    if (storedTxtColor) setTxtColor(storedTxtColor);
  }, []);

  let batters = useMemo(() => {
    const storedBatters = JSON.parse(localStorage.getItem("batters"));
    return storedBatters ? storedBatters : AllBatters;
  }, []);

  let allRounders = useMemo(() => {
    const storedAllRounders = JSON.parse(localStorage.getItem("allRounders"));
    return storedAllRounders ? storedAllRounders : AllAllRounders;
  }, []);

  let bowlers = useMemo(() => {
    const storedBowlers = JSON.parse(localStorage.getItem("bowlers"));
    return storedBowlers ? storedBowlers : AllBowlers;
  }, []);

  const filterdBatters = batters.filter((batter) => batter.id !== playerId);
  const filterdBowlers = bowlers.filter((bowler) => bowler.id !== playerId);
  const filterdAllRounders = allRounders.filter(
    (allrounder) => allrounder.id !== playerId
  );

  return (
    <main className="playerContainers">
      <div
        className="playerContainer__head"
        style={{ backgroundColor: bgColor }}
      >
        <div className="playerContainer__left">
          <div className="playerContainer__left--img"></div>
          <img src={getImageUrl(imgSrc)} alt={name} />

          <h1 className="playerContainer__left--name">{name}</h1>
          <p className="playerContainer__left--country">{nationality}</p>
        </div>
        <div className="playerContainer__right">
          <h2 className="playerContainer__right--title">Player Overview</h2>
          <table className="playerTable">
            <tbody>
              <tr>
                <td className="playerTable__td" style={{ color: txtColor }}>
                  <h5>{iplDebut}</h5>
                  <p>IPL Debut</p>
                </td>
                <td className="playerTable__td" style={{ color: txtColor }}>
                  <h5>{Specialization}</h5>
                  <p>Specialization</p>
                </td>
              </tr>
              <tr>
                <td className="playerTable__td" style={{ color: txtColor }}>
                  <h5>{dob}</h5>
                  <p>Date of Birth</p>
                </td>
                <td className="playerTable__td" style={{ color: txtColor }}>
                  <h5>{matches}</h5>
                  <p>Matches</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="playerAbout">
        <h2 className="playerAbout__title">About</h2>
        <p className="playerAbout__description">{about}</p>
      </div>
      <div className="playerStats mb-2">
        {batField && (
          <div className="playerStats__batField">
            <h2 className="playerStats__batField--title">
              Batting & Fielding Stats
            </h2>
            <div className="table-responsive">
              <table className="table table-borderless batTable mx-auto table-hover">
                <thead className="batHead text-light border-bottom">
                  <th>YEAR</th>
                  <th>MAT</th>
                  <th>NO</th>
                  <th className="run">RUNS</th>
                  <th>HS</th>
                  <th>AVG</th>
                  <th>BF</th>
                  <th>SR</th>
                  <th>100</th>
                  <th>50</th>
                  <th>4S</th>
                  <th>6S</th>
                  <th>CT</th>
                  <th>ST</th>
                </thead>
                <tbody className="table-light bowltd">
                  {batField.map((batfil) => (
                    <TableCard batfil={batfil} key={batfil.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {bowl && (
          <div className="playerStats__bowl">
            <h2 className="playerStats__bowl--title">Bowling</h2>
            <div className="table-responsive">
              <table className="table table-borderless batTable mx-auto table-hover">
                <thead className="batHead text-light border-bottom">
                  <th>YEAR</th>
                  <th>MAT</th>
                  <th>BALLS</th>
                  <th className="run">RUNS</th>
                  <th>WKTS</th>
                  <th>BBM</th>
                  <th>AVE</th>
                  <th>ECON</th>
                  <th>SR</th>
                  <th>4W</th>
                  <th>5W</th>
                </thead>
                <tbody className="table-light bowltd">
                  {bowl.map((bowl) => (
                    <BowlTable bowl={bowl} key={bowl.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div className="restSquad" style={{ backgroundColor: txtColor }}>
        <h2 className="restSquad__title" style={{ color: "#fff" }}>
          Rest Of the Squad
        </h2>
        <section id="bat">
          <h1 className="batter-title" style={{ color: bgColor }}>
            BATTERS
          </h1>
          <div className="row batter">
            {filterdBatters.map((batter) => (
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
          <h1 className="allRounder-title" style={{ color: bgColor }}>
            ALL-ROUNDERS
          </h1>
          <div className="row allRounder">
            {filterdAllRounders.map((allrounder) => (
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
          <h1 className="bowler-title" style={{ color: bgColor }}>
            BOWLERS
          </h1>
          <div className="row bowler">
            {filterdBowlers.map((bowler) => (
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
