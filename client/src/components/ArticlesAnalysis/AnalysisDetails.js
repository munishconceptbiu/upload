import React from "react";
import ImageTabs from "./Tabs/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "../AnalysisHeader";
import EntityTab from "./Tabs/EntityTab";
function AnalysisDetails(){
    return(
        <>
        <ImageTabs/>
            <AnalysisHeader/>
            {/* <Options/> */}
            <EntityTab/>
            
        </>
    )
}
export default AnalysisDetails