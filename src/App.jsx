import { useState } from "react";
import "./App.css"
import Home from "./components/Home/Main"


function App() {
    const [Screen, setScreen] = useState("Home");
	return (
		<>
			{Screen === "Home" && <Home setScreen = {setScreen}/>}
		</>
	);
}

export default App;
