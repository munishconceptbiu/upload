import React from 'react'
import { HandIcon } from '../../../Icons/icons.component'
import { NavLink, useNavigate } from 'react-router-dom';
function Articlelist(){
    return(
        <>
            <div className='content-box'>
            <div className='row article-list-form'>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4 d-flex'><input type='text' placeholder='Select Client'/> <button className='btn btn-primary btn-medium'>Search</button></div>
                
            </div>
            <div className='row article-list'>
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Article</th>
        <th>Headline</th>
        <th>Publication</th>
        <th>Edition</th>
        <th>Journalist</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>barkhadutt456</td>
        <td>Shreyas treble spurs blue star </td>
        <td>Deccan Herald</td>
        <td>Banglore</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>
      </tr>

      <tr>
        <td>1</td>
        <td>barkhadutt456</td>
        <td>Shreyas treble spurs blue star </td>
        <td>Deccan Herald</td>
        <td>Banglore</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>

      
      
    </tbody>
  </table>
            </div>
            </div>
        </>
    )
}
export default Articlelist