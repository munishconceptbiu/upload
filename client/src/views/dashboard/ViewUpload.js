import React, { Component, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';

import moment from 'moment';
import { store } from '../../store/store';

import axios from 'axios';
import { get , post } from "../../services/CommanService";
import AppHeader from '../../components/AppHeader';
import toast, { Toaster } from 'react-hot-toast';

const ViewUpload = () => {
  const state = store.getState();
  console.log('state', state)
  
    const [uploadList, setUploadList] = useState([]);
    const [client_id, setClientId] = useState()

    const getUploadList = (cid) => {
      const id = cid || client_id || state?.auth?.auth?.id
      get("artical/viewlist/"+ id).then((response) => {
        console.log('response', response)
        setUploadList(response.data.data)
          })
          .catch(() => {
            // handleLoginFailure({ status: UNAUTHORIZED });
          })
          
    }

    const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      get("artical/getclientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })

    });

  const clientChange = (e) => {
    setClientId(e.value)
    getUploadList(e.value);
  }
    

    useEffect(() => {
        getUploadList();
      }, []);
    return (
        <>
        <div className="page-title">
            <h1 >
              View Upload
            </h1>
            </div>
            <div style={{ margin: "25px 20px 0 35px", marginTop: "80px" }}>
        {/* <div style={{ "padding": "4px 4px 32px" }}>      <button class="btn btn-success pull-right" style={{ float: "right" }} onClick={addSetting}>Add Setting</button>
        </div> */}

        <div className='client-section'>
          <label for="country" class="form-label">Select Client</label>
          <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
        </div>

      </div>
    <div class="">
      <div class="view-setting">
        
        <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          {/* <th>Email</th> */}
          <th>Client Name</th>
          <th>Report Start Date</th>
          <th>Report End Date</th>
          <th>File Link</th>
          <th>Uploaded By</th>
          <th>Uploaded At</th>
        </tr>
      </thead>
      <tbody>
        {uploadList?.map((list, index) => (
        <tr>
          <td>{index+1}</td>
          {/* <td>{list.email}</td> */}
          <td>{list.client_name}</td>
          <td>{list.start_date}</td>
          <td>{list.end_date}</td>
          <td><a href={list.file} target="_blank">{list.filename}</a></td>
          <td>{list.username}</td>
          <td>{moment(list.createdAt).format('lll')}</td>
        </tr>
       ))}
      </tbody>
    </table>
      </div>
    </div>
  </>

    )
}

export default ViewUpload

