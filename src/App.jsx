import { useState } from 'react'
import { PlayLaBaG } from './game/PlayLaBaG'
const Game = new PlayLaBaG();
function BeginButton(){
	return (
		<button onClick={Game.Logic}>開始</button>
	)
}

function App() {

	return (
		<>
			<BeginButton/>
		</>
	)
}

export default App
