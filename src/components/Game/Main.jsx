import BackButton from "./BackButton";
import Logo from "./Logo";
import PPicture from "./PPicture";


function Game({setScreen}){
    return (
        <>
        <BackButton setScreen={setScreen}/>
        <Logo/>
        <PPicture/>
        </>
    )
}

export default Game;