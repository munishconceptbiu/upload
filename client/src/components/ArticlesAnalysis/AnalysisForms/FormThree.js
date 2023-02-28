import React from "react";
function FormThree(){
    return(
        <>
            <div className='row form-details analysis-options'>
            <div className="col-12 text-center"><h3>1. Journalist Analysis</h3></div>
            <div className='col-6'>
                
                <select className='form-select'>
                  <option>
                  Journalist Name
                  </option>

                </select>

            </div>

            <div className='col-6'>
                
                <select className='form-select'>
                  <option>
                  Type
                  </option>
                  <option> Agency</option>
                  <option> Bureau</option>
                </select>

            </div>
            <div className='col-12 mt-10 textarea'>
                  <span className="radio-title">Personal Details: if any</span>
                    <textarea className="form-control " ></textarea>
                </div>
                <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>+ Add More</button>
                    </div>
                <div className="col-12 text-center mt-20"><h3>2. Spokesperson analysis</h3></div>
                <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Name 
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Designation 
                  </option>
                </select>

            </div>
                <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Profiling 
                  </option>
                  <option> Interview</option>
                  <option> Author</option>
                  <option> Company</option>
                  <option> Industry</option>
                  <option> Mention </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Visibility 
                  </option>
                  <option> Photo</option>
                  <option> Headline</option>
                  <option> Company</option>
                  <option> Industry</option>
                  <option> Mention </option>
                </select>

            </div>
                  <div class="col-6 radio-group"><span class="radio-title">Comments on</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">CFPs</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">Experts</label></span></div>
                  <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>+ Add More</button>
                    </div>
                
                <div className="col-12 text-center mt-20"><h3 >3. Product Analysis</h3></div>
                <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Name 
                  </option>
                 
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Category 
                  </option>
                </select>

            </div>
            <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>+ Add More</button>
                    </div>
                <div className="col-12 text-center mt-20"><h3 >4. Visibility Analysis</h3></div>

                <div class="col-6 radio-group"><span class="radio-title">Headline</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
                <div class="col-6 radio-group"><span class="radio-title">Photo</span><span class="radio-btn"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Yes</label></span><span class="radio-btn"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">No</label></span></div>
                <div class="col-6 radio-group"><span class="radio-title">Visibility Analysis</span><br></br><span class="radio-btn mt-10"><input type="radio" id="age1" name="age" value="30"></input><label for="age1">Hit / Miss</label></span><span class="radio-btn mt-10"><input type="radio" id="age2" name="age" value="60"></input><label for="age2">Push / Pull</label></span></div>
                <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Key Message'></input></div>
                  
                   <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>Submit</button>
                        <button className='btn btn-gray btn-medium'>Previous</button>
                    </div>
                 
                </div>
        
        </>
    )
}

export default FormThree