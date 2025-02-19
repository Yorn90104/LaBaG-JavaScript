function HomeScreen({setScreen}){
  return (
    <>
      <img src="/SuperCircle.png" alt="SuperCircle" onClick={() => {console.log("切換至 Game 畫面");setScreen("Game")}}/>
      <h1 style={{
        textAlign: "center",
        fontSize: "20px",
        color: "white",
      }}>請點擊上方圖片進入遊戲</h1>
    </>
  );
}   

export default HomeScreen;