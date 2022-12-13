import React from "react";
import Editions from "../ArticlesAnalysis/Editions";
import ImageTabs from "../ArticlesAnalysis/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "../AnalysisHeader";
function AnalysisDetails(){
    return(
        <>
            <AnalysisHeader/>
            <Options/>
            <Editions/>
            <ImageTabs/>
        </>
    )
}
export default AnalysisDetails