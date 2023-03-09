import React from "react";
import ImageTabs from "./Tabs/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "./AnalysisHeader";
import EntityTab from "./Tabs/EntityTab";
import Table from './Table';
function AnalysisDetails({ article, media_type_id, isLoad }){
    console.log('media_type_id', media_type_id)
    return(
        <>
        {/* <div class="page-title"><h1>Upload Qualitative Report</h1></div> */}
            {/* <ImageTabs article = {article} media_type_id={media_type_id}/> */}
            <AnalysisHeader article = {article} media_type_id={media_type_id} isLoad={isLoad}/>
            {/* <Options/> */}
            <EntityTab article = {article} media_type_id={media_type_id} isLoad={isLoad} />
            <Table article = {article} media_type_id={media_type_id} isLoad={isLoad}/>
        </>
    )
}
export default AnalysisDetails