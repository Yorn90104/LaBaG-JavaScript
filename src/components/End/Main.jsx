import InfoText from "./InfoText";
import AgainButton from "./AgainButton";

function EndScreen({ setScreen }) {
  return (
    <div className="EndScreen">
      <InfoText />
      <AgainButton setScreen={setScreen} />
    </div>
  );
}

export default EndScreen;
