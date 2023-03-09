import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, post, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';
import AddSpokePerson from './Add';
import Spokeperson from './Spokesperson';
export default function ViewSpokeperson(){


  let navigate = useNavigate();
  const state = store.getState();
  const [spokepersonList, setSpokepersonList] = useState([]);
  const getSpokepersonList = () => {
    get("dataprocess/get-spokespersonslist/").then((response) => {
        setSpokepersonList(response.data.spokespersonslist)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  const deleteSpokeperson = (id) => {
    deleteMethod("dataprocess/get-singlespokdelete/" + id).then((response) => {
      toast.success("Spokesperson successfully deleted");
      getSpokepersonList()
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })
  }

    const [spokesperson_name, setSpokesperson] = useState('');
    const [designation, setDesignation] = useState('');
    const [company_id, setCompanyId] = useState('');
    const [company_name, setCompanyName] = useState('');

    const saveSpokeperson = async () => {

        if (spokesperson_name === "" || spokesperson_name.trim().length === 0) {
            toast.error("spokesperson_name can't be empty");
            return false;
        }
        if (designation === "" || designation.trim().length === 0) {
            toast.error("designation can't be empty");
            return false;
        }
        if (company_id === "") {
            toast.error("company_id can't be empty");
            return false;
        }
        if (company_name === "" || company_name.trim().length === 0) {
            toast.error("company_name can't be empty");
            return false;
        }

        const formData = {
            "company_name": company_name,
            "company_id": company_id,
            "designation": designation,
            "spokesperson_name": spokesperson_name,
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`dataprocess/add-spokespersons`, formData).then((response) => {
                resolve("Spokessperson Successfully Saved");
                navigate('/spokepersons')
            }).catch((err) => {
                reject(err.response.data.error)
            })
        });
        toast.promise(
            uploadPromise,
            {
                loading: 'saving ...',
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

    const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      get("artical/get-setting-clientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })

    });

  const clientChange = (e) => {
    setCompanyId(e.value)
    setCompanyName(e.label);
  }

  
  const [title, setTitle] = useState('Add')
  
  useEffect(() => {
    getSpokepersonList();
  }, []);
    return(
        <>
            <AddSpokePerson title={title} clientChange={clientChange} promiseOptions={promiseOptions} setSpokesperson={setSpokesperson} setCompanyName={setCompanyName} setDesignation={setDesignation} setCompanyId={setCompanyId}  saveSpokeperson={saveSpokeperson}  spokesperson_name={spokesperson_name} designation={designation} company_id={company_id} company_name={company_name} />
            <Spokeperson spokepersonList={spokepersonList} setCompanyName={setCompanyName} setSpokesperson={setSpokesperson} setDesignation={setDesignation} setCompanyId={setCompanyId} />
        </>
    )
}