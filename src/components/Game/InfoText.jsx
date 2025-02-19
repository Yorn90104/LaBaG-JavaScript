function InfoText({ NowScore, NowTimes, MarginScore }) {
  return (
    <>
      {MarginScore !== 0 ? (
        <p style={{ color: "yellow" }}>
          <b>{`+ ${MarginScore}`}</b>
        </p>
      ) : (
        <p />
      )}
      <p>
        <b>目前分數: {NowScore}</b>
      </p>
      <p>
        <b>剩餘次數: {NowTimes}</b>
      </p>
    </>
  );
}
export default InfoText;
