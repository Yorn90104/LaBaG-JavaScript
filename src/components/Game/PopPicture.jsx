import SuperPOP from "../../assets/SuperPOP.jpg";
import GreenPOP from "../../assets/GreenPOP.jpg";
import KachuPOP from "../../assets/KachuPOP.jpg";

const POPs = {
  SuperHHH: SuperPOP,
  GreenWei: GreenPOP,
  PiKaChu: KachuPOP,
};

function PopPicture({ NowMode, setNowPoP }) {
  return (
    <>
      <img
        onClick={() => {
          setNowPoP(false);
        }}
        src={POPs[NowMode]}
        style={{
          height: "100vh",
          width: "auto",
          objectFit: "contain", /* 保持完整顯示 */
          cursor: "pointer"
        }}
      />
    </>
  );
}

export default PopPicture;
