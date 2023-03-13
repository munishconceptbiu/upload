import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';
import { CSmartTable } from '@coreui/react-pro'


export default function Keyword({ isShowAddEdit, setIsShowAddEdit, setTitle,title}){

  const columns = [
    {
      key: 'id',
      label: 'No',
    },
    {
      key: 'theme_name',
      label: 'Theme',
      // filter: false,
      // sorter: false,
    },
    
    {
      key: 'keyword',
      label: 'Keywords',
      // filter: false,
      // sorter: false,
    },

    {
      key: 'topic',
      label: 'Topics',
      // filter: false,
      // sorter: false,
    },
    
    // {
    //   key: 'action',
    //   label: 'Action',
    //   filter: false,
    //   sorter: false,
    // },
  ]

  const [keywordList, setKeywordList] = useState([]);
  const [clientId, setClientId]= useState();
  const getkeywordList = (id) => {
    get("keywords/themekeywordtopic/"+id).then((response) => {
        setKeywordList(response.data.keywords)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteSpokeperson = (id) => {
    deleteMethod("users/deleteuser/" + id).then((response) => {
      toast.success("User successfully deleted");
      getkeywordList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

  const getKeywordSingleList = (id) => {
    setTitle('Edit')
    setIsShowAddEdit(true)
    get("dataprocess/get-singlespokespersons/"+id).then((response) => {
        
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteKeyword = (id) => {     
    get("dataprocess/get-singlespokdelete/"+id).then((response) => {
      toast.success("Publication successfully deleted");      
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

  const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    inputValue = inputValue || 'a'

    get("artical/get-setting-clientlist/" + inputValue).then((response) => {
      resolve(response.data.client.map((e) => ({
        value: e.client_id,
        label: e.client_name
      })));
    })

  });

const clientChange = (e) => {
  setClientId(e.value);
  getkeywordList(e.value)
}
  
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Theme Keyword Topic</h1>
              {isShowAddEdit === false &&
              <button onClick={() => setIsShowAddEdit(true)} className="btn btn-primary btn-medium">Add</button>
}
              </div>
            <div className="content-box">
            <AsyncSelect  placeholder="Select Client" cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
            <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={keywordList?.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      scopedColumns={{
        action: (list) => (
          <td className='action-btns'><a  href="javascript:void(0)"onClick={e => getKeywordSingleList(list.id)}><EditIcon /></a> 
          &nbsp;&nbsp;&nbsp;<a href="javascript:void(0)"  className='deleicon' onClick={e => deleteKeyword(list.id)}><DeleteIcon /></a></td>
        ),
        // media_type: (list) => (
        //   <td>{list.media_type === 1 ? 'print' : 'online'}</td>
        // ),
        // readership: (list) => (
        //   <td>{list.readership || 'NA'}</td>
        // ),
        // genre: (list) => (
        //   <td>{list.genre || 'NA'}</td>
        // )
       }}
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
            </div>
        </>
    )
}