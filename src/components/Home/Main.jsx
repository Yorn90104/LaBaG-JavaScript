function Home({setScreen}){
  return (
    <>
      <img src="/SuperCircle.png" alt="SuperCircle" onClick={() => {console.log("切換至 Home畫面");setScreen("Home")}}/>
      <h1 style={{
        textAlign: "center",
        fontSize: "20px",
        color: "white",
      }}>請點擊上方圖片進入遊戲</h1>
    </>
  );
}   

export default Home;