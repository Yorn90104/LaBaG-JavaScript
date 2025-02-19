import { useEffect, useRef } from "react";
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

function MusicButton({ BgmRunning, setBgmRunning, NowMode }) {
  const AudioRef = useRef(new Audio(Musics[NowMode]));
  AudioRef.current.loop = true; // 讓音樂循環播放

  useEffect(() => {
    if (AudioRef.current) {
      AudioRef.current.pause();
      AudioRef.current.src = Musics[NowMode];
      AudioRef.current.load(); // 確保新的音樂可以正常載入
    }

    if (BgmRunning) {
      const playPromise = AudioRef.current.play();
      console.log(`當前播放音樂: ${NowMode}`);
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("音樂播放錯誤:", error);
        });
      }
    }
    // useEffect 回傳的函式 會在組件卸載或 NowMode/BgmRunning 變化時執行，以清理副作用。
    return () => {
      if (AudioRef.current) {
        AudioRef.current.pause();
        console.log("停止舊音樂");
      }
    };
  }, [NowMode, BgmRunning]);

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
