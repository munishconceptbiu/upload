import React from "react";

export default function EditKeyword(){
    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Keyword</h1>
        </div>
        <div className="content-box ">
            <div className="row">

                <div className='col-4 mt-20'>
                
                <select className='form-select'>
                  <option>
                    Select Client
                  </option>
                  <option>HDFC Bank</option>
                  <option>Tata Motors</option>
                </select>
                    </div>
                    <div className='col-4 mt-20'>
                
                <select className='form-select'>
                  <option>
                    Select Theme
                  </option>
                  <option>Theme 1</option>
                  <option>Theme 2</option>
                </select>
                    </div>

                    <div className='col-4 mt-20'>
                
                <select className='form-select'>
                  <option>
                    Select Keyword Category 1
                  </option>
                  <option>Keyword Category 1</option>
                  <option>Keyword Category 1</option>
                </select>
                    </div>
                    <div className='col-4 mt-20'>
                
                <select className='form-select'>
                  <option>
                    Select Keyword Category 2
                  </option>
                  <option>Keyword Category 2</option>
                  <option>Keyword Category 2</option>
                </select>
                    </div>
   
                    <div className='col-12 mt-20'><input type="text" className='qa-input' placeholder='Keyword Topic'></input></div>
            </div>
           

            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}