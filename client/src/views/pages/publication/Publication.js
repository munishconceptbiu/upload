
import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';

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
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Publication List</h1>
              {/* <button onClick={addPublication} className="btn btn-primary btn-medium">Add Publication</button> */}
              </div>
            <div className="content-box">
            <table class="table">
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
  </table>
            </div>
        </>
    )
}