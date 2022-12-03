import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';


import "react-datepicker/dist/react-datepicker.css";
import { get, post, deleteMethod } from "../../../services/CommanService";
import { store } from '../../../store/store';
import toast from 'react-hot-toast';

import Reorder, {
    } from "react-reorder";
import move from "lodash-move";
import { useNavigate, useParams } from 'react-router-dom';


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
    // {
    //   label: 'Visibility',
    //   value: 9
    // }

]
const AddSetting = () => {
    const state = store.getState();
    const params = useParams();

    const navigate = useNavigate()
    const [setting, setSetting] = useState([])
    const [client_id, setClientId] = useState()
    const [client_name, setClientName] = useState()
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
    const [is_vertical, setIsVertical] = useState(0)
    const [verticals, setVerticals] = useState([])
    const [vertical, setVertical] = useState("")

    const [isIndex, setIndex] = useState(false);
    const [isReach, setReach] = useState(false);

    const [isOnline, setIsOnline] = useState(false);
    const [isPrint, setIsPrint] = useState(false);
    const [isPrintOnline, setIsPrintOnline] = useState(false);


    const saveSetting = async () => {


        if (setting.length === 0) {
            toast.error("Select atlease one graph type");
            return false;
        }
        console.log('isPrint', isPrint, isOnline, isPrintOnline)
        if (isPrint === false && isOnline === false && isPrintOnline === false) {
            toast.error("Please select altleast any two media types");
            return false;
        }
        if (isPrint === true && isOnline === true && isPrintOnline === true) {
            toast.error("Please select only two media types");
            return false;
        }
        if ((isPrint === true && isOnline === false && isPrintOnline === false) || (isPrint === false && isOnline === true && isPrintOnline === false) || (isPrint === false && isOnline === false && isPrintOnline === true)) {
            toast.error("Please select two media types");
            return false;
        }

        const formData = {
            client_id: params.client_id,
            client_name: client_name,
            username: state.auth.auth.first_name + ' ' + state.auth.auth.last_name,
            email: state.auth.auth.email,
            setting: setting,
            verticals: JSON.stringify(verticals),
            is_vertical: is_vertical,
            isIndex: isIndex,
            isReach: isReach,
            isOnline: isOnline,
            isPrint: isPrint,
            isPrintOnline: isPrintOnline,
            user_id: state.auth.auth.id
        }

        // const formData = new FormData();

        // formData.append('client_id', client.value);
        // formData.append('client_name', client.label);
        // formData.append('username', state.auth.auth.first_name + ' ' + state.auth.auth.last_name);
        // formData.append('email', state.auth.auth.email)
        // formData.append('setting', JSON.stringify(setting))
        // formData.append('verticals', JSON.stringify(verticals))
        // formData.append('is_vertical', is_vertical)
        // formData.append('isIndex', isIndex)
        // formData.append('isReach', isReach)
        // formData.append('isOnline', isOnline)
        // formData.append('isPrint', isPrint)
        // formData.append('isPrintOnline', isPrintOnline)

        const uploadPromise = new Promise((resolve, reject) => {

            post(`http://qa.conceptbiu.com/unifiedapi/artical/add-setting`, formData).then((response) => {
                setGraphTypeName('');
                setGraphTypeId('')
                emptyLevel()
                setSetting([])
                setVerticals([])
                setVertical('')
                setClientName();
                setClientId()
                resolve("Setting Successfully Saved");
                navigate('/view-setting')
            }).catch((err) => {
                console.log('err', err)
                setGraphTypeName('');
                setGraphTypeId('')
                emptyLevel()
                setSetting([])
                setVerticals([])
                setVertical('');
                setClientName();
                setClientId()
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
        if (e.target.value === "") {
            setGraphTypeId()
            setGraphTypeName()
            emptyLevel()
        } else {
            setGraphTypeId(e.target.value)
            setGraphTypeName(graphTypes[e.target.value - 1].label)
            emptyLevel()
        }

    }

    const addSetting = (e) => {
        if (cityLevel === false && entityLevel === false && publicationLevel === false && journalistLevel === false && keywordLevel === false && spokespersonLevel === false && profilingLevel === false && topicLevel === false) {
            toast.error("Please select atleast one level");
            return false;
        }
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
            graph_id: graphTypeId
        }
        let newSetting = [...setting];
        newSetting.push(currentSetting)
        setSetting(newSetting);
        setGraphTypeName("");
        setGraphTypeId("")
        emptyLevel()
    }

    const onReorder = (e, from, to) => {
        setSetting(move(setting, from, to));
    };
    const deleteLevel = (index, e) => {
        if (e.id) {
            deleteSetting(e.id)
        }
        let newSetting = [...setting];
        newSetting.splice(index, 1)
        setSetting(newSetting);
    }
    const editLevel = (index) => {
        let editsetting = setting[index];
        setGraphTypeName(editsetting.graph_type);
        setGraphTypeId(editsetting.graph_id)
        setCityLevel(editsetting.city_level);
        setEntityLevel(editsetting.entity_level)
        setPublicationLevel(editsetting.publication_level)
        setjournalistLevel(editsetting.journalist_level)
        setKeywordLevel(editsetting.keyword_level)
        setSpokespersonLevel(editsetting.spokesperson_level)
        setProfilingLevel(editsetting.profiling_level);
        setVisibilityLevel(editsetting.visibility_level)
        setTopicLevel(editsetting.topic_level);
        let newSetting = [...setting];
        newSetting.splice(index, 1)
        setSetting(newSetting);
    }

    const addVertical = () => {
        if (vertical === '' || vertical.trim().length === 0) {
            toast.error("Vertical can't be empty");
            return false
        }
        let newvertical = [...verticals];
        newvertical.push(vertical)
        setVerticals(newvertical)
        setVertical("")
    }
    const deleteVertical = (index) => {
        let newvertical = [...verticals];
        newvertical.splice(index, 1)
        setVerticals(newvertical);
    }
 
    const getSettingList = (id) => {
        const cid = id
        get("artical/get-setting/" + cid).then((response) => {
            setSetting(response.data.settings)
            setVerticals(response.data.verticals)
            setIndex(response.data.isIndex);
            setReach(response.data.isReach);
            setIsOnline(response.data.isOnline || false);
            setIsPrint(response.data.isPrint || false);
            setIsPrintOnline(response.data.isPrintOnline || false)
            setIsVertical(response.data.isVertical || false);
            setClientName(response.data.settings[0].client_name);
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const deleteSetting = (id) => {
        deleteMethod("artical/delete-setting/" + id).then((response) => {
            //   swal("Success!", "Setting successfully deleted", "success");
            getSettingList(params.client_id)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })
    }

    useEffect(() => {
        getSettingList(params.client_id)
    }, [params.client_id]);

    return (
        <>

            <div className="page-title">
                <h1 >
                    Edit Setting
                </h1>
            </div>
            <div className="uqr-contents">

                <div className="container-fluid">
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">

                            <div className="col-12">
                                <label htmlFor="state" className="form-label">Graph Type</label>
                                <select className="form-select" id="state" onChange={e => setGraphTypeChange(e)} required>
                                    <option value="">Choose...</option>
                                    {graphTypes?.map((e, index) => (
                                        <option key={index} disabled={setting.filter(s => s.graph_type === e.label).length === 1} value={e.value}>{e.label}</option>
                                    ))}
                                </select>

                            </div>
                            {graphTypeName && (
                                <div className="container graph-options">
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={entityLevel} onChange={e => setEntityLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                Entity Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked={publicationLevel} onChange={e => setPublicationLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked2">
                                                Publication Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={journalistLevel} onChange={e => setjournalistLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                Journlist Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" checked={cityLevel} onChange={e => setCityLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked4">
                                                City  Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked5" checked={keywordLevel} onChange={e => setKeywordLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked5">
                                                Keyword Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked9" checked={topicLevel} onChange={e => setTopicLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked9">
                                                Topic Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked6" checked={spokespersonLevel} onChange={e => setSpokespersonLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked6">
                                                Spokesperson Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked7" checked={profilingLevel} onChange={e => setProfilingLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked7">
                                                Profiling Level
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked8" checked={visibilityLevel} onChange={e => setVisibilityLevel(e.target.checked)} />
                                            <label className="form-check-label" htmlFor="flexCheckChecked8">
                                                Visibility Level
                                            </label>
                                        </div>

                                    </div>
                                    <div className="col-12 ">
                                        <button className="btn btn-primary" onClick={e => addSetting()} type="button" >ADD GRAPH TYPE</button>
                                    </div>

                                </div>
                            )}
                            <div className="col-12 ">
                                {setting.length > 0 && <span>Use Drag and Drop Arrange the Order </span>}
                                <Reorder
                                    reorderId="my-list" // Unique ID that is used internally to track this list (required)
                                    reorderGroup="reorder-group" // A group ID that allows items to be dragged between lists of the same group (optional)
                                    // getRef={this.storeRef.bind(this)} // Function that is passed a reference to the root node when mounted (optional)
                                    component="div" // Tag name or Component to be used for the wrapping element (optional), defaults to 'div'
                                    // placeholderClassName="placeholder" // className name to be applied to placeholder elements (optional), defaults to 'placeholder'
                                    draggedClassName="dragged" // className name to be applied to dragged elements (optional), defaults to 'dragged'
                                    lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
                                    holdTime={500} // Default hold time before dragging begins (mouse & touch) (optional), defaults to 0
                                    touchHoldTime={500} // Hold time before dragging begins on touch devices (optional), defaults to holdTime
                                    mouseHoldTime={200} // Hold time before dragging begins with mouse (optional), defaults to holdTime
                                    onReorder={onReorder} // Callback when an item is dropped (you will need this to update your state)
                                    autoScroll={true} // Enable auto-scrolling when the pointer is close to the edge of the Reorder component (optional), defaults to true
                                    disabled={false} // Disable reordering (optional), defaults to false
                                    disableContextMenus={true} // Disable context menus when holding on touch devices (optional), defaults to true
                                // placeholder={
                                //   <div className="col-3" /> // Custom placeholder element (optional), defaults to clone of dragged element
                                // }
                                >
                                    {setting?.map((e, index) => (
                                        <div className="card" key={index} style={{ width: "18rem", cursor: "pointer" }}>
                                            <div className="card-body graph-float">
                                                <h5 className="">Order : {index + 1}</h5>
                                                <h5 className="card-title">{e.graph_type}</h5>
                                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                                {e.entity_level === true && 
                                                // <p className="card-text">Entity Level :  Yes</p>
                                                <><Button className="levelbutton" variant="light">Entity</Button>{' '}</>
                                                }
                                                {e.publication_level === true && 
                                                // <p className="card-text">Publication Level : Yes</p>
                                                <><Button className="levelbutton"  variant="light">Publication</Button>{' '}</>
                                                }
                                                {e.journalist_level === true && 
                                                // <p className="card-text">Journalist Level :  Yes</p>
                                               <><Button className="levelbutton"  variant="light">Journalist</Button>{' '}</>
                                                }
                                                {e.city_level === true &&
                                                //  <p className="card-text">City Level : Yes</p>
                                                 <><Button className="levelbutton"  variant="light">City</Button>{' '}</>
                                                 }
                                                {e.keyword_level === true && 
                                                // <p className="card-text">Keyword Level :  Yes</p>
                                                <><Button className="levelbutton"  variant="light">Keyword</Button>{' '}</>
                                                }
                                                {e.topic_level === true && 
                                                // <p className="card-text">Topic Level :  Yes</p>
                                                <><Button className="levelbutton"  variant="light">Topic</Button>{' '}</>
                                                }
                                                {e.spokesperson_level === true && 
                                                // <p className="card-text">Spokesperson Level :  Yes</p>
                                                <><Button className="levelbutton"  variant="light">Spokesperson</Button>{' '}</>
                                                }
                                                {e.profiling_level === true && 
                                                <><Button className="levelbutton"  variant="light">Profiling</Button>{' '}</>
                                                // <p className="card-text">Profiling Level :  Yes</p>
                                                }
                                                {e.visibility_level === true && 
                                                // <p className="card-text">Visibility Level :  Yes</p>
                                                <><Button className="levelbutton"  variant="light">Visibility</Button>{' '}</>
                                                }
                                                <br></br>
                                                <a href="javascript:void(0)" onClick={event => deleteLevel(index, e)} className="card-link">Remove</a>
                                                <a href="javascript:void(0)" onClick={e => editLevel(index)} className="card-link">Edit</a>
                                            </div>
                                        </div>
                                    ))}
                                </Reorder>
                            </div>

                            <div className="col-12">
                                <label htmlFor="vertical" className="form-label">Vertical</label>
                                <select className="form-select" id="vertical" onChange={e => setIsVertical(e.target.value)} required>
                                    <option value="">Choose...</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>

                            </div>
                            {is_vertical === "1" && (
                                <div className="col-12 ">
                                    {/* <label htmlFor="vertical" className="form-label">Add </label> */}
                                    <input type="text" className="form-control" id="vertical" value={vertical} onChange={e => setVertical(e.target.value)} placeholder="" />



                                    <div className="col-12 mt-10">
                                        <button className="btn btn-primary" onClick={e => addVertical()} type="button" >Add Vertical</button>
                                    </div>
                                </div>
                            )}
                            <div className="col-12 ">
                                {verticals?.map((e, index) => (
                                    <div className="card" key={index} style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{e}</h5>

                                            <a href="javascript:void(0)" onClick={e => deleteVertical(index)} className="card-link">Remove</a>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-12">
                                <label htmlFor="state" className="form-label">Filter</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="index" checked={isIndex} onChange={e => setIndex(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="index">
                                        Index
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="reach" checked={isReach} onChange={e => setReach(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="reach">
                                        Reach '000
                                    </label>
                                </div>

                            </div>
                            <div className="col-12">
                                <label htmlFor="prints" className="form-label">Media Type</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="print" checked={isPrint} onChange={e => setIsPrint(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="print">
                                        Print
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="online" checked={isOnline} onChange={e => setIsOnline(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="online">
                                        Online
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="printonline" checked={isPrintOnline} onChange={e => setIsPrintOnline(e.target.checked)} />
                                    <label className="form-check-label" htmlFor="printonline">
                                        Print & Online
                                    </label>
                                </div>

                            </div>

                        </div>

                        <br></br>

                        <button className="btn btn-primary btn-medium" type="button" onClick={e => saveSetting()}>Save</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default AddSetting

