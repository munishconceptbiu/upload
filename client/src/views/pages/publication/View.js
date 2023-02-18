
import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditIcon, DeleteIcon } from "../../../Icons/icons.component";
import { get, post, deleteMethod } from "../../../services/CommanService";
import toast from 'react-hot-toast';
import { useNavigate, NavLink } from 'react-router-dom';
import { store } from '../../../store/store';
import  AddPublication  from './Add';
import  PublicationList from './Publication'


export default function ViewPublication(){


    let navigate = useNavigate();
    const state = store.getState();
    const [publicationList, setPublicationList] = useState([]);
    const getPublicationList = () => {
      get("dataprocess/get-publicationlist/").then((response) => {
        setPublicationList(response.data.publicationlist)
      })
        .catch(() => {
          // handleLoginFailure({ status: UNAUTHORIZED });
        })
  
    }
  
    const deletePublication = (id) => {
      deleteMethod("users/deleteuser/" + id).then((response) => {
        toast.success("User successfully deleted");
        getPublicationList()
      })
        .catch(() => {
          // handleLoginFailure({ status: UNAUTHORIZED });
        })
    }
  
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
                setPublication('')
                setMediaType('')
                setPublicationTypeId('')
                setReadership('')
                setEdition('')
                setCirclation('')
                getPublicationList()
                setWebName('')
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

  
  const [title, setTitle] = useState('Add')
 
    useEffect(() => {
      getPublicationList();
        // if(params.pid){
        //     getPublicationSingleList()
        //     setTitle('Edit')
        // }
    }, []);
  
    return(
        <>
         <AddPublication  savePublication={savePublication}   setPublication={setPublication} setCirclation={setCirclation} setEdition={setEdition} setMediaType={setMediaType} setPublicationTypeId={setPublicationTypeId} setReadership={setReadership} setWebName={setWebName} promiseOptions={promiseOptions} publication={publication} media_type={media_type} publication_type_id={publication_type_id} edition_id={edition_id} readership={readership} circlation={circlation} webname={webname} editionChange={editionChange} title={title} />
         <PublicationList publicationList={publicationList}  setPublication={setPublication} setCirclation={setCirclation} setEdition={setEdition} setMediaType={setMediaType} setPublicationTypeId={setPublicationTypeId} setReadership={setReadership} setWebName={setWebName} />
        </>
    )
}