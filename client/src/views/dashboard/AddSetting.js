import React, { Component, useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import swal from 'sweetalert';
import AppHeader from '../../components/AppHeader'
import toast, { Toaster } from 'react-hot-toast';

import { ProgressBar } from "react-bootstrap"

import axios from 'axios';
import { get, post } from "../../services/CommanService";
import myData from '../../assets/geoJson/client.json';
import { store } from '../../store/store';

const graphType = [
    {
        label: 'Share of Voice',
        value: 1,
    },
    {
        label: 'Thematic Analysis',
        value: 2
    },
    {
        label: 'Geographical Spread',
        value: 3
    },
    {
        label: 'Journalist',
        value: 4
    },
    {
        label: 'Spokesperson',
        value: 5
    },
    {
        label: 'Sentiment',
        value: 6
    },
    {
        label: 'Keyword Analysis',
        value: 7
    },
    {
        label: 'Publication',
        value: 8
    },
    {
        label: 'Visibility',
        value: 9
    }

]
const AddSetting = () => {
    const state = store.getState();
    const [clientList, setClientList] = useState([]);
    const [setting, setSetting] = useState([])

    const [client_id, setClientId] = useState()
    const [client_name, setClientName] = useState()

    const [isLoading, setIsLoading] = useState(false)
    const [graphTypes, setGraphTypes] = useState(graphType)
    const [graphTypeName, setGraphTypeName] = useState()
    const [entityLevel, setEntityLevel] = useState(false)
    const [publicationLevel, setPublicationLevel] = useState(false)
    const [journalistLevel, setjournalistLevel] = useState(false)
    const [cityLevel, setCityLevel] = useState(false)
    const [keywordLevel, setKeywordLevel] = useState(false)
    const [spokespersonLevel, setSpokespersonLevel] = useState(false);
    const [profilingLevel, setProfilingLevel] = useState(false);
    const [visibilityLevel, setVisibilityLevel] = useState(false)
    const [topicLevel, setTopicLevel] = useState(false)
    const [graphTypeId, setGraphTypeId] = useState()

    const clientChange = (e) => {
        setClientName(e.label);
        setClientId(e.value)
    }
    const emptyLevel = () => {
        setCityLevel(false);
        setEntityLevel(false)
        setPublicationLevel(false)
        setjournalistLevel(false)
        setKeywordLevel(false)
        setSpokespersonLevel(false)
        setProfilingLevel(false);
        setVisibilityLevel(false)
        setTopicLevel(false)
    }

    const setGraphTypeChange = (e) => {
        setGraphTypeId(e.target.value)
        setGraphTypeName(graphTypes[e.target.value - 1].label)
        emptyLevel()
    }

   
    const addSetting = () => {
        if(client_id === ""){
            toast.error("Client can't be empty");
            return false;
        }
        if(graphTypeId === ""){
            toast.error("Graph type can't be empty");
            return false;
        }
        const promise =  new Promise((resolve, reject) => {
            const currentSetting = {
                graph_type: graphTypeName,
                city_level: cityLevel,
                entity_level: entityLevel,
                publication_level: publicationLevel,
                journalist_level: journalistLevel,
                keyword_level: keywordLevel,
                spokesperson_level: spokespersonLevel,
                profiling_level: profilingLevel,
                visibility_level: visibilityLevel,
                topic_level: topicLevel,
                graph_id: graphTypeId,
                client_id: client_id,
                client_name: client_name,
                order_id: 1
            }
            post("artical/add-setting", currentSetting).then((response) => {
                console.log('response',response)
                setGraphTypeName('');
                setGraphTypeId('')
                emptyLevel()
                resolve("Successfully setting added");
            }).catch((err) => {
                console.log('err', err)
                setGraphTypeName('');
                setGraphTypeId('')
                emptyLevel()
                reject(err.message)
              })


        });
          toast.promise(
            promise,
            {
              loading: 'Saving...',
              success: <b>Setting saved</b>,
              error: <b>Could not save.</b>,
            },
            {
              style: {
                width: '200px',
                paddingRight: '10px',
              },
            }
          );
        // toast.promise(
        //     addSettingMethod(),
        //    {
        //      loading: 'Saving...',
        //      success: <b>Settings saved!</b>,
        //      error: <b>Could not save.</b>,
        //    }
        //  );
      }
   
    const promiseOptions = (inputValue) =>
        new Promise((resolve, reject) => {
            inputValue = inputValue || 'a'
            get("artical/getclientlist/" + inputValue).then((response) => {
                resolve(response.data.client.map((e) => ({
                    value: e.id,
                    label: e.client_name
                })));
            })
        });

    useEffect(() => {
        // getClientList();
        setClientList(myData.result)
    }, [myData]);
    return (
        <>

<div className="page-title">
            <h1 >
              Add Setting
            </h1>
            </div>
            <div class="uqr-contents">

                <div class="container-fluid">
                    <form class="needs-validation" novalidate>
                        <div class="row g-3">

                            <div class="col-12">
                                <div className='client-section'>
                                    <label for="country" class="form-label">Client</label>
                                    <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={e => clientChange(e)} />
                                </div>
                            </div>


                            <div class="col-12">
                                <label for="state" class="form-label">Graph Type</label>
                                <select class="form-select" id="state" onChange={e => setGraphTypeChange(e)} required>
                                    <option value="">Choose...</option>
                                    {graphTypes?.map((e) => (
                                        <option  value={e.value}>{e.label}</option>
                                    ))}
                                </select>

                            </div>
                            {graphTypeName && (
                                <div class="container graph-options">
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={entityLevel} onChange={e => setEntityLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckDefault1">
                                                Entity Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked={publicationLevel} onChange={e => setPublicationLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked2">
                                                Publication Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={journalistLevel} onChange={e => setjournalistLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckDefault3">
                                                Journlist Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked={cityLevel} onChange={e => setCityLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked4">
                                                City  Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked5" checked={keywordLevel} onChange={e => setKeywordLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked5">
                                                Keyword Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked9" checked={topicLevel} onChange={e => setTopicLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked9">
                                                Topic Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked={spokespersonLevel} onChange={e => setSpokespersonLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked6">
                                                Spokesperson Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked7" checked={profilingLevel} onChange={e => setProfilingLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked7">
                                                Profiling Level
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked8" checked={visibilityLevel} onChange={e => setVisibilityLevel(e.target.checked)} />
                                            <label class="form-check-label" for="flexCheckChecked8">
                                                Visibility Level
                                            </label>
                                        </div>

                                    </div>
                                   

                                </div>
                            )}
                            
                        </div>
                        <br />
                        <div class="col-12 ">
                                        <button class="btn btn-primary" onClick={e => addSetting()} type="reset" >ADD</button>
                                    </div>
                        {/* <button class="btn btn-primary btn-medium" type="reset" onClick={e => upload()}>Add</button> */}
                    </form>
                </div>
            </div>
        </>

    )
}

export default AddSetting

