import React from "react";
import SearchHeader from "../../../components/ArticlesAnalysis/ArticleSearch/SearchHeader";
import ArticleSearchTable from "../../../components/ArticlesAnalysis/ArticleSearch/ArticleSearchTable";
import QualitativeAnalysis from "../../../components/ArticlesAnalysis/ArticleSearch/QualitativeAnalysis";
function ArticleSearch() {
    return(
        <>
        {/* <div className="row article-search-wraper">
        <div class="page-title d-flex justify-content-between">
              <h1>Article Search</h1>
              </div>
              
              <div className="appContainer">
                <div className="uqr-form">
                    <div className="content-box mt-0">
                    
                        <div className="col-md-6">
                            <SearchHeader/>
                        </div>
                    <div className="col-md-6">
                            <QualitativeAnalysis/>
                    </div>
                </div>
            
                </div>
            </div>
            </div> */}
            <div class="page-title d-flex justify-content-between">
              <h1>Article Search</h1>
             </div>
             <div className="content-box article-search">
                <div className="row">
     
                            <SearchHeader/>
                            <ArticleSearchTable/>
                     
                    {/* <div className="col-md-4 ">
                        <div className="qualitative-analysis">
                            <h4>Qualitative Analysis</h4>
                            <QualitativeAnalysis/>
                        </div>
                        
                    </div> */}
                    
                </div>
             </div>
        
        </>
        
    )
}

export default ArticleSearch