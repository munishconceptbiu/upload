import React from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
function QualitativeAnalysis (){
    return(
<>
        <div className="row">
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
                  Prominence
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Select Theme
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Select Keyword
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Spokesperson
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Product
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
                  Headline Mentioned
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
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Keyword Topic
                  </option>
                </select>

            </div>
            <div className="col-md-12 mt-10"><FormCheckInput/><label>Save for 45 selected articles</label></div>
            
        </div>
        
</>
    )
}

export default QualitativeAnalysis