import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, deleteMethod } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
} from "react-reorder";
import move from "lodash-move";
import { useNavigate, useParams } from 'react-router-dom';

export default function AddSpokePerson(){
    const navigate = useNavigate();
    const params = useParams();
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

  const getSpokepersonList = () => {
    get("dataprocess/get-singlespokespersons/"+params.sid).then((response) => {
        setSpokesperson(response.data.spokespersonslist[0].spokesperson_name);
        setDesignation(response.data.spokespersonslist[0].designation)
        setCompanyId(response.data.spokespersonslist[0].company_id)
        setCompanyName(response.data.publicationlist[0].company_name)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  useEffect(() => {
    if(params.sid){
        getSpokepersonList()
    }
  }, []);

    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Spoke Person</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Spokesperson Name"   value={spokesperson_name} onChange={e => setSpokesperson(e.target.value)}  /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Their Designation"  value={designation} onChange={e => setDesignation(e.target.value)}  /></div>
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Member for Industry Platforms"  value={company_id} onChange={e => setCompanyId(e.target.value)}  /></div> */}
                <div className="col-3">
                <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />

                </div>
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Client or Team update"  value={spokesperson_name} onChange={e => setSpokesperson(e.target.value)}  /></div> */}
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Cancel</button>
                    <button class="btn btn-primary" onClick={saveSpokeperson}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}