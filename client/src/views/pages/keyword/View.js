import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, put, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';

import AddKeyword from './Add';
import Keyword from './Keyword';

export default function ViewKeyword(){


  let navigate = useNavigate();
  const state = store.getState();
 


  const [title, setTitle] = useState('Add')
  const [isShowAddEdit, setIsShowAddEdit] = useState(false)
  useEffect(() => {
    // getkeywordList();
  }, []);
    return(
        <>
        {isShowAddEdit && 
            <AddKeyword isShowAddEdit={isShowAddEdit} setIsShowAddEdit={setIsShowAddEdit} setTitle={setTitle} title={title} />
        }
            <Keyword isShowAddEdit={isShowAddEdit} setIsShowAddEdit={setIsShowAddEdit} setTitle={setTitle} title={title}/>
        </>
    )
}