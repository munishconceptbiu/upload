import React from "react";
import { JounalistIcon } from "../Icons/icons.component";
import { ShareIcon } from "../Icons/icons.component";
import { DownloadIcon } from "../Icons/icons.component";
import { UsersIcon } from "../Icons/icons.component";
import { CalendarIcon } from "../Icons/icons.component";
import EntityDetails from "./ArticlesAnalysis/EntityDetails";

import Options from "./Options";




function AnalysisHeader(){
    return(
        <>
            <div className="ashead">
                <h3>10k villagers troop into city from last<br/> local train stop</h3>
                <div className="journalist-details">
                    <div className="row">
                    <div className="col-4">
                       <JounalistIcon/> The Times of India
                    </div>
                    <div className="col-4">
                    <UsersIcon/>Barkha Dutt
                    </div>
                    <div className="col-4">
                    <CalendarIcon/>16 November 2022
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default AnalysisHeader