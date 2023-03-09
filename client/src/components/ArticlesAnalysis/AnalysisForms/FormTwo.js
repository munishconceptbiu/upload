import React, { useState, useEffect } from "react";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import toast from 'react-hot-toast';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function FormTwo({ articleId, setKey, clientId, articleList, checkArticleList, simallerArticleCount }) {


    const [keywordList, setKeywordList] = useState([]);
    const getkeywordList = (themeId) => {
        get("dataprocess/get-themekeywordlist/" + themeId).then((response) => {
            setKeywordList(response.data.keywordlist)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const [themeList, setThemeList] = useState([]);
    const getThemeList = () => {
        get("dataprocess/get-clientthemelist/" + clientId).then((response) => {
            setThemeList(response.data.themelist)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const [topicList, setTopicList] = useState([]);
    const getTopicList = (keywordId) => {
        get("dataprocess/get-keywordtopiclist/" + keywordId).then((response) => {
            setTopicList(response.data.topiclist)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }


    const [keywordId, setKeywordId] = useState()
    const [keywordName, setKeywordName] = useState()
    const [themeId, setThemeId] = useState()
    const [themeName, setThemeName] = useState();

    const [topicId, setTopicId] = useState()
    const [topicName, setTopicName] = useState();
    const setKeywords = (e) => {
        const data = e.target.value.split('-')
        setKeywordId(data[0])
        setKeywordName(data[1]);
        setTopicId()
        setTopicName();
        getTopicList(data[0])
    }
    const setThemes = (e) => {
        const data = e.target.value.split('-')
        setThemeId(data[0])
        setThemeName(data[1]);
        setKeywordId()
        setKeywordName()
        getkeywordList(data[0]);
    }

    const setTopics = (e) => {
        const data = e.target.value.split('-')
        setTopicId(data[0])
        setTopicName(data[1]);
    }
    useEffect(() => {
        getThemeList();
    }, []);

    const [news, setNews] = useState();
    const [financialPlan, setFinancial] = useState();
    const [recommendation, setRecommedation] = useState();
    const [newProduct, setNewProduct] = useState();

    const saveCall = (articleData) => {

        const formData = {};
        formData.data = {
            "keyword_id": keywordId,
            "keyword": keywordName,
            "theme_id": themeId,
            "theme": themeName,
            "news_type": news,
            "financial_planner": financialPlan,
            "recommendation_article": recommendation,
            "new_product_launch": newProduct,
            "topic": topicName,
            "topic_id": topicId,
            "quality_check": 4
        }
        formData.articles = articleData;
        const uploadPromise = new Promise((resolve, reject) => {

            put(`qaarticle`, formData).then((response) => {
                resolve("Article Successfully Updated");
                setKey('tab-3')

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

            });
    }
    const saveYes = () => {
        const data = articleList.map(e => ({ 'id': e.id }));
        saveCall(data)
    }

    const saveNo = () => {
        const data = articleList.filter(e => e.id === parseInt(articleId)).map(e => ({ 'id': e.id }))
        saveCall(data)
    }

    const saveNext = async () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Are you sure?</h1>
                        <p>{simallerArticleCount} Simller article found update the same for all article</p>
                        <button onClick={() => {
                            saveNo()
                            onClose()
                        }}>No</button>
                        <button
                            onClick={() => {
                                saveYes()
                                onClose();
                            }}
                        >
                            Yes
                        </button>
                    </div>
                );
            }
        });
    }




    return (
        <>
            <div className='row form-details'>
                <div className="col-12 text-center"><h3>News Level Analysis</h3></div>
                <div className='col-6 mt-20'>
                    <select className='form-select' onChange={(e) => setThemes(e)}>
                        <option>
                            Theme
                        </option>
                        {themeList.map((t, index) =>
                            <option value={`${t.id}-${t.theme_name}`}> {t.theme_name}</option>
                        )}
                    </select>


                </div>

                <div className='col-6 mt-20'>
                    <select className='form-select' onChange={(e) => setKeywords(e)}>
                        <option value={""}>
                            Keyword Category
                        </option>
                        {keywordList.map((t, index) =>
                            <option value={`${t.id}-${t.keyword}`}> {t.keyword}</option>
                        )}
                    </select>

                </div>
                <div className='col-6 mt-20'>
                    <select className='form-select' onChange={(e) => setTopics(e)}>
                        <option value={""}>
                            Topic Category
                        </option>
                        {topicList.map((t, index) =>
                            <option value={`${t.id}-${t.keyword}`}> {t.keyword}</option>
                        )}
                    </select>

                </div>
                <div class="col-6 radio-group"><span class="radio-title">Recommendation article</span><span class="radio-btn">

                    <input type="radio" id="recommend" name="recommend" checked={recommendation === true ? true : false} value="true" onChange={e => setRecommedation(true)}></input>
                    <label for="age1">Yes</label></span><span class="radio-btn">
                        <input type="radio" id="recommend1" name="recommend" checked={recommendation === false ? true : false} value="false" onChange={e => setRecommedation(false)}></input>
                        <label for="age2">No</label></span>
                </div>
                <div class="col-6 radio-group"><span class="radio-title">Financial Planner</span><span class="radio-btn">
                    <input type="radio" id="financialPlan" name="financialPlan" checked={financialPlan === true ? true : false} value="true" onChange={e => setFinancial(true)}></input>
                    <label for="age1">Yes</label></span><span class="radio-btn">
                        <input type="radio" id="financialPlan1" name="financialPlan" checked={financialPlan === false ? true : false} value="false" onChange={e => setFinancial(false)}></input>
                        <label for="age2">No</label></span>
                </div>
                <div class="col-6 radio-group"><span class="radio-title"> New Product Launch</span><span class="radio-btn">
                    <input type="radio" id="newProduct" name="newProduct" checked={newProduct === true ? true : false} value="true" onChange={e => setNewProduct(true)}></input>
                    <label for="age1">Yes</label></span><span class="radio-btn">
                        <input type="radio" id="newProduct1" name="newProduct" checked={newProduct === false ? true : false} value="false" onChange={e => setNewProduct(false)}></input>
                        <label for="age2">No</label></span>
                </div>
                <div class="col-6 radio-group"><span class="radio-title"> News</span><span class="radio-btn">
                    <input type="radio" id="news1" name="news" checked={news === "National" ? true : false} value="true" onChange={e => setNews("National")}></input>
                    <label for="age1">National</label></span><span class="radio-btn">
                        <input type="radio" id="news2" name="news" checked={news === "International" ? true : false} value="International" onChange={e => setNews("International")}></input>
                        <label for="age2">International</label></span>
                </div>
                <div className="col-12 text-right mt-10">
                    <button className='btn btn-primary btn-medium' onClick={e => saveNext
                        ()}>Next</button>
                    <button className='btn btn-gray btn-medium' onClick={e => setKey('tab-1')}>Previous</button>
                </div>



            </div>

        </>
    )
}

export default FormTwo