import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditClient from "../create-edit/EditClient";


export default function Client(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Client List</h1>
              <button className="btn btn-primary btn-medium">Add Client</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Categorise the Clients</th>
        <th>Index Calculation</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Tata Motors</td>
        <td>Calculation</td>
        <td className="add-delete">
            <NavLink to="/EditClient" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr> 
    </tbody>
  </table>
            </div>
        </>
    )
}