
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

export default function PublicationList({ publicationList, setPublication, setCirclation, setEdition, setMediaType, setPublicationTypeId, setReadership, setWebName }){

  const getPublicationSingleList = (id) => {
    get("dataprocess/get-singlepublications/"+id).then((response) => {
        setPublication(response.data.publicationlist[0].publication);
        setCirclation(response.data.publicationlist[0].circlation)
        setEdition(response.data.publicationlist[0].edition_id)
        setMediaType(response.data.publicationlist[0].media_type_id)
        setPublicationTypeId(response.data.publicationlist[0].publication_type_id)
        setReadership(response.data.publicationlist[0].readership)
        setWebName(response.data.publicationlist[0].webname)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

  const deletepublications = (id) => {
    
    get("dataprocess/get-singlepubdelete/"+id).then((response) => {
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
      key: 'publication',
      label: 'Publication Name',
      // filter: false,
      // sorter: false,
    },
    
    {
      key: 'edition_id',
      label: 'Editions',
      // filter: false,
      // sorter: false,
    },

    {
      key: 'genre',
      label: 'Genre',
      // filter: false,
      // sorter: false,
    },
    {
      key: 'circlation',
      label: 'Circulation',
      // filter: false,
      // sorter: false,
    },
    {
      key: 'readership',
      label: 'Readership',
      // filter: false,
      // sorter: false,
    },
    {
      key: 'media_type_txt',
      label: 'Media Type',
      // filter: false,
       sorter: true,
    },
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
              <h1>Publication List</h1>
              {/* <button onClick={addPublication} className="btn btn-primary btn-medium">Add Publication</button> */}
              </div>
            <div className="content-box">
            <CSmartTable
      columns={columns}
      columnFilter
      columnSorter
      items={publicationList.map((e, index) => ({
        id: index,
        ...e
      }))}
      pagination
      scopedColumns={{
        action: (list) => (
          <td className='action-btns'><a  href="javascript:void(0)" onClick={e => getPublicationSingleList(list.id)}><EditIcon /></a> 
          &nbsp;&nbsp;&nbsp;<a href="javascript:void(0)"  className='deleicon' onClick={e => deletepublications(list.id)}><DeleteIcon /></a></td>
        ),
        media_type_id: (list) => (
          <td>{list.media_type_id === 2 ? 'Print' : 'Online'}</td>
        ),
        readership: (list) => (
          <td>{list.readership || 'NA'}</td>
        ),
        genre: (list) => (
          <td>{list.genre || 'NA'}</td>
        )
       }}
      tableProps={{
        hover: true,
        responsive: true,
      }}
    />
            {/* <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Publication Name</th>
        <th>Editions</th>
        <th>Genre</th>
        <th>Circulation</th>
        <th>Readership</th>
        <th>Media House</th>
       
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {publicationList?.map((list, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{list.publication}</td>
        <td>{list.edition_id}</td>
        <td>{list.genre || 'NA'}</td>
        <td>{list.circlation}</td>
        <td>{list.readership || 'NA'}</td>
        <td>{list.media_type === 1 ? 'print' : 'online'}</td>
       
        <td className="add-delete">
            <NavLink to="" onClick={e => getPublicationSingleList(list.id)} className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
  ))}
  {publicationList.length === 0 &&
    <tr>
      <td colSpan={13}> No Publication found</td>
    </tr>
  }
    </tbody>
  </table> */}
            </div>
        </>
    )
}