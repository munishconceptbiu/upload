import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
import ImageFormates from '../ImageFormates';
export default function ImageTabs() {
  return (
    <Container className='image-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Image">
          <ImageFormates/>
          </Tab>
          <Tab eventKey="tab-2" title="PDF">
              Tab 2 Content
          </Tab>
          <Tab eventKey="tab-3" title="Text">
              Tab 3 Content
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}