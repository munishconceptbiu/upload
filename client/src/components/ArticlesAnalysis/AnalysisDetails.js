import React from "react";
import ImageTabs from "./Tabs/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "../AnalysisHeader";
import EntityTab from "./Tabs/EntityTab";
function AnalysisDetails({ article }){
    return(
        <>
        {/* <div class="page-title"><h1>Upload Qualitative Report</h1></div> */}
            <ImageTabs article = {article}/>
            <AnalysisHeader article = {article}/>
            {/* <Options/> */}
            <EntityTab article = {article} />
            
        </>
    )
}
export default AnalysisDetails