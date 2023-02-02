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

export default function AddTheme(){
    const state = store.getState();
    const params = useParams();
    const navigate = useNavigate();
    const [theme_name, setThemeName] = useState('');
    
    const saveSpokeperson = async () => {

        if (theme_name === "" || theme_name.trim().length === 0) {
            toast.error("theme_name can't be empty");
            return false;
        }
      
        const formData = {
            "theme_name": theme_name,
            "user_id": state.auth.auth.id,
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`dataprocess/add-theme`, formData).then((response) => {
                resolve("Theme Successfully Saved");
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

      get("artical/get-setting-clientlist/" + inputValue).then((response) => {
        resolve(response.data.client.map((e) => ({
          value: e.id,
          label: e.client_name
        })));
      })

    });

//   const clientChange = (e) => {
//     setCompanyId(e.value)
//     setCompanyName(e.label);
//   }

const getThemeList = () => {
    get("dataprocess/get-singlethemelist/"+params.tid).then((response) => {
        setThemeName(response.data.themelist[0].theme_name);
        // setDesignation(response.data.themelist[0].designation)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  useEffect(() => {
    if(params.tid){
        getThemeList()
    }
  }, []);

    return(
        <>
        <div class="page-title">
              <h1>Add/Edit Theme</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Theme Name"   value={theme_name} onChange={e => setThemeName(e.target.value)}  /></div>
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
                    <button class="btn btn-primary" onClick={saveSpokeperson}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}