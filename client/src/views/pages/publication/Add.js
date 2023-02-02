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


export default function AddPublication(){

    const navigate = useNavigate();
    const params = useParams();
    const [publication, setPublication] = useState('');
    const [media_type, setMediaType] = useState('');
    const [publication_type_id, setPublicationTypeId] = useState('');
    const [edition_id, setEdition] = useState('');

    const [readership, setReadership] = useState('');
    const [circlation, setCirclation] = useState('');
    const [webname, setWebName] = useState('');

    const savePublication = async () => {

        if (publication === "" || publication.trim().length === 0) {
            toast.error("publication can't be empty");
            return false;
        }
        if (media_type === "") {
            toast.error("media_type can't be empty");
            return false;
        }
        if (publication_type_id === "") {
            toast.error("publication_type_id can't be empty");
            return false;
        }
        if (edition_id === "") {
            toast.error("edition_id can't be empty");
            return false;
        }

        if (readership === "") {
            toast.error("readership can't be empty");
            return false;
        }
        if (circlation === "") {
            toast.error("circlation can't be empty");
            return false;
        }
        if (webname === "" || webname.trim().length === 0) {
            toast.error("webname can't be empty");
            return false;
        }


        const formData = {
            "webname": webname,
            "circlation": circlation,
            "readership": readership,
            "edition_id": edition_id,
            "publication_type_id": publication_type_id,
            "media_type": media_type,
            "publication": publication
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`dataprocess/add-publication`, formData).then((response) => {
                resolve("Publication Successfully Saved");
                navigate('/publications')
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

      get("editions/" + inputValue).then((response) => {
        resolve(response.data.editions.map((e) => ({
          value: e.id,
          label: e.edition_name
        })));
      })

    });

  const editionChange = (e) => {
    setEdition(e.value)
  }

  const getPublicationList = () => {
    get("dataprocess/get-singlepublications/"+params.pid).then((response) => {
        setPublication(response.data.publicationlist[0].publication);
        setCirclation(response.data.publicationlist[0].circlation)
        setEdition(response.data.publicationlist[0].edition_id)
        setMediaType(response.data.publicationlist[0].media_type_id)
        setPublicationTypeId(response.data.publicationlist[0].publication_type_id)
        setReadership(response.data.publicationlist[0].readership)
        setWebName(response.data.publicationlist[0].webname)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }

  useEffect(() => {
    if(params.pid){
        getPublicationList()
    }
  }, []);

    return(
        <>
        <div class="page-title d-flex justify-content-between">
              <h1>Add/Edit Publication</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication" value={publication} onChange={e => setPublication(e.target.value)} /></div>
                <div className="col-3">
                <AsyncSelect  cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => editionChange(e)} />

                    
                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Webname" value={webname} onChange={e => setWebName(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Circulation" value={circlation} onChange={e => setCirclation(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Readership" value={readership} onChange={e => setReadership(e.target.value)} /></div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Publication Type Id" value={publication_type_id} onChange={e => setPublicationTypeId(e.target.value)} /></div>
                <div className="col-3">
                    <select className="form-control" type="text" placeholder="Media House" onChange={e => setMediaType(e.target.value)} >
                        <option value="">Media House</option>
                        <option value="1">Print</option>
                        <option value="2">Online</option>
                    </select>
                    </div>
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Reset</button>
                    <button class="btn btn-primary" onClick={savePublication}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}