import back from "../../assets/back.png"

function BackButton({ setScreen , setBgmRunning}) {
  return (
    <img
      src={back}
      alt="返回首頁"
      onClick={() => {
        setBgmRunning(false);
        console.log("切換至 Home 畫面");
        setScreen("Home");
      }}
      style={{
        border: "3px solid white",
        position: "absolute",
        top: 0 /* 距離視窗頂部 0 */,
        left: 0 /* 距離視窗左邊 0 */,
        width: "30px",
        height: "30px",
        borderRadius: "5px",
      }}
    />
  );
}

export default BackButton;
