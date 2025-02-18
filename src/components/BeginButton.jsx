import  Game  from '../game/PlayLaBaG.js'


function Begin(){
    Game.Logic();
}

function BeginButton(){
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