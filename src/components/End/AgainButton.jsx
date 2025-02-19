import Game from "../../game/PlayLaBaG";

function AgainButton({ setScreen }) {
  return (
    <img
      src="/AgainPIC.jpg"
      alt="再玩一次"
      onClick={() => {
        Game.Reset();
        console.log("切換至 Game 畫面");
        setScreen("Game");
      }}
      style={{
        width: "150px",
        height: "50px",
        cursor: "pointer",
      }}
    />
  );
}

export default AgainButton;
