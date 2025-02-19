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
import SuperQST from "../../assets/SuperQST.png";
import GreenQST from "../../assets/GreenQST.png";
import KachuQST from "../../assets/KachuQST.png";

import Gss from "../../assets/Gss.jpg";
import Hhh from "../../assets/Hhh.jpg";
import Hentai from "../../assets/Hentai.jpg";
import Handsun from "../../assets/Handsun.jpg";
import Kachu from "../../assets/Kachu.jpg";
import Rrr from "../../assets/RRR.jpg";

function GameScreen({ setScreen }) {
  const [ButtonAble, setButtonAble] = useState(true);
  const [NowMode, setNowMode] = useState("Normal");
  const [NowPictures, setNowPictures] = useState(Array(3).fill(QST));
  const [NowScore, setNowScore] = useState(Game.Score);
  const [NowTimes, setNowTimes] = useState(Game.Times - Game.Played);

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

  function Begin() {
    setButtonAble(false);
    setNowPictures(Array.from({ length: 3 }, () => QSTs[NowMode]));
    Game.Logic();

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        setNowPictures((NowPictures) => {
          const newPictures = [...NowPictures];
          console.log(`更新位置 ${i} 的圖片`);
          newPictures[i] = Pictures[Game.Ps[i].code];
          return newPictures;
        });
      }, 500 * (i + 1));
    }
    setTimeout(() => {
      setNowMode(Game.NowMode());
      setNowScore(Game.Score);
      setNowTimes(Game.Times - Game.Played);
    }, 3000);
    setTimeout(() => {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            lineHeight: "0",
          }}
        >
          <p style={{ color: "white", fontSize: "16pt" }}>
            <b>目前分數: {NowScore}</b>
          </p>
          <p style={{ color: "white", fontSize: "16pt" }}>
            <b>剩餘次數: {NowTimes}</b>
          </p>
          <BeginButton Begin={Begin} Able={ButtonAble} />
        </div>
      </div>
    </>
  );
}

export default GameScreen;
