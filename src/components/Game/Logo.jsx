import { useState } from "react";  


function Logo({title}) {
    return (
        <img src={title} style={
            {
                width: "450px",
                height: "243px",  
            }
        } />
    );
}
export default Logo;
