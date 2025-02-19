function InfoText({ NowScore, NowTimes, MarginScore }) {
  return (
    <>
      {MarginScore !== 0 ? (
        <p style={{ color: "yellow", fontSize: "12pt" }}>
          <b>{`+ ${MarginScore}`}</b>
        </p>
      ) : (
        <p />
      )}

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
