import React from "react";
import AnalysisHeader from "../ArticlesAnalysis/AppHeader";
import Editions from "../ArticlesAnalysis/Editions";
import ImageTabs from "../ArticlesAnalysis/ImageTabs";
import '../../../src/components/main.css'
function AnalysisDetails(){
    return(
        <>
            <AnalysisHeader/>
            <Editions/>
            <ImageTabs/>
        </>
    )
}
export default AnalysisDetails