import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditPublication from "../create-edit/EditPublication";


export default function PublicationList(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Publication List</h1>
              <button className="btn btn-primary btn-medium">Add Publication</button></div>
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
        <th>Readership</th>
        <th>Circulation</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>The Indian Express</td>
        <td>Mumbai</td>
        <td>Mainline</td>
        <td>206,433</td>
        <td>Shreya Nandi</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>Prahar (Marathi)</td>
        <td>Mumbai</td>
        <td>Mainline</td>
        <td>125,000</td>
        <td>Kr Srivats</td>
        <td>Bennett</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
        <td>4</td>
        <td>The Economic Times</td>
        <td>Kolkata</td>
        <td>Mainline</td>
        <td>85,000</td>
        <td>Rhythma Kaul</td>
        <td>Coleman and Company</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
        <td>5</td>
        <td>Financial Express</td>
        <td>Hyderabad</td>
        <td>Mainline</td>
        <td>105,800</td>
        <td>Rhythma Kaul</td>
        <td>ET Now Swadesh</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
        <td>6</td>
        <td>Mint</td>
        <td>Kolkata</td>
        <td>Mainline</td>
        <td>93’0000</td>
        <td>Shreya Nandi</td>
        <td>Coleman and Company</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>

      <tr>
        <td>7</td>
        <td>BizzBuzz</td>
        <td>Hyderabad</td>
        <td>Mainline</td>
        <td>206,433</td>
        <td>Shreya Nandi</td>
        <td>Bennett</td>
        <td>NA</td>
        <td>NA</td>
        <td className="add-delete">
            <NavLink to="/Publlicationlist" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
        </>
    )
}