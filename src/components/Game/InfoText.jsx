function InfoText({ Score, Times, MarginScore, NowMode , ModeTimes}) {
  const ModeStyleText = {
    Normal:{Style:{}, Text:""},
    SuperHHH:{Style:{ color: "#FF00FF" }, Text:`超級阿禾剩餘次數: ${ModeTimes}次`},
    GreenWei:{Style:{ color: "#00FF00" }, Text:`綠光阿瑋剩餘次數: ${ModeTimes}次`},
    PiKaChu:{Style:{ color: "#FFFF00" }, Text:`已觸發 ${ModeTimes} 次皮卡丘充電`},
  }
  const { Style, Text } = ModeStyleText[NowMode] || ModeStyleText["Normal"];

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
        <b>目前分數: {Score}</b>
      </p>
      <p>
        <b>剩餘次數: {Times}</b>
      </p>
      {ModeTimes !== 0 ? (
        <p style={Style}>
          <b>{Text}</b>
        </p>
      ) : (
        <p />
      )}
    </>
  );
}
export default InfoText;
