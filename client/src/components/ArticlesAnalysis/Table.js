import React, { useState, useEffect } from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import { CSmartTable } from '@coreui/react-pro'
import { get, post, deleteMethod, put } from "../../services/CommanService";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../components/main.css'
export default function Table({ article }) {
    const [articleList, setArticleList] = useState([]);

    const getArticleList = () => {
        post("dataprocess/get-relarticlesrowlist", { "client_id": "5193", "media_type": 1, "page": "1", "fromDate":  "2022-12-15", "toDate":  "2022-12-16" }
        ).then((response) => {
          setArticleList(response.data.articlesrowlist)
        //   setMessage(`<div style="color: rgb(0, 54, 185); margin-top: 5px; margin-bottom: 5px; font-size: 14px;">Total <span className="feed-count-info"><b>${response.data.articlesrowlist.length}</b></span> articles were found from <span class="feed-count-info"><b>${moment(startDate).format('LL')}</b></span> to <span className="feed-count-info"> <b>${moment(endDate).format('LL')}</b></span> <span className="feed-count-info">with selected client <b> ${selectRef.getValue().length ? selectRef.getValue()[0]?.label : ""} </b></span></div>`)
        })
          .catch(() => {
            // handleLoginFailure({ status: UNAUTHORIZED });
          })
    
      }

      useEffect(() => {
        getArticleList()
      }, []);

      const columns = [
        {
          key: 'article_id',
          label: 'Article Id',
        },
        {
          key: 'headline',
          label: 'Headline',
          // filter: false,
          // sorter: false,
        },
        
        {
          key: 'entity_name',
          label: 'Entity',
          // filter: false,
          // sorter: false,
        },
    
        {
          key: 'edition',
          label: 'Edition',
          // filter: false,
          // sorter: false,
        },
        {
          key: 'publication',
          label: 'Publication',
          // filter: false,
          // sorter: false,
        },
        {
          key: 'publish_date',
          label: 'Publish Date',
          // filter: false,
          // sorter: false,
        }
      ]
  return (
    <Container className='entity-tab'>
      <Row className='justfy-content-center'>
      <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={articleList.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
      </Row>
    </Container>
  )
}