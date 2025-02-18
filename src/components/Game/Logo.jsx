import { useState } from "react";  
import Title from "../../assets/Title.png"; 
import SuperTitle from "../../assets/SuperTitle.png";
import GreenTitle from "../../assets/GreenTitle.png";
import KachuTitle from "../../assets/KachuTitle.png"; 

function Logo() {
    return (
        <img src={Title} style={
            {
                width: "450px",
                height: "243px",  
            }
        } />
    );
}
export default Logo;
// function ChangeLogo(t) {
//     const Titles = {
//         "Normal" :Title,
//         "SuperHHH": SuperTitle,
//         "GreenWei": GreenTitle,
//         "PiKaChu" : KachuTitle
//     };
//     setLOGO(Titles[t]);
// }

// export { Logo , ChangeLogo };