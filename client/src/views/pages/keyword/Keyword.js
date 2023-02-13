import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';


export default function Keyword(){


  let navigate = useNavigate();
  const state = store.getState();
  const [keywordList, setKeywordList] = useState([]);
  const getkeywordList = () => {
    get("dataprocess/get-keywordlist/").then((response) => {
        setKeywordList(response.data.keywordlist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteSpokeperson = (id) => {
    deleteMethod("users/deleteuser/" + id).then((response) => {
      toast.success("User successfully deleted");
      getkeywordList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }


  const addKeyword = () => {
    navigate("/add-keyword");
  }
  useEffect(() => {
    getkeywordList();
  }, []);
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Keyword List</h1>
              <button onClick={addKeyword} className="btn btn-primary btn-medium">Add Keyword</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Keyword Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {keywordList?.map((list, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{list.keyword}</td>
        <td className="add-delete">
            <NavLink to="/" className="nav-link" title="PublilcationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            {/* <NavLink to="" className="nav-link" title="PublicationList" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink> */}
        </td>
      </tr>
  ))}
  {keywordList.length === 0 &&
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