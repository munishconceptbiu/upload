import React from "react";
import { JounalistIcon } from "../Icons/icons.component";
import { InfoIcon } from "../Icons/icons.component";
import { DownloadIcon } from "../Icons/icons.component";
import { UsersIcon } from "../Icons/icons.component";
import { CalendarIcon } from "../Icons/icons.component";
import EntityDetails from "./ArticlesAnalysis/EntityDetails";
import moment from 'moment';
import Options from "./Options";




function AnalysisHeader({ article }){
    return(
        <>
            <div className="ashead">
                <h3>{article.headline}</h3>
                <div className="journalist-details">
                    <div className="row">
                        {article.media_type_id === 2 ? (
                    <div className="col-4" >
                       <InfoIcon/> {article.publication}
                    </div>
                        ) : (  <div className="col-4" >
                        <JounalistIcon/> {article.journalist}
                     </div> )}
                    <div className="col-4">
                    <UsersIcon/>{article.agency}
                    </div>
                    <div className="col-4">
                    <CalendarIcon/>{moment(article.article_created_on).format('LL')}
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default AnalysisHeader