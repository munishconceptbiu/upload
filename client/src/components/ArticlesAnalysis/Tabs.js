// import React, { useState } from 'react'
// import '../../../src/components/main.css'
// import FormOne from './AnalysisForms/FormOne';
// import FormTwo from './AnalysisForms/FormTwo';
// import FormThree from './AnalysisForms/FormThree';
// import FormFour from './AnalysisForms/FormFour';


// export default function Tabs(){
//     const [index, setIndex]=useState(0);
//     return(
//         <div className="qualitatxive-form container">
//             <h3 className='text-center'>Qualitative Form</h3>
//             <div className='tab-nav'>
//                 <div className='tabhead col-3' onClick={()=>{setIndex(0)}}><span>1</span> Step1 </div>
//                 <div className='tabhead col-3' onClick={()=>{setIndex(1)}}> <span>2</span> Step2 </div>
//                 <div className='tabhead col-3' onClick={()=>{setIndex(2)}}> <span>3</span> Step3 </div>
//                 <div className='tabhead col-3' onClick={()=>{setIndex(3)}}> <span>4</span> Step4 </div>
//             </div>
//             <div className='tabcontent-wraper'>
//             <div className='tabcontent' hidden={index !=0}>
//             <FormOne/>  
//             </div>
//             <div className='tabcontent' hidden={index !=1}>
//             <FormTwo/>
//             </div>
//             <div className='tabcontent' hidden={index !=2}>
//             <FormThree/>
//             </div>
//             <div className='tabcontent' hidden={index !=3}>
//             <FormFour/>
//             </div>
//             </div>
//             <div className='qualitative-buttons'>

                
//             </div>
         
//         </div>
//     )
// }



// import ImageFormates from "./ImageFormates";
// import React, { useState } from 'react'
// import FormOne from "./AnalysisForms/FormOne";
// import FormTwo from "./AnalysisForms/FormTwo";
// import FormThree from "./AnalysisForms/FormThree";
// import FormFour from "./AnalysisForms/FormFour";
// export default function QaTabs(){
//     const [qaform, setqaform]=useState(0);
//     return(
//         <div className="qa-tabs">
//             <div className='tab-nav'>
//                 <div className='tabhead col-3' onClick={()=>{setqaform(0)}}><span>1</span> Step 1 </div>
//                 <div className='tabhead col-3' onClick={()=>{setqaform(1)}}> <span>2</span> Step 2 </div>
//                 <div className='tabhead col-3' onClick={()=>{setqaform(2)}}> <span>3</span> Step 3 </div>
//                 <div className='tabhead col-3' onClick={()=>{setqaform(3)}}> <span>4</span> Step 4 </div>
//             </div>
//             <div className='tabcontent' hidden={qaform !=0}>
//                   <FormOne/>
//             </div>
//             <div className='tabcontent' hidden={qaform !=1}>
//             <FormTwo/>
//             </div>
//             <div className='tabcontent' hidden={qaform !=2}>
//             <FormThree/>
//             </div>
//             <div className='tabcontent' hidden={qaform !=3}>
//             <FormFour/>
//             </div>
         
//         </div>
//     )
// }



import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormOne from './AnalysisForms/FormOne';
// import FormTwo from './AnalysisForms/FormTwo';
import FormTwo from './AnalysisForms/FormTwo';
import FormThree from './AnalysisForms/FormThree';
export default function QaTabs() {
  return (
    <Container className='qa-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className=' p-0'>
          <Tab eventKey="tab-1" title="Article Level" className='step1 step'>
                <FormOne/>
          </Tab>
          <Tab eventKey="tab-2" title="Company Level" className='step2 step'>
                <FormTwo/>
          </Tab>
          {/* <Tab eventKey="tab-3" title="3" className='step3 step'>
                <FormFour/>
          </Tab> */}
        </Tabs>
      </Row>
    </Container>
  )
}
