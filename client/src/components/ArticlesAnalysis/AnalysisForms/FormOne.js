import React from "react";
import { CalendarIcon } from "../../../Icons/icons.component";

function FormOne(){
    return(
        <>
        <div className='row form-details'>
          <div className="col-12 text-center"><h3>Article Level</h3></div>
          <div className='col-6 '>
                
                <select className='form-select'>
                  <option>
                    Article Type
                  </option>
                  <option> Interview</option>
                  <option> Author</option>
                  <option> Brief</option>
                  <option> Column</option>
                  <option> Editorial</option>
                  <option> Feature</option>
                  <option> News/Report</option>
                </select>

            </div>
            <div className='col-6 '>
                
                <select className='form-select'>
                  <option>
                    Article Tags
                  </option>
                  <option> Press Release</option>
                  <option> Press Conference</option>
                  <option> Client Articles</option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select'>
                  <option>
                  Prominence
                  </option>
                  <option> Share</option>
                  <option> Exclusive</option>
                  <option> Mention</option>
                </select>

            </div>
            <div className='col-6 radio-group'> 
                <span className="radio-title">Not Relevant Articles</span>
                <span className="radio-btn"><input type="radio" id="age1" name="age" value="30"></input>
                  <label for="age1">Yes</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age2" name="age" value="60" ></input>
                    <label for="age2">No</label>
                </span>
                </div>
            
                <div className='col-12 mt-20 textarea'>
                  <span className="radio-title">Article Summary</span>
                    <textarea className="form-control " ></textarea>

                </div>
                   
                </div>

                <div className='row form-details'>
            <div className="col-12 text-center"><h3>Company Level</h3></div>
                   
   
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='B CCM'></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='N CCM'></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='A CCM'></input></div>
                   
            <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>Next</button>
                    </div>

                </div>
        
        </>
    )
}

export default FormOne