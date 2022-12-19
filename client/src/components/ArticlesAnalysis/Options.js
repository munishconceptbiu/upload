import React from "react";
import { Star } from "../Icons/icons.component";
import { Smiley } from "../Icons/icons.component";
import { AngleDown } from "../Icons/icons.component";

function Options(){
    return(
        <>
            <div className="analysisoptions">
                <span>Theme<AngleDown/></span>
                <span><Smiley/>Sentiment<AngleDown/></span>
                <span><Star/></span>
            </div>
        </>
    )
    
}

export default Options