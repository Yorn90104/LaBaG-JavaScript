import back from "../../assets/back.jpg"

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
        position: "fixed",
        top: "10px" /* 距離視窗頂部 */,
        left: "10px" /* 距離視窗左邊 */,
        width: "30px",
        height: "30px",
        borderRadius: "5px",
      }}
    />
  );
}

export default BackButton;
