import React from 'react'
import { CalendarIcon, HandIcon } from '../../../Icons/icons.component'
import { NavLink, useNavigate } from 'react-router-dom';
import '../../../components/main.css'


function Articlelist(){
    return(
        <>
        <div className="page-title">
<<<<<<< HEAD
                <h1 >
                    Article List
                </h1>
            </div>
            <div className='content-box'>
            <div className='row article-list-form'>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Entity'/></div>
                <div className='col-4 d-flex'><span className='d-flex aldatepicker'><input type='text' placeholder='Date Range'/><CalendarIcon/> </span> <button className='btn btn-primary btn-medium'>Search</button></div>
=======
        <h1 >
          Article List
        </h1>
      </div>
            <div className='uqr-contents'>
            <div className='row article-list-form'>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4 mt-10'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4 d-flex mt-10'><input type='text' placeholder='Select Client'/> <button className='btn btn-primary btn-medium'>Search</button></div>
>>>>>>> 3ccd09ded76f7ebefc765287bbc25b820c1b834e
                
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
        <td><NavLink to="/Qualitative" className="nav-link" title="Qualitative" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>
      </tr>

      <tr>
        <td>2</td>
        <td>amit675</td>
        <td>CM Presented FIH mens hockey world </td>
        <td>Dumani Mail</td>
        <td>Mumbai</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>

      <tr>
        <td>3</td>
        <td>conceptbiu436</td>
        <td>CM Purchases Hockey</td>
        <td>Free Press</td>
        <td>Delhi</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>
      <tr>
        <td>4</td>
        <td>barkhadutt456</td>
        <td>Ticket TO WC</td>
        <td>Orissa Post</td>
        <td>Banglore</td>
        <td>Barkha Dutt</td>
        <td><NavLink to="/Articlelist" className="nav-link" title="Articlelist" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><HandIcon /></span></NavLink></td>

      </tr>
      <tr>
        <td>5</td>
        <td>amit675</td>
        <td>Shreyas treble spurs blue star </td>
        <td>Orissa Post</td>
        <td>Delhi</td>
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