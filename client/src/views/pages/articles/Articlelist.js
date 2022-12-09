import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Articlelist(){
    return(
        <>
            <h3>Articles Lists</h3>
            <div className='row'>
                <div className='col-4'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4'><input type='text' placeholder='Select Client'/></div>
                <div className='col-4'><button className='btn btn-success pull-right'>Submit</button></div>
            </div>
            <div className='row'>
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
        <td>Action</td>

      </tr>
      
    </tbody>
  </table>
            </div>
        </>
    )
}
export default Articlelist