import Game from "../../game/PlayLaBaG";
import AgainButton from "./AgainButton";

function EndScreen({ setScreen }) {
  return (
    <div className="EndScreen">
      <p
        style={{
          fontSize: "40px",
          color: "red",
          textShadow:
            "-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white",
        }}
      >
        <b>遊戲結束！</b>
      </p>
      <p style={{ fontSize: "25px", color: "white" }}>
        <b>{`最終分數為: ${Game.Score}`}</b>
      </p>
      <AgainButton setScreen={setScreen} />
    </div>
  );
}

export default EndScreen;
