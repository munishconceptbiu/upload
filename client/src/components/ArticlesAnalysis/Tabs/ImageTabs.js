import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
import ImageFormates from '../ImageFormates';
export default function ImageTabs({article, media_type_id}) {
  console.log('media_type_id', media_type_id)
  return (
    <Container className='image-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title="Image">
            <div className='download-formates'>
              <ImageFormates image={media_type_id === 1 ? article?.article?.top_image : article?.images?.length ? article?.images[0]?.image_url : ""}/>
            </div>
          </Tab>
        {media_type_id === 2 &&
       
          <Tab eventKey="tab-2" title="PDF">
          <div className='download-formates'>
              Tab 2 Content
          </div>
          </Tab>
}
          {media_type_id === 2 &&
          <Tab eventKey="tab-3" title="Text">
          <div className='download-formates'>
             {article?.article?.content}
          </div>
          </Tab>
        
}
        </Tabs>
      </Row>
    </Container>
  )
}