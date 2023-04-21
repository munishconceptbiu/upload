import React from "react";

function VisibilityAnalysis (){
    return(
       <div className="row visibility-analysis">
            <div className="col-md-12"><h3>Visibility Analysis</h3></div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                    Headline Mention
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Photo Mentioned
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Headline Tonality
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Logo
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Hit
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Push
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Prominence
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Press Release
                  </option>
                </select>
            </div>
            <div className="col-md-12 mt-10">
              <a href="#" className="addmore float-end">Add More</a>
            </div>
           
       </div>
    )
}

export default VisibilityAnalysis;