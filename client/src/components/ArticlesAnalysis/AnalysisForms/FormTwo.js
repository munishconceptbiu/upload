import React from "react";
function FormTwo(){
    return(
        <>
            <div className='row form-details'>

                   
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Page No' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Article Size' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Article Location disabled'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='MAV' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Circulation' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Readership' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Press Release' disabled></input></div>
                    <div className='col-6 mt-20 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Theme
                      </option>
                      <option>Theme 1</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20 mt-20 '>
                
                    <select className='form-select'>
                      <option>
                        Select Keyword Category 1
                      </option>
                      <option>Keyword</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Keyword Category 2
                      </option>
                      <option>Keyword Category</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Keyword Category Topic
                      </option>
                      <option>Keyword Category Topic 1</option>
                    </select>
                        </div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Vertical' disabled></input></div>
                   
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Keyword Summary'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Article Summary'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Name'></input></div>
                   
                    <div className="col-12 text-right mt-10">
                    
                        <button className='btn btn-primary btn-medium'>Next</button>
                        <button className='btn btn-gray btn-medium'>Previous</button>
                    </div>

                </div>
        
        </>
    )
}

export default FormTwo