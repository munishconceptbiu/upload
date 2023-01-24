import React, { useState } from 'react'
import '../components/main.css'
import EditionMumbai from './EditionDetails';

function Editions(){
    const [edition, setEdition]=useState(0);
    return(
        <div className="edition-tab">
            <div className='tab-nav'>
                <div className='tabhead col-3' onClick={()=>{setEdition(0)}}> Mumbai </div>
                <div className='tabhead col-3' onClick={()=>{setEdition(1)}}> New Delhi </div>
            </div>
            <div className='tabcontent' hidden={edition !=0}>
                  <EditionMumbai/>
            </div>
            <div className='tabcontent' hidden={edition !=1}>
               New Delhi
            </div>
         
        </div>
    )
}

export default Editions