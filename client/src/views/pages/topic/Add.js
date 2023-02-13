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

export default function AddTopic(){
    const state = store.getState();
    const params = useParams();
    const navigate = useNavigate();
    const [topic_name, setTopicName] = useState('');
    const [keyword_id, setKeywordId] = useState();
    const saveTopic = async ()  => {

        if (topic_name === "" || topic_name.trim().length === 0) {
            toast.error("theme_name can't be empty");
            return false;
        }
      
        const formData = {
            "topic": topic_name,
            "keyword_id": keyword_id,
            "user_id": state.auth.auth.id,
        }
        const uploadPromise = new Promise((resolve, reject) => {

            post(`dataprocess/add-topic`, formData).then((response) => {
                resolve("Topics Successfully Saved");
                navigate('/topics')
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

      get("keywords/" + inputValue).then((response) => {
        resolve(response.data.keywords.map((e) => ({
          value: e.id,
          label: e.keyword
        })));
      })

    });

  const keywordChange = (e) => {
    setKeywordId(e.value)
  }


const getTopicList = () => {
    get("dataprocess/get-singlekeywordtopiclist/"+params.tid).then((response) => {
        setTopicName(response.data.topiclist[0].topic);
        setKeywordId(response.data.topiclist[0].keyword_id)
    })
      .catch(() => {
        // handleLoginFailure({ status: UNAUTHORIZED });
      })

  }
  const [title, setTitle] = useState('Add')
  useEffect(() => {
    if(params.tid){
        getTopicList();
        setTitle('Edit')
    }
  }, []);

    return(
        <>
        <div class="page-title">
              <h1>{title} Topic</h1>
        </div>
        <div className="content-box edit-pubication">
            <div className="row">
            <div className="col-3">
                <AsyncSelect placeholder="Select Keyword" cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => keywordChange(e)} />

                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Topic Name"   value={topic_name} onChange={e => setTopicName(e.target.value)}  /></div>

                
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
                    <button class="btn btn-primary" onClick={saveTopic}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}