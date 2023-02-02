import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';


export default function Topic(){


  let navigate = useNavigate();
  const state = store.getState();
  const [topicList, setSpokepersonList] = useState([]);
  const getTopicList = () => {
    get("dataprocess/get-topiclist/").then((response) => {
        setSpokepersonList(response.data.topiclist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteSpokeperson = (id) => {
    deleteMethod("users/deleteuser/" + id).then((response) => {
      toast.success("User successfully deleted");
      getTopicList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }


  const addSpokeperson = () => {
    navigate("/add-topic");
  }
  useEffect(() => {
    getTopicList();
  }, []);
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Topic List</h1>
              <button onClick={addSpokeperson} className="btn btn-primary btn-medium">Add Topic</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Topic Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {topicList?.map((list, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{list.topic}</td>
       
        <td className="add-delete">
            <NavLink to="/" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
  ))}
  {topicList.length === 0 &&
    <tr>
      <td colSpan={13}> No Spokesperson found</td>
    </tr>
  }
    </tbody>
  </table>
            </div>
        </>
    )
}