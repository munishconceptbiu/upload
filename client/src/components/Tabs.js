import React, { useState } from 'react'
import '../components/main.css'
import FormOne from '../AnalysisForms/FormOne';
import FormTwo from '../AnalysisForms/FormTwo';
import FormThree from '../AnalysisForms/FormThree';
import FormFour from '../AnalysisForms/FormFour';


export default function Tabs(){
    const [index, setIndex]=useState(0);
    return(
        <div className="qualitatxive-form container">
            <div className='tab-nav'>
                <div className='tabhead col-3' onClick={()=>{setIndex(0)}}><span>1</span><br></br> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(1)}}> <span>2</span><br></br> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(2)}}> <span>3</span><br></br> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(3)}}> <span>4</span><br></br> Form </div>
            </div>
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
    )
}




