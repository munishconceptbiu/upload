import React, { useState } from 'react'
import '../../../src/components/main.css'
import FormOne from './AnalysisForms/FormOne';
import FormTwo from './AnalysisForms/FormTwo';
import FormThree from './AnalysisForms/FormThree';
import FormFour from './AnalysisForms/FormFour';


export default function Tabs(){
    const [index, setIndex]=useState(0);
    return(
        <div className="qualitatxive-form container">
            <h3 className='text-center'>Qualitative Form</h3>
            <div className='tab-nav'>
                <div className='tabhead col-3' onClick={()=>{setIndex(0)}}><span>1</span> Step1 </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(1)}}> <span>2</span> Step2 </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(2)}}> <span>3</span> Step3 </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(3)}}> <span>4</span> Step4 </div>
            </div>
            <div className='tabcontent-wraper'>
            <div className='tabcontent' hidden={index !=0}>
            <FormOne/>  
            </div>
            <div className='tabcontent' hidden={index !=1}>
            <FormTwo/>
            </div>
            <div className='tabcontent' hidden={index !=2}>
            <FormThree/>
            </div>
            <div className='tabcontent' hidden={index !=3}>
            <FormFour/>
            </div>
            </div>
            <div className='qualitative-buttons'>

                
            </div>
         
        </div>
    )
}




