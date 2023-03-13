import React, { useState, useEffect } from 'react'
import Tabs from '../../../components/ArticlesAnalysis/Tabs'
import AnalysisDetails from '../../../components/ArticlesAnalysis/AnalysisDetails'
import { useNavigate, useParams } from 'react-router-dom';
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import moment from 'moment';
const Qualitative = () => {
    const params = useParams();
    const [article, setArticle] = useState({});
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
    const [message, setMessage] = useState('');
    const [isLoad, setIsLoad] = useState(true);
    

    const [media_type_id, setMediatTypeId] = useState()
    const [articleId, setArticleId] = useState()
    const [clientId, setClientId] = useState()
    const getSingleArticle = () => {
        const data = params.aid.split('-')
        setMediatTypeId(data[3] === "1" ? 1 : 2)
        setArticleId(data[4]);
        post("qaarticle", {"client_id":data[0],"article_id":data[1],"entity_id":data[2], "media_type": data[3] === "1" ? 1 : 2}
        ).then((response) => {
            setArticle(response.data.article.result);
            setIsLoad(false);
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
    const data = params.aid.split('-');
    useEffect(() => {
        // getPublicationList();
        // getZoneList();
        console.log('params.aid', params.aid)
        if (params.aid) {
            getSingleArticle();
            const data = params.aid.split('-');
            console.log('data', data)
            setClientId(data[0])
            setMediatTypeId(data[3] === "1" ? 1 : 2)
            setArticleId(data[4]);
        }
    }, []);

    const [simallerArticleCount, setSimllerArticleCount] = useState(0);
    const [articleList, setArticleList] = useState([]);

    const [checkArticleList, setCheckedArticleList] = useState([]);

    const getSimllerArticleList = () => {
        post("dataprocess/get-relarticlesrowlist", { "client_id": article?.client_detail?.id, "media_type": media_type_id, "page": "1" , "headline": article?.article?.headline}
        ).then((response) => {
          setArticleList(response.data.articlesrowlist)
          setSimllerArticleCount(response.data.articlesrowlist.length)
        console.log('response.data.articlesrowlist.length', response.data.articlesrowlist.length)
        })
          .catch(() => {
            // handleLoginFailure({ status: UNAUTHORIZED });
          })
    
      }
      const [stepOneData, setStepOneData] = useState()
      const [stepTwoData, setStepTwoData] = useState()

      useEffect(() => {
        if(article?.article?.id) getSimllerArticleList()
      }, [article?.article]);
    return (
        <>
        {article &&
            <div className="content-box mt-0">
                <div className='row'>
                    <div className='col-7'>
                        <AnalysisDetails simallerArticleCount={simallerArticleCount} articleList={articleList} article = {article} media_type_id={media_type_id} clientId={clientId} entityId={data[2]} isLoad={isLoad} setCheckedArticleList={setCheckedArticleList} />
                    </div>
                    <div className='col-5 '>
                        <Tabs setStepTwoData={setStepTwoData} setStepOneData={setStepOneData} stepTwoData={stepTwoData} stepOneData={stepOneData} articleList={articleList} checkArticleList={checkArticleList} article={article} articleId={articleId} clientId={data[0]} simallerArticleCount={simallerArticleCount} />
                    </div>
                </div>
            </div>
}
        </>
    )
}
export default Qualitative

