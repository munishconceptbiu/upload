import React from "react";
import { NavLink } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../../../Icons/icons.component";
import EditWtgMaster from "../create-edit/EditWtgMaster";


export default function Product(){
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Product List</h1>
              <button className="btn btn-primary btn-medium">Add Wtg</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Product Name</th>
        <th>Product Keyword</th>
        <th>Product Category</th>
        <th>Product Profiling</th>
        <th>Product Event</th>
        <th>Product Attribute</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Product</td>
        <td>Keyword</td>
        <td>Category</td>
        <td>Profiling</td>
        <td>Event</td>
        <td>Attribute</td>
        <td className="add-delete">
            <NavLink to="/EditKeyword" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
      <td>2</td>
        <td>Product</td>
        <td>Keyword</td>
        <td>Category</td>
        <td>Profiling</td>
        <td>Event</td>
        <td>Attribute</td>
        <td className="add-delete">
            <NavLink to="/EditKeyword" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
      <tr>
      <td>3</td>
        <td>Product</td>
        <td>Keyword</td>
        <td>Category</td>
        <td>Profiling</td>
        <td>Event</td>
        <td>Attribute</td>
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