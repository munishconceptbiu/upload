import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
import ImageFormates from '../ImageFormates';
import ArticleHeader from '../ArticleHeader';
import EditionDetails from '../EditionDetails';
import EntityInfo from '../EntityInfo';
export default function ImageTabs() {
  return (

    <Container className='image-tab'>
      <Row className='article-header'>
        <ArticleHeader/>
      </Row>
      <Row className='edition-details'>
        <EditionDetails/>
      </Row>
      <Row className='entity-wraper'>
        <EntityInfo/>
      </Row>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Image">
            <div className='download-formates'>
              <ImageFormates/>
            </div>
          </Tab>
          <Tab eventKey="tab-2" title="PDF">
          <div className='download-formates'>
              Tab 2 Content
          </div>
          </Tab>
          <Tab eventKey="tab-3" title="Text">
          <div className='download-formates'>
              Tab 3 Content
          </div>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  )
}