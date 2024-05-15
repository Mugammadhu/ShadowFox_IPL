/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

//CardData
import cskCardData from "../../data/cskplayer/card.json";
const dcCardData = [];
import gtCardData from "../../data/gtplayer/card.json";
import kkrCardData from "../../data/kkrplayer/card.json";
const lsgCardData = [];
import miCardData from "../../data/miplayer/card.json";
const pkCardData = [];
import rrCardData from "../../data/rrplayer/card.json";
const rcbCardData = [];
import srhCardData from "../../data/srhplayer/card.json";

//homeData
import cskHomeData from "../../data/cskplayer/cskhome.json";
import dcHomeData from "../../data/dcplayer/dchome.json";
import gtHomeData from "../../data/gtplayer/gthome.json";
import kkrHomeData from "../../data/kkrplayer/kkrhome.json";
import lsgHomeData from "../../data/lsgplayer/lsghome.json";
import miHomeData from "../../data//miplayer/mihome.json";
import pkHomeData from "../../data/pkplayer/pkhome.json";
import rcbHomeData from "../../data/rcbplayer/rcbhome.json";
import rrHomeData from "../../data/rrplayer/rrhome.json";
import srhHomeData from "../../data/srhplayer/srhhome.json";

//batters
import cskBatters from "../../data/cskplayer/batters.json";
import dcBatters from "../../data/dcplayer/batters.json";
import gtBatters from "../../data/gtplayer/batters.json";
import kkrBatters from "../../data/kkrplayer/batters.json";
import lsgBatters from "../../data/lsgplayer/batters.json";
import miBatters from "../../data/miplayer/batters.json";
import pkBatters from "../../data/pkplayer/batters.json";
import rrBatters from "../../data/rrplayer/batters.json";
import rcbBatters from "../../data/rcbplayer/batters.json";
import srhBatters from "../../data/srhplayer/batters.json";

//allRounders
import cskAllRounders from "../../data/cskplayer/allrounder.json";
import dcAllRounders from "../../data/dcplayer/allrounders.json";
import gtAllRounders from "../../data/gtplayer/allrounders.json";
import kkrAllRounders from "../../data/kkrplayer/allrounders.json";
import lsgAllRounders from "../../data/lsgplayer/allrounders.json";
import miAllRounders from "../../data/miplayer/allrounders.json";
import pkAllRounders from "../../data/pkplayer/allrounders.json";
import rrAllRounders from "../../data/rrplayer/allrounders.json";
import rcbAllRounders from "../../data/rcbplayer/allrounders.json";
import srhAllRounders from "../../data/srhplayer/allrounders.json";

//bowlers
import cskBowlers from "../../data/cskplayer/bowlers.json";
import dcBowlers from "../../data/dcplayer/bowlers.json";
import gtBowlers from "../../data/gtplayer/bowlers.json";
import kkrBowlers from "../../data/kkrplayer/bowlers.json";
import lsgBowlers from "../../data/lsgplayer/bowlers.json";
import miBowlers from "../../data/miplayer/bowlers.json";
import pkBowlers from "../../data/pkplayer/bowlers.json";
import rrBowlers from "../../data/rrplayer/bowlers.json";
import rcbBowlers from "../../data/rcbplayer/bowlers.json";
import srhBowlers from "../../data/srhplayer/bowlers.json";

//baseabt
import cskBaseAbt from "../../data/cskplayer/cskbaseabt.json"
import dcBaseAbt from "../../data/dcplayer/dcbaseabt.json"
import gtBaseAbt from "../../data/gtplayer/gtbaseabt.json"
import kkrBaseAbt from "../../data/kkrplayer/kkrbaseabt.json"
import lsgBaseAbt from "../../data/lsgplayer/lsgbaseabt.json"
import miBaseAbt from "../../data/miplayer/mibaseabt.json"
import pkBaseAbt from "../../data/pkplayer/pkbaseabt.json"
import rcbBaseAbt from "../../data/rcbplayer/rcbbaseabt.json"
import rrBaseAbt from "../../data/rrplayer/rrbaseabt.json"
import srhBaseAbt from "../../data/srhplayer/srhbaseabt.json"

