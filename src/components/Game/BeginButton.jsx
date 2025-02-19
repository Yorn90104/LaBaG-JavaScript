function BeginButton({Begin}) {
  return (
    <img
        src="/BeginPIC.jpg"
        onClick={() => {console.log("已按下開始");Begin()}}
        style={
            {
                width: "150px",
                height: "50px",
                cursor: "pointer",
            }
        }
    />
  );
}

export default BeginButton;