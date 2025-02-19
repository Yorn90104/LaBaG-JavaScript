import Game from "../../game/PlayLaBaG.js";
import BackButton from "./BackButton";
import Logo from "./Logo";
import Title from "../../assets/Title.png"; 
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png"; 
import PPicture from "./PPicture";


function GameScreen({setScreen}){
    return (
        <>
        <BackButton setScreen={setScreen}/>
        <Logo title={Title}/>
        <PPicture/>
        </>
    )
}

export default GameScreen;