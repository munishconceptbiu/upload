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


export default function Spokeperson({ spokepersonList, setSpokesperson, setDesignation , setCompanyId, setCompanyName, setTitle, setIsShowAddEdit, isShowAddEdit}){

  const getSpokepersonSingleList = (id) => {
    setTitle('Edit')
    setIsShowAddEdit(true)
    get("dataprocess/get-singlespokespersons/"+id).then((response) => {
        setSpokesperson(response.data.spokespersonslist[0].spokesperson_name);
        setDesignation(response.data.spokespersonslist[0].designation)
        setCompanyId(response.data.spokespersonslist[0].company_id)
        setCompanyName(response.data.publicationlist[0].company_name)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deletspokespersons = (id) => {     
    get("dataprocess/get-singlespokdelete/"+id).then((response) => {
      toast.success("Publication successfully deleted");      
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }


  const columns = [
    {
      key: 'id',
      label: 'No',
    },
    {
      key: 'spokesperson_name',
      label: 'Spokesperson Name',
      // filter: false,
      // sorter: false,
    },
    
    {
      key: 'designation',
      label: 'Their Designation',
      // filter: false,
      // sorter: false,
    },

    {
      key: 'company_name',
      label: 'Client or Team update',
      // filter: false,
      // sorter: false,
    },
    // {
    //   key: 'circlation',
    //   label: 'Circulation',
    //   // filter: false,
    //   // sorter: false,
    // },
    // {
    //   key: 'readership',
    //   label: 'Readership',
    //   // filter: false,
    //   // sorter: false,
    // },
    // {
    //   key: 'media_type',
    //   label: 'Media House',
    //   // filter: false,
    //   // sorter: false,
    // },
    {
      key: 'action',
      label: 'Action',
      filter: false,
      sorter: false,
    },
  ]
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Spoke Person List</h1>
              {isShowAddEdit === false &&
              <button onClick={() => setIsShowAddEdit(true)} className="btn btn-primary btn-medium">Add Spoke person</button>
              }
              </div>
            <div className="content-box">
            <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={spokepersonList.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      scopedColumns={{
        action: (list) => (
          <td className='action-btns'><a  href="javascript:void(0)"onClick={e => getSpokepersonSingleList(list.id)}><EditIcon /></a> 
          &nbsp;&nbsp;&nbsp;<a href="javascript:void(0)"  className='deleicon' onClick={e => deletspokespersons(list.id)}><DeleteIcon /></a></td>
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