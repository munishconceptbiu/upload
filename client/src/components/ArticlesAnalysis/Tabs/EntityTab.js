import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
export default function EntityTab() {
  return (
    <Container className='entity-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Mumbai">
          <div class="row suggestions"><h5>Suggestions:</h5><p>Article been given qualitative with kotak.</p></div>
          </Tab>
          <Tab eventKey="tab-2" title="Delhi">
              Tab 2 Content
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}
