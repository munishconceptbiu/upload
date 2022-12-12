import React, { useState } from 'react'
import '../../../src/components/main.css'
import FormOne from '../../../src/components/ArticlesAnalysis/AnalysisForms/FormOne';
import FormTwo from '../../../src/components/ArticlesAnalysis/AnalysisForms/FormTwo';
import FormThree from '../../../src/components/ArticlesAnalysis/AnalysisForms/FormThree';
import FormFour from '../../../src/components/ArticlesAnalysis/AnalysisForms/FormFour';


export default function Tabs(){
    const [index, setIndex]=useState(0);
    return(
        <div className="qualitatxive-form container">
            <div className='tab-nav'>
                <div className='tabhead col-3' onClick={()=>{setIndex(0)}}><span>1</span> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(1)}}> <span>2</span> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(2)}}> <span>3</span> Form </div>
                <div className='tabhead col-3' onClick={()=>{setIndex(3)}}> <span>4</span> Form </div>
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




