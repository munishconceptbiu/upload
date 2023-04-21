import React from "react";

function KeywordAnalysis (){
    return(
        <>
            <div className="row keyword-analysis">
                
                <h3 className="text-center">Keyword Analysis</h3>
            <div className="col-md-12">
                <table className="table">
                    <thead>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Profiling</th>
                      <th>Visibility</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Manish</td>
                        <td>CEO</td>
                        <td>Interview</td>
                        <td>Photo</td>
                        <td>CFP</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
            <div className='col-6 '>
                <select className='form-select'>
                  <option>
                  Select Theme
                  </option>
                </select>

            </div>
                 <div className='col-6 '>
                <select className='form-select'>
                  <option>
                  Select Keyword
                  </option>
                </select>

            </div>
            <div className='col-6 mt-20'>
                <select className='form-select'>
                  <option>
                  Select Topic
                  </option>
                </select>
            </div>
            <div className='col-6 mt-20'>
             <input type="text" className="form-control p-l0" placeholder="Other details, If any" />
            </div>
            <div className="col-md-12 mt-10">
              <a href="#" className="addmore float-end">Add New Keyword</a>
            </div>
            <div className="col-md-12 mt-10">
              <a href="#" className="addmore float-end">Add More</a>
            </div>
   
                    </div>
        </>
    )
}

export default KeywordAnalysis;