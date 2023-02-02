import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';


export default function Theme(){


  let navigate = useNavigate();
  const state = store.getState();
  const [themeList, setThemeList] = useState([]);
  const getThemeList = () => {
    get("dataprocess/get-themelist/").then((response) => {
        setThemeList(response.data.themelist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteSpokeperson = (id) => {
    deleteMethod("users/deleteuser/" + id).then((response) => {
      toast.success("User successfully deleted");
      getThemeList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }


  const addTheme = () => {
    navigate("/add-theme");
  }
  useEffect(() => {
    getThemeList();
  }, []);
    return(
        <>
            <div class="page-title d-flex justify-content-between">
              <h1>Theme List</h1>
              <button onClick={addTheme} className="btn btn-primary btn-medium">Add Theme</button></div>
            <div className="content-box">
            <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Theme Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {themeList?.map((list, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{list.theme_name}</td>
        <td className="add-delete">
            <NavLink to={`/edit-theme/${list.id}`} className="nav-link" title="edit" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><EditIcon /></span></NavLink>
            <NavLink to="" className="nav-link" title="delete" data-bs-toggle="tooltip" data-bs-placement="right"><span className='tabicon'><DeleteIcon /></span></NavLink>
        </td>
      </tr>
  ))}
  {themeList.length === 0 &&
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