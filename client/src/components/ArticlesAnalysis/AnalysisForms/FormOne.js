import React from "react";
import { CalendarIcon } from "../../../Icons/icons.component";

function FormOne(){
    return(
        <>
        <div className='row form-details'>
          <h3 className="text-center">Article Level</h3>
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
                  Article Level
                  </option>
                  <option> Share</option>
                  <option> Exclusive</option>
                  <option> Mention</option>
                </select>

            </div>
            <div className='col-12 radio-group'> 
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
                  <span className="radio-title">Reason:</span>
                    <textarea className="form-control " ></textarea>
                </div>

                <div className='col-6 radio-group'> 
                <span className="radio-title">Financial Planner</span>
                <span className="radio-btn"><input type="radio" id="age1" name="age" value="30"></input>
                  <label for="age1">Yes</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age2" name="age" value="60" ></input>
                    <label for="age2">No</label>
                </span>
                </div>
                <div className='col-6 radio-group'> 
                <span className="radio-title">Recommendation article</span>
                <span className="radio-btn"><input type="radio" id="age1" name="age" value="30"></input>
                  <label for="age1">Yes</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age2" name="age" value="60" ></input>
                    <label for="age2">No</label>
                </span>
                </div>
                <div className="col-md-12 journalist-table">
                  <h4>Journalist</h4>
                  <table className="table">
                    <thead>
                      <th>Name</th>
                      <th>Publication</th>
                      <th>Email</th>
                      <th>Designation</th>
                      <th>Type</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Manish</td>
                        <td>India Today</td>
                        <td>manish@indiatday.com</td>
                        <td>Sr. Executive</td>
                        <td>CFP</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col-6 radio-group'> 
                <span className="radio-title">
                  <select class="form-select">
                      <option>Select Journalist</option>
                      <option> Journalist 1</option>
                    </select>
                </span>
               
                </div>
                <div className="col-md-6 radio-group">
                <span className="radio-btn"><input type="radio" id="age1" name="age" value="30"></input>
                  <label for="age1">CFP</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age2" name="age" value="60" ></input>
                    <label for="age2">Experts</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age3" name="age" value="60" ></input>
                    <label for="age2">Spokesperson</label>
                </span>
              
                </div>
                <div className="col-md-12"><a href="#" className="addmore float-end">Add More</a></div>
                <div className="col-md-12"><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="CheckArticleLevel"/>
  <label class="form-check-label" for="CheckArticleLevel">
  Save for all editions and competitor
  </label>
</div></div>
<div className="col-md-12"><button className="btn btn-primary">Save & Continue</button></div>
                
                </div>
               
        
        </>
    )
}

export default FormOne