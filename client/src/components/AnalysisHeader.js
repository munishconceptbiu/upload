import React from "react";
import { JounalistIcon } from "../Icons/icons.component";
import { InfoIcon } from "../Icons/icons.component";
import { DownloadIcon } from "../Icons/icons.component";
import { UsersIcon } from "../Icons/icons.component";
import { CalendarIcon } from "../Icons/icons.component";
import EntityDetails from "./ArticlesAnalysis/EntityDetails";
import moment from 'moment';
import Options from "./Options";




function AnalysisHeader({ article, media_type_id }){
    console.log('article', article)
    return(
        <>
            <div className="ashead">
                <h3>{article?.article?.headline}</h3>
                <div className="journalist-details">
                    <div className="row">
                        {media_type_id === 2 ? (
                    <div className="col-4" >
                       <InfoIcon/> {article?.article?.publication}
                    </div>
                        ) : (  <div className="col-4" >
                        <JounalistIcon/> {article?.article?.publication}
                     </div> )}
                    <div className="col-4">
                    <UsersIcon/>{article?.entity_detail?.entity_display_name}
                    </div>
                    <div className="col-4">
                    <CalendarIcon/>{moment(article?.article?.publish_datetime).format('LL')}
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default AnalysisHeader