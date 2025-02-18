function BackButton({setScreen}) {
  return (
      <img src="/back.png" alt="返回首頁" 
        onClick={() => {console.log("切換至 Home 畫面");setScreen("Home")}}
        style={
            {   
                position: "absolute", /* 設定圖片的位置為絕對位置 */
                top: 0,           /* 距離視窗頂部 0 */
                left: 0,          /* 距離視窗左邊 0 */
                width: "30px",     /* 設定圖片的寬度 */
                height: "30px",    /* 設定圖片的高度 */
                borderRadius: "5px", /* 設定圖片的圓角 */
            }
        }/>
  );
}

export default BackButton;