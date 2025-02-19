import { useState } from "react";
import Game from "../../game/PlayLaBaG.js";
import BackButton from "./BackButton";
import Logo from "./Logo";
import Title from "../../assets/Title.png"; 
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png"; 
import Picture from "./PPicture";
import QST from "../../assets/QST.jpg";


function GameScreen({setScreen}){
    const [NowMode, setNowMode] = useState("Normal");

    const Titles = {
        "Normal": Title,
        "SuperHHH": SuperTitle,
        "GreenWei": GreenTitle,
        "PiKaChu": KachuTitle
        };

    return (
        <>
        <BackButton setScreen={setScreen}/>
        <div>
            <Logo title={Titles[NowMode]}/>
            <div className="Pictures">
                <Picture p= {QST}/>
                <Picture p= {QST}/>
                <Picture p= {QST}/>
            </div>
        </div>
        </>
    )
}

export default GameScreen;