import React, { useState } from "react";
import { CalendarIcon } from "../../../Icons/icons.component";
import { get, post, deleteMethod, put } from "../../../services/CommanService";
import toast from 'react-hot-toast';
function FormOne({ article, articleId, setKey }){

    const articleTypes = ["Interview", "Author", "Brief", "Column", "Editorial", "Feature", "News/Report"]
    const articleTags = ["Press Release" , "Press Conference" , "Client Articles"];
    const prominence = ["Share", "Exclusive", "Mention"];

    const [articleType, setArticleType] = useState('');
    const [articleTag, setArticleTag] = useState('')
    const [prominences, setProminence] = useState('')
    const [relavantArticle, setRelavantArticle] = useState('')
    const [articleSummary, setArticleSummary] = useState('')

    const [bCCM, setBCCM] = useState('')
    const [nCCM, setNCCM] = useState('')
    const [aCCM, setACCM] = useState('');

    const saveNext = async () => {

      const formData = {
          "article_tag": articleTag,
          "article_type": articleType,
          "article_summary": articleSummary,
          "prominent": prominences,
          "positive_ccms": bCCM,
          "negative_ccms": nCCM,
          "neutral_ccms": aCCM,
          "not_relavant": relavantArticle,
          "quality_check": 4
      }
      const uploadPromise = new Promise((resolve, reject) => {

          put(`qaarticle/${articleId}`, formData).then((response) => {
              resolve("Article Successfully Updated");
              setKey('tab-2')
             
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
    return(
        <>
        <div className='row form-details'>
          <div className="col-12 text-center"><h3>Article Level</h3></div>
          <div className='col-6 '>
                
                <select className='form-select' onChange={e => setArticleType(e.target.value)}>
                  <option value={""}>
                    Article Type
                  </option>
                  {articleTypes.map((t, index) => 
                  <option value={t}> {t}</option>
                  )}
                </select>

            </div>
            <div className='col-6 '>
                
                <select className='form-select' onChange={e => setArticleTag(e.target.value)}>
                  <option value={""}>
                    Article Tags
                  </option>
                  {articleTags.map((t, index) => 
                  <option value={t}> {t}</option>
                  )}
                </select>

            </div>
            <div className='col-6 mt-20'>
                
                <select className='form-select' onChange={e => setProminence(e.target.value)}>
                  <option value={""}>
                  Prominence
                  </option>
                  {prominence.map((t, index) => 
                  <option value={t}> {t}</option>
                  )}
                </select>

            </div>
            <div className='col-6 radio-group'> 
                <span className="radio-title">Not Relevant Articles</span>
                <span className="radio-btn"><input  checked={relavantArticle === true ? true : false} type="radio" id="age1" name="relavant" value="true" onChange={e => setRelavantArticle(true)} ></input>
                  <label for="age1">Yes</label>
                </span>
                <span className="radio-btn">
                <input type="radio" id="age2" checked={relavantArticle === false ? true : false} name="relavant" value="false"  onChange={e => setRelavantArticle(false)}></input>
                    <label for="age2">No</label>
                </span>
                </div>
            
                <div className='col-12 mt-20 textarea'>
                  <span className="radio-title">Article Summary</span>
                    <textarea className="form-control " onChange={e => setArticleSummary(e.target.value)}  ></textarea>

                </div>
                   
                </div>

                <div className='row form-details'>
            <div className="col-12 text-center"><h3>Company Level</h3></div>
                   
   
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='B CCM' onChange={e => setBCCM(e.target.value)} ></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='N CCM' onChange={e => setNCCM(e.target.value)}></input></div>
            <div className='col-6 mt-20'><input type="text" className='qa-input' placeholder='A CCM' onChange={e => setACCM(e.target.value)}></input></div>
                   
            <div className="col-12 text-right mt-10">
                        <button onClick={e => saveNext()} className='btn btn-primary btn-medium'>Next</button>
                    </div>

                </div>
        
        </>
    )
}

export default FormOne