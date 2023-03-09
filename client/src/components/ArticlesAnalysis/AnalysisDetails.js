import React, { useState, useEffect } from "react";
import ImageTabs from "./Tabs/ImageTabs";
import Options from "../../components/ArticlesAnalysis/Options";
import '../../../src/components/main.css'
import AnalysisHeader from "./AnalysisHeader";
import EntityTab from "./Tabs/EntityTab";
import Table from './Table';
import { get, post, deleteMethod, put } from "../../services/CommanService";

function AnalysisDetails({ article, media_type_id, isLoad, articleList, simallerArticleCount, setCheckedArticleList }){
    console.log('media_type_id', media_type_id);
    
    return(
        <>
        {/* <div class="page-title"><h1>Upload Qualitative Report</h1></div> */}
            {/* <ImageTabs article = {article} media_type_id={media_type_id}/> */}
            <AnalysisHeader  simallerArticleCount={simallerArticleCount} article = {article} media_type_id={media_type_id} isLoad={isLoad}/>
            {/* <Options/> */}
            <EntityTab setCheckedArticleList={setCheckedArticleList} articleList={articleList} article = {article} media_type_id={media_type_id} isLoad={isLoad} />
        </>
    )
}
export default AnalysisDetails