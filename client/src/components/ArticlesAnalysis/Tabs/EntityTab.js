import React from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../components/main.css'
import Table from '../Table';

export default function EntityTab({ article, media_type_id, isLoad, articleList, setCheckedArticleList }) {
  return (
    <Container className='entity-tab'>
      <Row className='justfy-content-center'>
        <Tabs justify variant='pills' defaultActiveKey="tab-1" className='mb-1 p-0'>
          <Tab eventKey="tab-1" title={"Similar Headline Article"}>
          <Table articleList={articleList}  article={article} media_type_id={media_type_id} isLoad={isLoad} setCheckedArticleList={setCheckedArticleList} />

          </Tab>
          {/* <Tab eventKey="tab-2" title="Delhi">
              Tab 2 Content
          </Tab> */}
        </Tabs>
      </Row>
    </Container>
  )
}
