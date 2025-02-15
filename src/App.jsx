import  PlayLaBaG  from '.\\game\\PlayLaBaG'
import '.\\App.css'

const Game = new PlayLaBaG();

function BeginButton(){
	return (
		<button onClick={()=>Game.Logic()} id='BeginButton'/>
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
