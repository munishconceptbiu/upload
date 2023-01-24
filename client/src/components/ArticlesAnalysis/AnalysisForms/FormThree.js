import React from "react";

function FormThree(){
    return(
        <>
            <div className='row form-details'>
                
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Keyword'></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Category'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Profiling'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Event'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Product Attribute'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Article Type' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Prominence' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Hit & Missed for Client'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Push & Pull'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Tonality' disabled></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson topics'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson Headline'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson 1 Summary'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson Profiling'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokeperson Attribute'></input></div>

                    <div className="col-12 text-right mt-10">
                    
                        <button className='btn btn-primary btn-medium'>Next</button>
                        <button className='btn btn-gray btn-medium'>Previous</button>
                    </div>

                  
                   
                </div>
        
        </>
    )
}

export default FormThree