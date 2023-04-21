import React from "react";
import SentimentAnalysis from "../AllAnalysis/SentimentAnalysis";
import VisibilityAnalysis from "../AllAnalysis/VisibilityAnalysis";
import SpokespersonAnalysis from "../AllAnalysis/SpokePersonAnalysis";
import KeywordAnalysis from "../AllAnalysis/KeywordAnalysis";
import ProductAnalysis from "../AllAnalysis/ProductAnalysis";

function FormTwo(){
    return(
        <>
       
            <div className='form-details'>
            <h3 className="text-center">Company Level</h3>
            <div className="row">
            <div className="col-12">
                <p className="color-blue">4 Competitors has similar articles</p>
            </div>
            <div className="col-md-12">
                <select className="form-select">
                    <option>Select Company Name</option>
                </select>
            </div>
        </div>
            
          <SentimentAnalysis/>
          <VisibilityAnalysis/>
          <SpokespersonAnalysis/>
          <KeywordAnalysis/>
          <ProductAnalysis/>
                   
                </div>
                
        
        </>
    )
}

export default FormTwo