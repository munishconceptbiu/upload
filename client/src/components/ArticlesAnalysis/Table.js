import React, { useState, useEffect } from 'react'
import {Container, Row, Tabs, Tab} from  'react-bootstrap';
import { CSmartTable } from '@coreui/react-pro'
import { useNavigate, NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../components/main.css'
export default function Table({ article,  media_type_id, articleList, setCheckedArticleList}) {
    

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
      const checkSelected = (ee) => {
        setCheckedArticleList(ee)
      }
      
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
      itemsPerPage={5}
      selectable
      onSelectAll={checkSelected}
      onSelectedItemsChange={checkSelected}
      pagination
      tableProps={{
        hover: true,
        responsive: true,
      }}
      scopedColumns={{
        article_id: (row) => (
          <td className='action-btns'><NavLink target="_blank" to={`/Qualitative/${row.client_id}-${row.article_id}-${row.entity_id}-${row.media_type_id}-${row.id}`}  className="nav-link"> {row.article_id} </NavLink></td>
        ),
      }}
    />
      </Row>
    </Container>
  )
}