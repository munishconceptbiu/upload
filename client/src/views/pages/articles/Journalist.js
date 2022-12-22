import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditJournalist from "../create-edit/EditJournalist";


export default function Journalist(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Journalist List</h1>
              <button className="btn btn-primary btn-medium">Add Journalist</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Journalist Name</th>
        <th>Contact Number</th>
        <th>Email ID</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>barkhadutt456</td>
        <td>+91 8974 9654</td>
        <td>barkha@gmail.com</td>
        <td className="add-delete">
            <NavLink to="/EditJournalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Amit</td>
        <td>+91 8974 9654</td>
        <td>amit@gmail.com</td>
        <td className="add-delete">
            <NavLink to="/EditJournalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>concept biu</td>
        <td>+91 8974 9654</td>
        <td>conceptbiu@gmail.com</td>
        <td className="add-delete">
            <NavLink to="/EditJournalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>barkhadutt456</td>
        <td>+91 8974 9654</td>
        <td>barkha@gmail.com</td>
        <td className="add-delete">
            <NavLink to="/EditJournalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>barkhadutt456</td>
        <td>+91 8974 9654</td>
        <td>barkha@gmail.com</td>
        <td className="add-delete">
            <NavLink to="/EditJournalist" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="Journalist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
        </>
    )
}