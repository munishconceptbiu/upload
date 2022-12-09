import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';

const Users = () => {
  let navigate = useNavigate();
  const state = store.getState();
  const [userList, setUserList] = useState([]);
  const getUserList = () => {
    get("users/getusers").then((response) => {
      setUserList(response.data.users)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteUser = (id) => {
    deleteMethod("users/deleteuser/" + id).then((response) => {
      toast.success("User successfully deleted");
      getUserList()
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

  // const clientChange = (e) => {
  //   setClientId(e.value)
  //   getUserList(e.value);
  // }

  const addUser = () => {
    navigate("/add-user");
  }
  useEffect(() => {
    getUserList();
  }, []);


  return (
    <>


      {/* <Toaster /> */}
      <div className="page-title">
        <h1 >
          Users
        </h1>
      </div>
      <div style={{ margin: "25px 20px 0 35px", marginTop: "80px" }}>
        <div style={{ "padding": "4px 4px 32px" }}>      <button className="btn btn-success pull-right" style={{ float: "right" }} onClick={addUser}>Add User</button>
        </div>

        {/* <div className='client-section'>
          <label for="country" className="form-label">Select User</label>
          <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
        </div> */}

      </div>
      <div className="view-setting">

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>

              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((list, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{list.username}</td>
               <td>{list.email}</td>
               <td>{list.phone}</td>
                <td ><NavLink to={`/edit-user/${list.id}`}><EditIcon /></NavLink> <a href="javascript:void(0)" onClick={e => deleteUser(list.id)} className='deleicon'><DeleteIcon /></a></td>
              </tr>
            ))}
            {userList.length === 0 &&
              <tr>
                <td colSpan={13}> No setting found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>


    </>

  )
}

export default Users

