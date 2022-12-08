import ImageFormates from "./ImageFormates";
import React, { useState } from 'react'
export default function ImageTabs(){
    const [articleImage, setArticleImage]=useState(0);
    return(
        <div className="image-tab">
            <div className='tab-nav'>
                <div className='tabhead col-3' onClick={()=>{setArticleImage(0)}}> Image </div>
                <div className='tabhead col-3' onClick={()=>{setArticleImage(1)}}> PDF</div>
                <div className='tabhead col-3' onClick={()=>{setArticleImage(2)}}> Text</div>
            </div>
            <div className='tabcontent' hidden={articleImage !=0}>
                  <ImageFormates/>
            </div>
            <div className='tabcontent' hidden={articleImage !=1}>
               PDF Formate
            </div>
            <div className='tabcontent' hidden={articleImage !=2}>
               Text Formate
            </div>
         
        </div>
    )
}