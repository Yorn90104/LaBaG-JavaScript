import Game from "../../game/PlayLaBaG";
import SuperCircle from "../../assets/SuperCircle.png"

function HomeScreen({ setScreen }) {
  const IntoGame = () => {
    Game.Reset();
    setScreen("Game");
    console.log("切換至 Game 畫面");
  };

  return (
    <div className="Screen">
      <img
        src= {SuperCircle}
        alt="SuperCircle"
        onClick={() => {
          IntoGame();
        }}
      />
      <p
        style={{
          textAlign: "center",
          fontSize: "25px",
          color: "white",
        }}
      >
        <b>請點擊上方圖片進入遊戲</b>
      </p>
    </div>
  );
}

export default HomeScreen;
