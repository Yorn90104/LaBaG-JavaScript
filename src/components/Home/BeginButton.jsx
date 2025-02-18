import  Game  from '../../game/PlayLaBaG.js'

// 啦八機開始按鈕
function BeginButton(){
	const Begin = () => {Game.Logic();};
	return (
		<button style = {{
			width: "1080px",
        	height: "360px",
			backgroundImage: "url(BeginPIC.jpg)",
			backgroundSize: "cover",
			border: "none",
			cursor: "pointer",
		}	}
		onClick={() => Begin()} id='BeginButton'/>
	)
}

export default BeginButton