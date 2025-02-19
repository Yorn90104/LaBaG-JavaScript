import { useState, useEffect } from "react";
import Game from "../../game/PlayLaBaG.js";
import BackButton from "./BackButton";
import BeginButton from "./BeginButton.jsx";
import Picture from "./Picture.jsx";
import InfoText from "./InfoText.jsx";
import Logo from "./Logo";

import BG from "../../assets/BG.png";
import SuperBG from "../../assets/SuperBG.png";
import GreenBG from "../../assets/GreenBG.png";
import KachuBG from "../../assets/KachuBG.png";

import Title from "../../assets/Title.png";
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png";

import QST from "../../assets/QST.jpg";
import SuperQST from "../../assets/SuperQST.png";
import GreenQST from "../../assets/GreenQST.png";
import KachuQST from "../../assets/KachuQST.png";

import Gss from "../../assets/Gss.jpg";
import Hhh from "../../assets/Hhh.jpg";
import Hentai from "../../assets/Hentai.jpg";
import Handsun from "../../assets/Handsun.jpg";
import Kachu from "../../assets/Kachu.jpg";
import Rrr from "../../assets/RRR.jpg";

import Ding from "../../assets/Ding.mp3";

function Sound(s){
  const audio = new Audio(s);
  audio.play();
}

const BGs = {
  Normal: BG,
  SuperHHH: SuperBG,
  GreenWei: GreenBG,
  PiKaChu: KachuBG,
};

const Titles = {
  Normal: Title,
  SuperHHH: SuperTitle,
  GreenWei: GreenTitle,
  PiKaChu: KachuTitle,
};

const QSTs = {
  Normal: QST,
  SuperHHH: SuperQST,
  GreenWei: GreenQST,
  PiKaChu: KachuQST,
};

const Pictures = {
  A: Gss,
  B: Hhh,
  C: Hentai,
  D: Handsun,
  E: Kachu,
  F: Rrr,
};

function GameScreen({ setScreen }) {
  const [NowMode, setNowMode] = useState("Normal");
  const [ButtonAble, setButtonAble] = useState(true);

  const [NowLP, setNowLP] = useState(QST);
  const [NowMP, setNowMP] = useState(QST);
  const [NowRP, setNowRP] = useState(QST);
  const setPs = [setNowLP, setNowMP, setNowRP];

  const [NowScore, setNowScore] = useState(Game.Score);
  const [NowTimes, setNowTimes] = useState(Game.Times - Game.Played);
  const [NowMarginScore, setNowMarginScore] = useState(Game.MarginScore);

  // **使用 useEffect 來更新背景**
  useEffect(() => {
    document.body.style.backgroundImage = `url(${BGs[NowMode]})`;
    return () => {
      document.body.style.backgroundImage = ""; // **元件卸載時清除背景**
    };
  }, [NowMode]); // **當 nowMode 改變時，執行 useEffect**

  function Begin() {
    setButtonAble(false);
    [setNowLP, setNowMP, setNowRP].forEach((setP) => setP(QST));
    Game.Logic();
    setNowMarginScore(0);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setPs[i](Pictures[Game.Ps[i].code]);
        console.log(`更新位置 ${i} 的圖片`);
        Sound(Ding);
      }, 500 * (i + 1));
    }

    setTimeout(() => {
      setNowMode(Game.NowMode());
      document.body.style.backgroundImage = `url(${BGs[Game.NowMode()]})`;
      setNowMarginScore(Game.MarginScore);
      setNowScore(Game.Score);
      setNowTimes(Game.Times - Game.Played);
    }, 3000);

    setTimeout(() => {
      if (!Game.GameRunning()) {
        setScreen("End");
      }
      setButtonAble(true);
    }, 3500);
  }

  return (
    <>
      <BackButton setScreen={setScreen} />
      <div style={{height: "100vh"}}>
        <Logo src={Titles[NowMode]} />
        <div className="Pictures">
          <Picture p={NowLP} />
          <Picture p={NowMP} />
          <Picture p={NowRP} />
        </div>
        <div className="InfoText-BeginButton">
          <InfoText
            NowScore={NowScore}
            NowTimes={NowTimes}
            MarginScore={NowMarginScore}
          />
          <BeginButton
            Begin={Begin}
            Able={ButtonAble}
            MarginScore={Game.MarginScore}
          />
        </div>
      </div>
    </>
  );
}

export default GameScreen;
