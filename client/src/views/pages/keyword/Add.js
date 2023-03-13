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

export default function AddKeyword({ setIsShowAddEdit }){
    const state = store.getState();

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
   
    const [theme_name, setThemeName] = useState('');
    const [topic_name, setTopicName] = useState('');
    const [keyword_id, setKeywordId] = useState();
    const saveKeyword = async () => {

        if(theme_name.trim().length > 0){
            if (theme_company_id === "") {
                toast.error("theme_company_id can't be empty");
                return false;
            }
        }

        if(keyword.trim().length > 0){
            if (keyword_company_id === "" ) {
                toast.error("keyword_company_id can't be empty");
                return false;
            }
            if (theme_keyword_id === "") {
                toast.error("theme_keyword_id can't be empty");
                return false;
            }
        }

        if(topic_name.trim().length > 0){
            if (topic_company_id === "") {
                toast.error("topic_company_id can't be empty");
                return false;
            }
            if (theme_topic_id === "" ) {
                toast.error("topic theme can't be empty");
                return false;
            }

            if (keyword_topic_id === "") {
                toast.error("topic keyword can't be empty");
                return false;
            }
        }
       
        const uploadPromise = new Promise((resolve, reject) => {
            
            if(theme_name.trim().length > 0){

                const formThemeData = {
                    "client_id": theme_company_id,
                    "theme_name": theme_name,
                    "user_id": state.auth.auth.id,
                }
                post(`dataprocess/add-theme`, formThemeData).then((response) => {
                    resolve("Theme Successfully Saved");
                }).catch((err) => {
                    reject(err.response.data.error)
                })
            }
            if(keyword.trim().length > 0){
                const formKeywordData = {
                    "keyword": keyword,
                    "theme_id": theme_keyword_id,
                    "user_id": state.auth.auth.id,
                }
                post(`dataprocess/add-keywords`, formKeywordData).then((response) => {
                    resolve("Keyword Successfully Saved");
                }).catch((err) => {
                    reject(err.response.data.error)
                })
            }
            if(topic_name.trim().length > 0){
                const formTopicData = {
                    "keyword_id": keyword_topic_id,
                    "topic": topic_name,
                    "user_id": state.auth.auth.id,
                }
                post(`dataprocess/add-topic`, formTopicData).then((response) => {
                    resolve("Keyword Successfully Saved");
                }).catch((err) => {
                    reject(err.response.data.error)
                })
            }
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

    const promiseKeywordOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      post("themes/" + inputValue, {client_id: keyword_company_id}).then((response) => {
        resolve(response.data.themes.map((e) => ({
          value: e.id,
          label: e.theme_name
        })));
      })

    });

    const promiseTopicOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      post("themes/" + inputValue, {client_id: topic_company_id}).then((response) => {
        resolve(response.data.themes.map((e) => ({
          value: e.id,
          label: e.theme_name
        })));
      })

    });
    

 

  const promiseClientOptions = (inputValue) =>
  new Promise((resolve) => {
    inputValue = inputValue || 'a'

    get("artical/get-setting-clientlist/" + inputValue).then((response) => {
      resolve(response.data.client.map((e) => ({
        value: e.client_id,
        label: e.client_name
      })));
    })

  });

  const [theme_company_id, setThemeCompanyId] = useState('');
  const [theme_company_name, setThemeCompanyName] = useState('');

    const clientThemeChange = (e) => {
        setThemeCompanyId(e.value)
        setThemeCompanyName(e.label);
    }

    const [keyword_company_id, setKeywordCompanyId] = useState('');
  const [keyword_company_name, setKeywordCompanyName] = useState('');

    const clientKeywordChange = (e) => {
        setKeywordCompanyId(e.value)
        setKeywordCompanyName(e.label);
    }

    const [topic_company_id, setTopicCompanyId] = useState('');
    const [topic_company_name, setTopicCompanyName] = useState('');
  
      const clientTopicChange = (e) => {
        setTopicCompanyId(e.value)
        setTopicCompanyName(e.label);
      }

      const [theme_keyword_id, setThemeKeywordId] = useState('');
    const themeKeywordChange = (e) => {
        setThemeKeywordId(e.value)
    }

  const [theme_topic_id, setThemeTopicId] = useState('');
  const themeTopicChange = (e) => {
    setThemeTopicId(e.value)
  }
  const [keyword_topic_id, setKeywordTopicId] = useState('');
  const keywordChange = (e) => {
    setKeywordTopicId(e.value)
  }
  
  const promiseKeywordTopicOptions = (inputValue) =>
    new Promise((resolve) => {
      inputValue = inputValue || 'a'

      post("keywords/" + inputValue, {theme_id: theme_topic_id}).then((response) => {
        resolve(response.data.keywords.map((e) => ({
          value: e.id,
          label: e.keyword
        })));
      })

    });
    return(
        <>
        <div class="page-title">
              <h1>Add Keyword</h1>
        </div>

        <div className="content-box edit-pubication">
            <div className="row">
            <div className="col-3">
                <AsyncSelect  placeholder="Select Client" cacheOptions defaultOptions loadOptions={promiseClientOptions} onChange={e => clientThemeChange(e)} />
                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Theme"    onChange={e => setThemeName(e.target.value)}  /></div>
            </div>
            {/* <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray">Cancel</button>
                    <button class="btn btn-primary" onClick={saveKeyword}>Submit</button>
                </div>
            </div> */}
        
            <div className="row">
            <div className="col-3">
                <AsyncSelect  placeholder="Select Client" cacheOptions defaultOptions loadOptions={promiseClientOptions} onChange={e => clientKeywordChange(e)} />
                </div>
            <div className="col-3">
                
                <AsyncSelect placeholder="Select Theme" cacheOptions defaultOptions loadOptions={promiseKeywordOptions} onChange={e => themeKeywordChange(e)} />

                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Keyword"   value={keyword} onChange={e => setKeyword(e.target.value)}  /></div>
            </div>

            <div className="row">
            <div className="col-3">
                <AsyncSelect  placeholder="Select Client" cacheOptions defaultOptions loadOptions={promiseClientOptions} onChange={e => clientTopicChange(e)} />
                </div>
            <div className="col-3">
                
                <AsyncSelect placeholder="Select Theme" cacheOptions defaultOptions loadOptions={promiseTopicOptions} onChange={e => themeTopicChange(e)} />

                </div>

                <div className="col-3">
                
                <AsyncSelect placeholder="Select Keyword" cacheOptions defaultOptions loadOptions={promiseKeywordTopicOptions} onChange={e => keywordChange(e)} />

                </div>
                <div className="col-3"><input className="form-control" type="text" placeholder="Topic"    onChange={e => setTopicName(e.target.value)}  /></div>
            </div>
            <div className="row mt-20">
                <div className="col-12">
                    <button class="btn btn-gray" onClick={() => setIsShowAddEdit(false)}>Close</button>
                    <button class="btn btn-primary" onClick={saveKeyword}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}