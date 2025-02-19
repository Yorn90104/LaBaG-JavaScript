import Game from "../../game/PlayLaBaG";

function HomeScreen({ setScreen }) {
  const IntoGame = () => {
    Game.Reset();
    setScreen("Game");
    console.log("切換至 Game 畫面");
  };

  return (
    <>
      <img
        src="/SuperCircle.png"
        alt="SuperCircle"
        onClick={() => {
          IntoGame();
        }}
      />
      <h1
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "white",
        }}
      >
        請點擊上方圖片進入遊戲
      </h1>
    </>
  );
}

export default HomeScreen;
