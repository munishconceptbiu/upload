import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditEdition from "../create-edit/EditEdition";


export default function Edition(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Edition List</h1>
              <button className="btn btn-primary btn-medium">Add Edition</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>City Name</th>
        <th>State Name</th>
        <th>Zone</th>
        <th>Cluster</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mumbai</td>
        <td>Maharashtra</td>
        <td>West Zone</td>
        <td>NA</td>
        
        <td className="add-delete">
            <NavLink to="/EditEdition" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
      <td>2</td>
        <td>Mumbai</td>
        <td>Maharashtra</td>
        <td>West Zone</td>
        <td>NA</td>
        
        <td className="add-delete">
            <NavLink to="/EditEdition" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
      <td>3</td>
        <td>Mumbai</td>
        <td>Maharashtra</td>
        <td>West Zone</td>
        <td>NA</td>
        
        <td className="add-delete">
            <NavLink to="/EditEdition" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>


      
    </tbody>
  </table>
            </div>
        </>
    )
}