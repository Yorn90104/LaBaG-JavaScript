import InfoText from "./InfoText";
import AgainButton from "./AgainButton";
import ScorePicture from "./ScorePicture";

function EndScreen({ setScreen }) {
  return (
    <div className="EndScreen">
      <InfoText />
      <AgainButton setScreen={setScreen} />
      <ScorePicture />
    </div>
  );
}

export default EndScreen;
