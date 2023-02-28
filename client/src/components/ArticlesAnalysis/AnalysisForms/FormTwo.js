import React from "react";

function FormTwo(){
    return(
        <>
            <div className='row form-details'>
            <div className="col-12 text-center"><h3>News Level Analysis</h3></div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Keyword Category 
                  </option>
                </select>

            </div>
                 <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Product Category 
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Theme 
                  </option>
                  <option> Corporate</option>
                  <option> Services</option>
                </select>

            </div>
                   <div class="col-6 radio-group"><span class="radio-title">Recommendation article</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
                   <div class="col-6 radio-group"><span class="radio-title">Financial Planner</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
                   <div class="col-6 radio-group"><span class="radio-title"> New Product Launch</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
                   <div class="col-6 radio-group"><span class="radio-title"> News</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">National</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">International</label></span></div>
                    <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>Next</button>
                        <button className='btn btn-gray btn-medium'>Previous</button>
                    </div>

                  
                   
                </div>
        
        </>
    )
}

export default FormTwo