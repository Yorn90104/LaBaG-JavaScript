import { useState } from "react";
import "./App.css"
import Home from "./components/Home/Main"
import Game from "./components/Game/Main"



function App() {
    const [Screen, setScreen] = useState("Home");
	return (
		<>
			{Screen === "Home" && <Home setScreen = {setScreen}/>}
			{Screen === "Game" && <Game setScreen = {setScreen}/>}
		</>
	);
}

export default App;
