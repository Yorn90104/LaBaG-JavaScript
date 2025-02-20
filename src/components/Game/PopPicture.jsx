import SuperPOP from "../../assets/SuperPOP.png";
import GreenPOP from "../../assets/GreenPOP.png";
import KachuPOP from "../../assets/KachuPOP.png";

const POPs = {
  SuperHHH: SuperPOP,
  GreenWei: GreenPOP,
  PiKaChu: KachuPOP,
};

function PopPicture({ NowMode, setNowPop }) {
  return (
    <>
      <img
        onClick={() => {
          setNowPop(false);
        }}
        src={POPs[NowMode]}
        style={{
          height: "100vh",
          width: "auto",
          objectFit: "contain", /* 保持完整顯示 */
        }}
      />
    </>
  );
}

export default PopPicture;
