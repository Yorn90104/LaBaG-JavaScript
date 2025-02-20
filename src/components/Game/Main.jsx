import { useState, useEffect } from "react";
import Game from "../../game/PlayLaBaG.js";
import BackButton from "./BackButton";
import BeginButton from "./BeginButton.jsx";
import Picture from "./Picture.jsx";
import InfoText from "./InfoText.jsx";
import Logo from "./Logo";
import MusicButton from "./MusicButton.jsx";
import PopPicture from "./PopPicture.jsx";

import BG from "../../assets/BG.png";
import SuperBG from "../../assets/SuperBG.png";
import GreenBG from "../../assets/GreenBG.png";
import KachuBG from "../../assets/KachuBG.png";

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

import superhhh from "../../assets/super_hhh.jpg";
import greenwei from "../../assets/green_wei.jpg";
import GreenLeft from "../../assets/GreenLeft.jpg";
import GreenMid from "../../assets/GreenMid.jpg";
import GreenRight from "../../assets/GreenRight.jpg";
import pikachu from "../../assets/pikachu.jpg";

import Ding from "../../assets/Ding.mp3";
import SuperUP from "../../assets/SuperUP.mp3";
import GreenUP from "../../assets/GreenUP.mp3";

function Sound(s) {
  const audio = new Audio(s);
  audio.play();
}

const BGs = {
  Normal: BG,
  SuperHHH: SuperBG,
  GreenWei: GreenBG,
  PiKaChu: KachuBG,
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
  const [BgmRunning, setBgmRunning] = useState(true);

  const [NowLP, setNowLP] = useState(QST);
  const [NowMP, setNowMP] = useState(QST);
  const [NowRP, setNowRP] = useState(QST);
  const setPs = [setNowLP, setNowMP, setNowRP];

  const [NowScore, setNowScore] = useState(Game.Score);
  const [NowTimes, setNowTimes] = useState(Game.Times - Game.Played);
  const [NowMarginScore, setNowMarginScore] = useState(Game.MarginScore);
  const [NowModeTimes, setNowModeTimes] = useState(0);
  const [NowPOP, setNowPoP] = useState(false);

  // **使用 useEffect 來更新背景**
  useEffect(() => {
    document.body.style.backgroundImage = `url(${BGs[NowMode]})`;
    return () => {
      document.body.style.backgroundImage = ""; // **元件卸載時清除背景**
    };
  }, [NowMode]); // **當 nowMode 改變時，執行 useEffect**

  function Begin() {
    const reset_qst_and_marginscore = () => {
      [setNowLP, setNowMP, setNowRP].forEach((setP) =>
        setP(QSTs[Game.NowMode()])
      );
      setNowMarginScore(0);
    };
    const change_picture_per500ms = () => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          setPs[i](Pictures[Game.Ps[i].code]);
          console.log(`更新位置 ${i} 的圖片`);
          Sound(Ding);
        }, 500 * (i + 1));
      }
    };
    const mode_picture_and_sound = () => {
      const mode = Game.NowMode();
      switch (mode) {
        case "Normal":
          break;
        case "SuperHHH":
          for (let i = 0; i < 3; i++) {
            if (Game.Ps[i].code == "B") {
              setPs[i](superhhh);
            }
          }
          Sound(SuperUP);
          break;
        case "GreenWei":
          if (Game.Ps.every((p) => p.code === "A")) {
            setNowLP(GreenLeft);
            setNowMP(GreenMid);
            setNowRP(GreenRight);
          } else if (Game.Ps.some((p) => p.code === "A")) {
            for (let i = 0; i < 3; i++) {
              if (Game.Ps[i].code == "A") {
                setPs[i](greenwei);
              }
            }
          } else {
            setPs.forEach((setP) => {
              setP(greenwei);
            });
          }
          Sound(GreenUP);
          break;
        case "PiKaChu":
          for (let i = 0; i < 3; i++) {
            if (Game.Ps[i].code == "E") {
              setPs[i](pikachu);
            }
          }
          break;
      }
    };
    const info_text = () => {
      setNowMarginScore(Game.MarginScore);
      setNowScore(Game.Score);
      setNowTimes(Game.Times - Game.Played);
      const Mode = Game.NowMode()
      switch(Mode){
        case "SuperHHH":
          setNowModeTimes(Game.SuperTimes);
          break;
        case "GreenWei":
          setNowModeTimes(Game.GreenTimes);
          break;
        case "PiKaChu":
          setNowModeTimes(Game.KachuTimes);
          break;
      }
    };

    setButtonAble(false);
    reset_qst_and_marginscore();
    Game.Logic();
    change_picture_per500ms();

    setTimeout(() => {
      if (Game.NowMode() !== NowMode) {
        setNowMode(Game.NowMode());
        document.body.style.backgroundImage = `url(${BGs[NowMode]})`;
      }
      info_text();
      if (Game.ModeToScreen) {
        mode_picture_and_sound();
      }
    }, 3000);

    setTimeout(() => {
      if (!Game.GameRunning()) {
        setBgmRunning(false);
        setScreen("End");
      }
      if (Game.NowMode() !== "Normal" && Game.ModeToScreen) {
        setNowPoP(true);
      }
      setButtonAble(true);
    }, 3500);
  }

  return (
    <>
      <BackButton setScreen={setScreen} setBgmRunning={setBgmRunning} />
      {NowPOP ? (
        <PopPicture NowMode={NowMode} setNowPoP={setNowPoP} />
      ) : (
        <>
          <Logo NowMode={NowMode} />
          <div className="Pictures">
            <Picture p={NowLP} />
            <Picture p={NowMP} />
            <Picture p={NowRP} />
          </div>
          <div className="InfoText">
            <InfoText
              Score={NowScore}
              Times={NowTimes}
              MarginScore={NowMarginScore}
              NowMode={NowMode}
              ModeTimes={NowModeTimes}
            />
          </div>
            <BeginButton Begin={Begin} Able={ButtonAble} />
        </>
      )}

      <MusicButton
        BgmRunning={BgmRunning}
        setBgmRunning={setBgmRunning}
        NowMode={NowMode}
      />
    </>
  );
}

export default GameScreen;
