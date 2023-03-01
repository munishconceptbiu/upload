import React, { useState, useEffect } from 'react'
import Tabs from '../../../components/ArticlesAnalysis/Tabs'
import AnalysisDetails from '../../../components/ArticlesAnalysis/AnalysisDetails'
import { useNavigate, useParams } from 'react-router-dom';
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import moment from 'moment';
const Qualitative = () => {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [articleList, setArticleList] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [entityList, setEntityList] = useState([]);
    const [publicationList, setPublicationList] = useState([])
    const [zoneList, setZoneList] = useState([])
    const [editionList, setEditionList] = useState([])
    const [journalistList, setJournalistList] = useState([])
    let selectRef = React.useRef();

    const [publication, setPublication] = useState('')
    const [zone, setZone] = useState('')
    const [edition, setEdition] = useState('')
    const [journalist, setJournalist] = useState('');
    const [mediatype, setMediaType] = useState(1);
    const [message, setMessage] = useState('')
    const getArticleList = () => {
        console.log('selectRef.getValue()[0]', selectRef.getValue()[0])
        post("dataprocess/get-articlesrowlist", { "client_id": selectRef.getValue().length ? selectRef.getValue()[0]?.value : "5193", "media_type": mediatype, "page": "1", "fromDate": startDate === "" || startDate === null ? "2022-12-15" : moment(startDate).format('L'), "toDate": endDate === "" || endDate === null ? "2022-12-16" : moment(endDate).format('L'), zone: zone, publication: publication, edition: edition, journalist: journalist }
        ).then((response) => {
            setArticleList(response.data.articlesrowlist)
            setMessage(`<div style="color: rgb(0, 54, 185); margin-top: 5px; margin-bottom: 5px; font-size: 14px;">Total <span className="feed-count-info"><b>${response.data.articlesrowlist.length}</b></span> articles were found from <span class="feed-count-info"><b>${moment(startDate).format('LL')}</b></span> to <span className="feed-count-info"> <b>${moment(endDate).format('LL')}</b></span> <span className="feed-count-info">with selected client <b> ${selectRef.getValue().length ? selectRef.getValue()[0]?.label : ""} </b></span></div>`)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }


    const getSingleArticle = () => {
        post("qaarticle", {"client_id":"8580","article_id":"230707287","entity_id":"8579"}
        ).then((response) => {
            setArticle(response.data.articlesrowlist[0])
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const getPublicationList = () => {
        get("dataprocess/get-publicationlist"
        ).then((response) => {
            setPublicationList(response.data.publicationlist)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }

    const getJournalistList = (publication) => {
        get("journalist/publication/" + publication
        ).then((response) => {
            setJournalistList(response.data.journalist)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const getZoneList = () => {
        get("zone").then((response) => {
            setZoneList(response.data.zones)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    const getEditionList = (zone) => {
        get("zone/editions/" + zone).then((response) => {
            setEditionList(response.data.editions)
        })
            .catch(() => {
                // handleLoginFailure({ status: UNAUTHORIZED });
            })

    }
    useEffect(() => {
        getPublicationList();
        getZoneList();

        if (params.aid) {
            getSingleArticle();
        }
    }, []);
    return (
        <>
            <div className="content-box mt-0">
                <div className='row'>
                    <div className='col-6'>
                        <AnalysisDetails article = {article} />
                    </div>
                    <div className='col-6 '>
                        <Tabs article = {article} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Qualitative

