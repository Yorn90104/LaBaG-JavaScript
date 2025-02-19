import { useState } from "react";
import Game from "../../game/PlayLaBaG.js";
import BackButton from "./BackButton";
import BeginButton from "./BeginButton.jsx";
import Logo from "./Logo";
import Title from "../../assets/Title.png";
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png";
import Picture from "./Picture.jsx";
import QST from "../../assets/QST.jpg";

function GameScreen({ setScreen }) {
  const [NowMode, setNowMode] = useState("Normal");
  const [NowScore, setNowScore] = useState(Game.Score);
  const [NowTimes, setNowTimes] = useState(Game.Times - Game.Played);

  const Titles = {
    Normal: Title,
    SuperHHH: SuperTitle,
    GreenWei: GreenTitle,
    PiKaChu: KachuTitle,
  };

  function Begin() {
    Game.Logic();
    setNowScore(Game.Score);
    setNowTimes(Game.Times - Game.Played);
  }

  return (
    <>
      <BackButton setScreen={setScreen} />
      <div style={{ padding: "20px" }}>
        <Logo src={Titles[NowMode]} />
        <div className="Pictures">
          <Picture p={QST} />
          <Picture p={QST} />
          <Picture p={QST} />
        </div>
        <div
          style={{
            display: "flex", 
            flexDirection: "column",  
            alignItems: "center",  
            marginTop: "20px",
            lineHeight: "0",
          }}
        >
          <p style={{color: "white", fontSize: "16pt"}}><b>目前分數: {NowScore}</b></p>
          <p style={{color: "white", fontSize: "16pt"}}><b>剩餘次數: {NowTimes}</b></p>
          <BeginButton Begin={Begin} />
        </div>
      </div>
    </>
  );
}

export default GameScreen;