//about
import cskAbt from "../../data/cskplayer/cskabt.json"
import dcAbt from "../../data/dcplayer/dcabt.json"
import gtAbt from "../../data/gtplayer/gtabt.json"
import kkrAbt from "../../data/kkrplayer/kkrabt.json"
import lsgAbt from "../../data/lsgplayer/lsgabt.json"
import miAbt from "../../data/miplayer/miabt.json"
import pkAbt from "../../data/pkplayer/pkabt.json"
import rcbAbt from "../../data/rcbplayer/rcbabt.json"
import rrAbt from "../../data/rrplayer/rrabt.json"
import srhAbt from "../../data/srhplayer/srhabt.json"

export const Team = () => {


  

  const { id } = useParams();
  const teamId = Number(id);

  // Function to set localStorage data
  const setLocalStorageData = (
    homeData,
    cardData,
    batterData,
    allRounderData,
    bowlerData,
    bgColor,
    txtColor,
    homeSquad,
    baseAbout,
    About
  ) => {
    localStorage.setItem("homeData", JSON.stringify(homeData));
    localStorage.setItem("cardData", JSON.stringify(cardData));
    localStorage.setItem("batters", JSON.stringify(batterData));
    localStorage.setItem("allRounders", JSON.stringify(allRounderData));
    localStorage.setItem("bowlers", JSON.stringify(bowlerData));
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("txtColor", txtColor);
    localStorage.setItem("homeSquad", homeSquad);
    localStorage.setItem("baseAbout",JSON.stringify(baseAbout));
    localStorage.setItem("About",JSON.stringify(About))
  };

 
  useEffect(() => {
    switch (teamId) {
      case 1:
        setLocalStorageData(
          cskHomeData,
          cskCardData,
          cskBatters,
          cskAllRounders,
          cskBowlers,
          "#f9cd05",
          "#000",
          "false",
          cskBaseAbt,
          cskAbt
        );
        break;
      case 2:
        setLocalStorageData(
          dcHomeData,
          dcCardData,
          dcBatters,
          dcAllRounders,
          dcBowlers,
          "#2561ae",
          "#FAAD1B",
          "false",
          dcBaseAbt,
          dcAbt
        );
        break;
      case 3:
        setLocalStorageData(
          gtHomeData,
          gtCardData,
          gtBatters,
          gtAllRounders,
          gtBowlers,
          "#1B2133",
          "#DBBE6E",
          "false",
          gtBaseAbt,
          gtAbt
        );
        break;
      case 4:
        setLocalStorageData(
          kkrHomeData,
          kkrCardData,
          kkrBatters,
          kkrAllRounders,
          kkrBowlers,
          "#3A225D",
          " #F7D54E",
          "false",
          kkrBaseAbt,
          kkrAbt
        );
        break;
      case 5:
        setLocalStorageData(
          lsgHomeData,
          lsgCardData,
          lsgBatters,
          lsgAllRounders,
          lsgBowlers,
          "#0057E2",
          "#FECC00",
          "false",
          lsgBaseAbt,
          lsgAbt
        );
        break;
      case 6:
        setLocalStorageData(
          miHomeData,
          miCardData,
          miBatters,
          miAllRounders,
          miBowlers,
          "#004B8D",
          "#D1AB3E",
          "false",
          miBaseAbt,
          miAbt
        );
        break;
      case 7:
        setLocalStorageData(
          pkHomeData,
          pkCardData,
          pkBatters,
          pkAllRounders,
          pkBowlers,
          "#DD1F2D",
          "#F2D1A0",
          "false",
          pkBaseAbt,
          pkAbt
        );
        break;
      case 8:
        setLocalStorageData(
          rrHomeData,
          rrCardData,
          rrBatters,
          rrAllRounders,
          rrBowlers,
          "#e73895",
          "#074EA2",
          "false",
          rrBaseAbt,
          rrAbt
        );
        break;
      case 9:
        setLocalStorageData(
          rcbHomeData,
          rcbCardData,
          rcbBatters,
          rcbAllRounders,
          rcbBowlers,
          "#E63329",
          "#041DC9",
          "false",
          rcbBaseAbt,
          rcbAbt
        );
        break;
      case 10:
        setLocalStorageData(
          srhHomeData,
          srhCardData,
          srhBatters,
          srhAllRounders,
          srhBowlers,
          "#EE7429",
          "#000",
          "false",
          srhBaseAbt,
          srhAbt
        );
        break;
    }
  }, [teamId]);

  return (
    <>
      <Navigate to="/" />
     
    </>
  );
};
