import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditWtgMaster from "../create-edit/EditWtgMaster";


export default function WtgMaster(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Wtg Master for Index Calculation List</h1>
              <button className="btn btn-primary btn-medium">Add Wtg</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Photos</th>
        <th>Headline</th>
        <th>Front Page</th>
        <th>Spokeperson Profiling</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Photos</td>
        <td>Concept BIu</td>
        <td>Mainline</td>
        <td>NA</td>
        
        <td className="add-delete">
            <NavLink to="/EditKeyword" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tata Motors</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/EditKeyword" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/EditKeyword" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>


      
    </tbody>
  </table>
            </div>
        </>
    )
}