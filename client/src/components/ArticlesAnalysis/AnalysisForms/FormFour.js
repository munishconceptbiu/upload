import React from "react";
import { DownAngleIcon } from "../../../Icons/icons.component";
function FormFour(){
    return(
        <>
            <div className='row form-details'>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Spokesperson Opportunity'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Positive CCMs'></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Neutral CCMs'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Negative CCMs'></input></div> 
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Total CCMs'></input></div>
                    
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Photo Presence'></input></div>  
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Photo Type'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Photo Keyword'></input></div>





                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Photo Tonality' ></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Headline/Sub headline Presence'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Headline/Sub headline Visibility'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Headline/Sub headline Keyword'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Headline/Sub headline Tonality'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Front Page/Business Page/Industry Page/Edit Page Presence'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Key Messages Presnce'></input></div>
                    <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='Key Messages' ></input></div>
                    <div className="col-12 text-right mt-10">
                    
                        <button className='btn btn-primary btn-medium'>Submit</button>
                        <button className='btn btn-gray btn-medium'>Previous</button>
                    </div>
                 
                </div>
        
        </>
    )
}

export default FormFour