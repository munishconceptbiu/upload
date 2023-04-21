import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
import ArticleLevel from '../ArticleLevel';
export default function EntityTab() {
  return (
    <Container className='entity-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Article Level">
            <ArticleLevel/>
          </Tab>
          <Tab eventKey="tab-2" title="Company Level">
              Tab 2 Content
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}
