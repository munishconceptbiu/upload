import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import { store } from '../../../store/store';
import { DeleteIcon } from "../../../Icons/icons.component";

import { get , deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';

const ViewUpload = () => {
  const state = store.getState();
  
    const [uploadList, setUploadList] = useState([]);
    const [client_id, setClientId] = useState()

    const getUploadList = (cid) => {
      const id = cid || client_id || ""
      get("artical/viewlist/"+ state?.auth?.auth?.id +"/?client_id="+ id).then((response) => {
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
    
  const deleteUpload= (id) => {
      const uploadPromise = new Promise((resolve, reject) => {

        deleteMethod(`artical/delete-upload/${id}`).then((response) => {
          resolve("Upload Successfully deleted");
          getUploadList()
        }).catch((err) => {
            reject(err.response.data.error)
        })
    });
    toast.promise(
        uploadPromise,
        {
            loading: 'deleting ...',
            success: (data) => `${data}`,
            error: (err) => `This just happened: ${err}`,
        },
        {
            style: {
                minWidth: '250px',
            },

        }
    );
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [uploadNMArticleList, setUploadNMArticleList] = useState([]);
  const getNMArticleList = (id) => {
    get("artical/view-not-matching-upload-list/" + id).then((response) => {
      handleShow();

      setUploadNMArticleList(response.data.list)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

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
        {/* <div style={{ "padding": "4px 4px 32px" }}>      <button className="btn btn-success pull-right" style={{ float: "right" }} onClick={addSetting}>Add Setting</button>
        </div> */}

        <div className='client-section'>
          <label htmlFor="country" className="form-label">Select Client</label>
          <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
        </div>

      </div>
    <div className="">
      <div className="view-setting">
        
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
          <th> Uploaded Article Count </th>
          <th> Mismatch Article Count </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {uploadList?.map((list, index) => (
        <tr  key={index}>
          <td>{index+1}</td>
          {/* <td>{list.email}</td> */}
          <td>{list.client_name}</td>
          <td>{list.start_date}</td>
          <td>{list.end_date}</td>
          <td><a href={list.file} target="_blank">{list.filename}</a></td>
          <td>{list.username}</td>
          <td>{moment(list.createdAt).format('lll')}</td>
          <td>{list.total_article}</td>
          <td>{list.nm_total_article === 0 && <span> - </span> } 
          {list.nm_total_article > 0 && <span onClick={e => getNMArticleList(list.id)} title='view' style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>{list.nm_total_article}</span> } </td>
          <td > {list.user_id === state.auth.auth.id && <a href="#" onClick={e => deleteUpload(list.id)} className='deleicon'><DeleteIcon /></a> }  {list.user_id !== state.auth.auth.id && <span>-</span>} </td>
        </tr>
       ))}
      </tbody>
    </table>
      </div>
    </div>

    
    <Modal show={show} onHide={handleClose}>
          <>
            <Modal.Header closeButton>
              <Modal.Title>Not Matcing Articles</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="container ">
                <div className="row">
                  <div className="col-9">
                  <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          {/* <th>Email</th> */}
          <th>Client Name</th>
          <th>Client Id</th>
          <th>Article Id</th>
          <th>Entity Name</th>
         
        </tr>
      </thead>
      <tbody>
        {uploadNMArticleList?.map((list, index) => (
        <tr  key={index}>
          <td>{index+1}</td>
          <td>{list.client_name}</td>
          <td>{list.client_id}</td>
          <td>{list.article_id}</td>
          <td>{list.entity_name}</td>
        </tr>
       ))}
      </tbody>
    </table>

                  </div>

                </div>
              </div>

            </Modal.Body>
          </>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
  </>

    )
}

export default ViewUpload

