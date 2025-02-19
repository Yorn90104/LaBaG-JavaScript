import React, { useEffect, useRef } from "react";
import Bgm from "../../assets/bgm.mp3";
import SuperMusic from "../../assets/SuperMusic.mp3";
import GreenMusic from "../../assets/GreenMusic.mp3";
import KachuMusic from "../../assets/KachuMusic.mp3";

const Musics = {
  Normal: Bgm,
  SuperHHH: SuperMusic,
  GreenWei: GreenMusic,
  PiKaChu: KachuMusic,
};

function MusicButton({ BgmRunning, setBgmRunning, NowMode}) {
  // 使用 useRef 來引用音樂播放器
  const AudioRef = useRef(new Audio(Musics[NowMode]));

  // 在音樂模式改變時，更新音樂來源
  useEffect(() => {
    AudioRef.current.src = Musics[NowMode];
    if (BgmRunning) {
      AudioRef.current.play(); // 如果音樂正在播放，則開始播放新音樂
    } else {
      AudioRef.current.pause(); // 否則暫停音樂
    }
  }, [NowMode, BgmRunning]); // 當 NowMode 或 BgmRunning 改變時重新載入音樂

  return (
    <button
      onClick={() => {
        setBgmRunning(!BgmRunning);
      }}
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "50px",
        height: "50px",
        fontSize: "20px",
        borderRadius: "5%",
        cursor: "pointer",
        border: "3px solid black",
        backgroundColor: BgmRunning ? "#00FF00" : "#F0F0F0",
      }}
    >
      <b>{BgmRunning ? "開" : "關"}</b>
    </button>
  );
}

export default MusicButton;
