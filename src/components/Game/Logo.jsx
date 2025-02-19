import Title from "../../assets/Title.png";
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png";

const Titles = {
  Normal: Title,
  SuperHHH: SuperTitle,
  GreenWei: GreenTitle,
  PiKaChu: KachuTitle,
};

function Logo({ NowMode }) {
  return (
    <img
      src={Titles[NowMode]}
      alt="Logo"
      style={{
        marginTop: "25px",
        width: "450px",
        height: "243px",
      }}
    />
  );
}
export default Logo;
