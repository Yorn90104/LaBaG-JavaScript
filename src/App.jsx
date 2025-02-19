import { useState } from "react";
import "./App.css"
import HomeScreen from "./components/Home/Main"
import GameScreen from "./components/Game/Main"
import EndScreen from "./components/End/Main"



function App() {
    const [Screen, setScreen] = useState("Home");
	return (
		<div className="container">
			{Screen === "Home" && <HomeScreen setScreen = {setScreen}/>}
			{Screen === "Game" && <GameScreen setScreen = {setScreen}/>}
			{Screen === "End" && <EndScreen setScreen = {setScreen}/>}
		</div>
	);
}

export default App;
