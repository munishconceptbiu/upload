import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';


import "react-datepicker/dist/react-datepicker.css";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
} from "react-reorder";
import move from "lodash-move";
import { useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {
    const state = store.getState();
    const navigate = useNavigate();
    const params = useParams();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const saveUser = async () => {

        if (username === "" || username.trim().length === 0) {
            toast.error("Username can't be empty");
            return false;
        }
        if (email === "" || email.trim().length === 0) {
            toast.error("Email can't be empty");
            return false;
        }
        if (phone === "" || phone.trim().length === 0) {
            toast.error("Phone can't be empty");
            return false;
        }
        
        const formData = {
            "username": username,
            "email": email,
            "name": username,
            "phone": phone,
            "role": "moderator"
        }
        if (password.trim().length > 0) {
            formData.password = password
        }
        const uploadPromise = new Promise((resolve, reject) => {

            put(`http://qa.conceptbiu.com/unifiedapi/users/updateuser/${params.user_id}`, formData).then((response) => {
                resolve("User Successfully Upadted");
                navigate('/view-users')
            }).catch((err) => {
                reject(err.response.data.error)
            })
        });
        toast.promise(
            uploadPromise,
            {
                loading: 'updating ...',
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
    const getSingleUser = (id) => {
        const cid = id
        get("users/getuser/" + cid).then((response) => {
           setEmail(response.data.user.email)
           setPhone(response.data.user.phone)
           setUsername(response.data.user.username)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    useEffect(() => {
        getSingleUser(params.user_id)
    }, [params.user_id]);

    return (
        <>

            <div className="page-title">
                <h1 >
                    Edit User
                </h1>
            </div>
            <div className="uqr-contents">

                <div className="container-fluid">
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">

                            <div className="col-6 ">
                                <label htmlFor="username" className="form-label">Username </label>
                                <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="" />

                            </div>
                            <div className="col-6 ">
                                <label htmlFor="email" readonly className="form-label">Email </label>
                                <input type="text" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="" />

                            </div>
                            <div className="col-6 ">
                                <label htmlFor="phone" className="form-label">Phone </label>
                                <input type="text" className="form-control" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="" />

                            </div>
                            <div className="col-6 ">
                                <label htmlFor="password" className="form-label">Password </label>
                                <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="" />

                            </div>



                        </div>

                        <br></br>

                        <button className="btn btn-primary btn-medium" type="button" onClick={e => saveUser()}>Save</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default EditUser

