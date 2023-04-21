import React from "react";

function SentimentAnalysis (){
    return(
        <>
            <div className="row sentiment-analysis">
                <h3 className="text-center">Sentiment Analysis</h3>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Select Tonality
                  </option>
                </select>

            </div>
                 <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  B CCM
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  A CCM
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  N CCM
                  </option>
                </select>
            </div>

                   
                    

                    </div>
        </>
    )
}

export default SentimentAnalysis;