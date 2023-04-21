import React from "react";
import ImageTabs from "./Tabs/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "../AnalysisHeader";

function AnalysisDetails(){
    return(
        <>
        {/* <div class="page-title"><h1>Upload Qualitative Report</h1></div> */}
        <ImageTabs/>
            <AnalysisHeader/>
            {/* <Options/> */}
        
            
        </>
    )
}
export default AnalysisDetails