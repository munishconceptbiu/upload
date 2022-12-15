import React from "react";
import { StarIcon, Smiley, AngledownIcon, SmileyIcon } from "../../Icons/icons.component";

function Options(){
    return(
        <>
            <div className="analysisoptions">
                <span>Theme<AngledownIcon/></span>
                <span><SmileyIcon/>Sentiment<AngledownIcon/></span>
                <span><StarIcon/></span>
            </div>
        </>
    )
    
}

export default Options