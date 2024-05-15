/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Grounds } from "./components/Ground/Grounds";

import { About } from "./components/About/About";
import { Players } from "./components/Players/Players";
import { Teams } from "./components/Teams/Teams";
import { Player } from "./components/Player/Player";
import { Team } from "./components/Team/Team";
import { Route, Routes } from "react-router-dom";
import { Points } from "./components/Points/Points";
import { Ground } from "./components/Ground/Ground";
import { Foot } from "./components/Foot/Foot";


function App() {
  useEffect(() => {
    localStorage.setItem("homeData", null);
    localStorage.setItem("cardData", null);
    localStorage.setItem("homeSquad", "true");
    localStorage.setItem("baseAbout", null);
    localStorage.setItem("About", null);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams">
          <Route index element={<Teams />} />
          <Route path=":id" element={<Team />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/players">
          <Route index element={<Players />} />
          <Route path=":id" element={<Player />} />
        </Route>
        <Route path="/table" element={<Points />} />
        <Route path="/grounds">
          <Route index element={<Grounds />} />
          <Route path=":id" element={<Ground />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Foot/>
    </>
  );
}

export default App;
