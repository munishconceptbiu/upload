import React, { useState } from 'react'
import AsyncSelect from 'react-select/async';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, deleteMethod } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
} from "react-reorder";
import move from "lodash-move";
import { useNavigate } from 'react-router-dom';

export default function AddKeyword(){
    const state = store.getState();

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [theme_id, setThemeId] = useState('');
    
    const saveKeyword = async () => {

        if (keyword === "" || keyword.trim().length === 0) {
            toast.error("keyword can't be empty");
            return false;
        }

        if (theme_id === "") {
            toast.error("theme can't be empty");
            return false;
        }
      
        const formData = {
            "keyword": keyword,
            "theme_id": theme_id,
            "user_id": state.auth.auth.id,
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`dataprocess/add-keywords`, formData).then((response) => {
                resolve("Keyword Successfully Saved");
                navigate('/themes')
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

      get("themes/" + inputValue).then((response) => {
        resolve(response.data.themes.map((e) => ({
          value: e.id,
          label: e.theme_name
        })));
      })

    });

  const themeChange = (e) => {
    setThemeId(e.value)
  }

    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Keyword</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Keyword"   value={keyword} onChange={e => setKeyword(e.target.value)}  /></div>

                <div className="col-3">
                <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => themeChange(e)} />

                </div>
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Their Designation"  value={designation} onChange={e => setDesignation(e.target.value)}  /></div> */}
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Member for Industry Platforms"  value={company_id} onChange={e => setCompanyId(e.target.value)}  /></div> */}
                {/* <div className="col-3">
                <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />

                </div> */}
                {/* <div className="col-3"><input className="form-control" type="text" placeholder="Client or Team update"  value={spokesperson_name} onChange={e => setSpokesperson(e.target.value)}  /></div> */}
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Cancel</button>
                    <button class="btn btn-primary" onClick={saveKeyword}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}