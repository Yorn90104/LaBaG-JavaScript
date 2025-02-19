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
  const [ButtonAble, setButtonAble] = useState(true);
  const [NowMode, setNowMode] = useState("Normal");
  const [NowPictures, setNowPictures] = useState(Array(3).fill(QST));
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
    setNowPictures(Array.from({ length: 3 }, () => QSTs[NowMode]));
    Game.Logic();
    setNowMarginScore(0);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setNowPictures((prevPictures) => {
          const newPictures = [...prevPictures];
          console.log(`更新位置 ${i} 的圖片`);
          newPictures[i] = Pictures[Game.Ps[i].code];
          return newPictures;
        });
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
      <div style={{ padding: "20px" }}>
        <Logo src={Titles[NowMode]} />
        <div className="Pictures">
          <Picture p={NowPictures[0]} />
          <Picture p={NowPictures[1]} />
          <Picture p={NowPictures[2]} />
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
