import React from "react";
import { CalendarIcon } from "../../../Icons/icons.component";

function FormOne(){
    return(
        <>
        <div className='row form-details'>
                    <div className='col-6'><input type="text" className='qa-input' placeholder='142' disabled></input></div>
                    <div className='col-6 '>
                
                    <select className='form-select'>
                      <option>
                        Select Enitity
                      </option>
                      <option>Tata Motors</option>
                    </select>

                </div>
                    <div className='col-6 mt-10'><input type="text" className='qa-input' placeholder='12/06/2022' /><CalendarIcon/></div>
                    <div className='col-6 mt-10'>

                
                    <select className='form-select'>
                      <option>
                        Select Publication
                      </option>
                      <option>Publication</option>
                    </select>


                        </div>
                        <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Sppliment
                      </option>
                      <option>Suppliment</option>
                    </select>

                </div>
                <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Column' disabled></input></div>
                    <div className='col-6 mt-10'>
                
                    <select className='form-select'>
                      <option>
                        Select Edition
                      </option>
                      <option>Publication</option>
                    </select>
                        </div>
                    <div className='col-6 mt-10'><input type="text" className='qa-input' placeholder='Bureau' ></input></div>
                    <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select State
                      </option>
                      <option>Maharashtra</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Zone
                      </option>
                      <option>Zone</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20'>
                    <select className='form-select'>
                      <option>
                        Select Language
                      </option>
                      <option>English</option>
                    </select>
                        </div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Headline' disabled></input></div>
                    <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Genre
                      </option>
                      <option>Genre</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Journalist
                      </option>
                      <option>Jounalist</option>
                    </select>
                        </div>
                        <div className='col-6 mt-20'>
                
                    <select className='form-select'>
                      <option>
                        Select Unique Story
                      </option>
                      <option>Unique Story</option>
                    </select>
                        </div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Type of Journalist' ></input></div>
                    
                    <div className="col-12 text-right mt-10">
                        <button className='btn btn-primary btn-medium'>Next</button>
                    </div>


                 
                </div>
        
        </>
    )
}

export default FormOne