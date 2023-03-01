
import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormOne from './AnalysisForms/FormOne';
// import FormTwo from './AnalysisForms/FormTwo';
import FormTwo from './AnalysisForms/FormTwo';
import FormThree from './AnalysisForms/FormThree';
export default function QaTabs({ article }) {
  return (
    <Container className='qa-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="1" className='step1 step'>
                <FormOne article={article}/>
          </Tab>
          <Tab eventKey="tab-2" title="2" className='step2 step'>
                <FormTwo article={article}/>
          </Tab>
          <Tab eventKey="tab-3" title="3" className='step3 step'>
                 <FormThree article={article}/>
          </Tab>
          {/* <Tab eventKey="tab-3" title="3" className='step3 step'>
                <FormFour/>
          </Tab> */}
        </Tabs>
      </Row>
    </Container>
  )
}
