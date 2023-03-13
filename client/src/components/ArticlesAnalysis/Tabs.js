
import React, {useState} from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormOne from './AnalysisForms/FormOne';
// import FormTwo from './AnalysisForms/FormTwo';
import FormTwo from './AnalysisForms/FormTwo';
import FormThree from './AnalysisForms/FormThree';
export default function QaTabs({ article, articleId, clientId, checkArticleList, articleList, simallerArticleCount, setStepTwoData, setStepOneData, stepTwoData, stepOneData }) {

    const [key, setKey] = useState('tab-1');

    
  return (
    <Container className='qa-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills'  activeKey={key} className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="1" className='step1 step'>
                <FormOne simallerArticleCount={simallerArticleCount} checkArticleList={checkArticleList} articleList={articleList} article={article} articleId={articleId} setKey={setKey} setStepTwoData={setStepTwoData} setStepOneData={setStepOneData} stepTwoData={stepTwoData} stepOneData={stepOneData}/>
          </Tab>
          <Tab eventKey="tab-2" title="2" className='step2 step'>
                <FormTwo  simallerArticleCount={simallerArticleCount} checkArticleList={checkArticleList} articleList={articleList} article={article} articleId={articleId} setKey={setKey} clientId={clientId} setStepTwoData={setStepTwoData} setStepOneData={setStepOneData} stepTwoData={stepTwoData} stepOneData={stepOneData}/>
          </Tab>
          <Tab eventKey="tab-3" title="3" className='step3 step'>
                 <FormThree simallerArticleCount={simallerArticleCount} checkArticleList={checkArticleList} articleList={articleList} article={article} articleId={articleId} setKey={setKey} clientId={clientId} setStepTwoData={setStepTwoData} setStepOneData={setStepOneData} stepTwoData={stepTwoData} stepOneData={stepOneData}/>
          </Tab>
          {/* <Tab eventKey="tab-3" title="3" className='step3 step'>
                <FormFour/>
          </Tab> */}
        </Tabs>
      </Row>
    </Container>
  )
}
