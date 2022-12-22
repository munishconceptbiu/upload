import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditSpokePerson from "../create-edit/EditSpokePerson";


export default function Spokeperson(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Spoke Person List</h1>
              <button className="btn btn-primary btn-medium">Add Spoke person</button></div>
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
      <tr>
        <td>1</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/SpokePerson" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>


      <tr>
      <td>2</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/SpokePerson" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
      <td>3</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/SpokePerson" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
      <td>4</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/SpokePerson" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
      <td>5</td>
        <td>The Indian Express</td>
        <td>Jounalist</td>
        <td>Mainline</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/SpokePerson" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
        </>
    )
}