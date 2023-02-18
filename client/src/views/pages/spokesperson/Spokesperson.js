import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';


export default function Spokeperson({ spokepersonList, setSpokesperson, setDesignation , setCompanyId, setCompanyName}){

  const getSpokepersonSingleList = (id) => {
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
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Spoke Person List</h1>
              {/* <button onClick={addSpokeperson} className="btn btn-primary btn-medium">Add Spoke person</button> */}
              </div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Spokesperson Name</th>
        <th>Their Designation</th>
        <th>Member for Industry Platforms</th>
        <th>Suggested by whom</th>
        <th>Client or Team update</th>
        <th>Created On</th>
        <th>Created By</th>
        <th>Last Modified On</th>
        <th>Last Modified By</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {spokepersonList?.map((list, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{list.spokesperson_name}</td>
        <td>{list.designation}</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>{list.company_name}</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to={`/edit-spokeperson/${list.id}`} className="nav-link" title="edit" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="delete" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
  ))}
  {spokepersonList.length === 0 &&
    <tr>
      <td colSpan={13}> No Spokesperson found</td>
    </tr>
  }
    </tbody>
  </table>
            </div>
        </>
    )
}