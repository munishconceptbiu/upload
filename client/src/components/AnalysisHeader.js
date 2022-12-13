import React from "react";
import { JounalistIcon } from "../Icons/icons.component";
import { ShareIcon } from "../Icons/icons.component";
import { DownloadIcon } from "../Icons/icons.component";
import { UsersIcon } from "../Icons/icons.component";
import { CalendarIcon } from "../Icons/icons.component";

function AnalysisHeader(){
    return(
        <>
        <div className="row">
            <div className="col-10"> <h3>10k villagers troop into city from last 
local train stop
</h3></div>
            <div className="col-2 share-icons">
                <span><ShareIcon/></span>
                <span><DownloadIcon/></span>
            </div>
        </div>
        <div className="row article-details">
            <div className="col-4"><JounalistIcon/>The Times of India</div>
            <div className="col-4"><UsersIcon/>Barkha Dutt</div>
            <div className="col-4"><CalendarIcon/>16 November 2022</div>
        </div>
        </>
    )
}

export default AnalysisHeader