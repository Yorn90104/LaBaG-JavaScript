import InfoText from "./InfoText";
import AgainButton from "./AgainButton";
import ScoresPicture from "./ScoresPicture";

function EndScreen({ setScreen }) {
  return (
    <div className="EndScreen">
      <InfoText />
      <AgainButton setScreen={setScreen} />
      <ScoresPicture />
    </div>
  );
}

export default EndScreen;
