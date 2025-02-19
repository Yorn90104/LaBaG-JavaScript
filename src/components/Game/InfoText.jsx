function InfoText({ NowScore, NowTimes }) {
  return (
    <>
      <p style={{ color: "white", fontSize: "16pt" }}>
        <b>目前分數: {NowScore}</b>
      </p>
      <p style={{ color: "white", fontSize: "16pt" }}>
        <b>剩餘次數: {NowTimes}</b>
      </p>
    </>
  );
}
export default InfoText;