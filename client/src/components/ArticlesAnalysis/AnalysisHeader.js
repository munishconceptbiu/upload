import React, { useState } from "react";
import { JounalistIcon } from "../../Icons/icons.component";
import { InfoIcon } from "../../Icons/icons.component";
import { DownloadIcon } from "../../Icons/icons.component";
import { UsersIcon } from "../../Icons/icons.component";
import { CalendarIcon } from "../../Icons/icons.component";
import EntityDetails from "./EntityDetails";
import moment from 'moment';
import parse from 'html-react-parser';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "../../../node_modules/placeholder-loading/src/scss/placeholder-loading.scss"

import ImagePreview from "./ImageFormates"
import PDFImageViewer from "./PdfViewer"
function AnalysisHeader({ article, media_type_id, isLoad, simallerArticleCount }) {
    const DATA_NOT_FOUND = '-';

    const escapeString = (s = "") => {
        try {
          return s
            .replace(/&amp;/g, "&")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&quot;/g, "''");
        } catch (e) {
          return s;
        }
      };
    const renderPrintDetails = () => {
        return (
          <>
            <div className="editionTabWrap">
              <nav className="nav card-header-tabs nav-tabs">
                <span className="nav-item editionTitle">Edition :</span>{" "}
                <div className="navLinksWrap">{renderEditionDetails()}</div>
              </nav>
            </div>
            <p>
              <label>Entity :</label>{" "}
              <span>{article?.entity_detail ? article?.entity_detail.entity_name : ""}</span>
            </p>
            <p>
              <label>Publication :</label>{" "}
              <span>{article?.article?.publication || DATA_NOT_FOUND}</span>
            </p>
            <p>
              <label>Source :</label> <span>{article?.article?.source_name || DATA_NOT_FOUND}</span>
            </p>
            <p>
              <label>Supplement :</label>{" "}
              <span>{article?.article?.suppliment || DATA_NOT_FOUND}</span>
            </p>
            <p>
              <label>Language :</label> <span>{article?.article?.language || DATA_NOT_FOUND}</span>
            </p>
            <p>
              <label>Page :</label> <span>{article?.page_no || DATA_NOT_FOUND}</span>
            </p>
            <p>
              <label>Circulation :</label>{" "}
              <span>{article?.circlation || DATA_NOT_FOUND}</span>
            </p>
            <p>
              
                <>
                  <label>CCM :</label>{" "}
                  <span>{parseInt(article?.article?.ccm).toFixed(2) || DATA_NOT_FOUND}</span>
                </>
            </p>
            <p>
              <label>Mav :</label> <span>{article?.article?.mav || DATA_NOT_FOUND}</span>
            </p>
          </>
        );
      };

      const renderOnlineDetails = () => {
       
        return (
          <>
            <div className="detailsMetaTagWrap">
              <p>
                <label>Entity :</label>{" "}
                <span>{article?.entity_detail ? article?.entity_detail.entity_name : ""}</span>
              </p>
              <p>
                <label>Website :</label>{" "}
                <span className="link" onClick={() => window.open()}>
                  {article?.article?.publication}
                </span>
              </p>
              <p>
                <label>Source :</label> <span>{article?.article?.source_name}</span>
              </p>
              <p>
                <label>Word Count :</label>{" "}
                <span>
                 {article?.article?.word_count}
                </span>
              </p>
              
            </div>
            
          </>
        );
      };
    const renderEditionDetails = () => {
        if (article?.other_edition_url_html) {
          const { host, protocol } = window.location;
          const newHost = `${protocol}//${host}`;
          let newUrls = article?.other_edition_url_html
            .replaceAll("href", 'className="nav-item nav-link" href')
            .replaceAll(" | ", "");
          let activeEdition = newUrls.match(
            /^[\*\s\w]*|[^\>]+(?=\<a )|[\*\s\w]*$/gs
          );
          if (activeEdition && activeEdition.length > 0) {
            const str = activeEdition.find((i) => i);
            newUrls = newUrls.replace(
              str,
              `<span className="nav-item active">${str}</span>`
            );
          }
          return <>{parse(newUrls)}</>;
        }
    }

    const formatImageUrl = (src, useHttps, getPdf) => {
        try {
         
          let tempStr = `${src}`;
          if (useHttps) {
            let tempStr = `${src}`;
            if (getPdf) {
              tempStr = tempStr.replace(".jpg", ".pdf");
            }
            return tempStr;
          }
          return tempStr;
        } catch (e) {
          return src;
        }
      };

      const [showPreview, setShowPreview] = useState('image');

      const loaderImage = () => {
        return (
            <div className="ph-item">
                <div className="ph-col-12">
                    {/* <div className="ph-picture"></div> */}
                   
                    <div className="ph-row newsItemTopWrap">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-4"></div>
                        {/* <div className="ph-col-2 big"></div>
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-12"></div> */}
                    </div>
                    <div className='newsItemTopWrap'>
                    <div className="ph-picture "></div>
                    </div>
                    <div className='newsItemTopWrap'>
                    <div className="ph-picture bigSize"></div>
                    </div>
                </div>
            </div>
        )
      }
  console.log('simallerArticleCount', simallerArticleCount)
    return (
        <>
         { isLoad === true && loaderImage()}
         {isLoad === false &&
            <div className="newsDetailsWrap printDetailsWrap feedDetailsWrap clearfix">
                <div className="newsItemTopWrap">
                <div className="newsItemTop">
                        <div className="nitLeft">
                      
                        <div style={{color: 'rgb(0, 54, 185)', marginTop: '5px', marginBottom: '5px', fontSize: '14px'}}>Total <span className="feed-count-info"><b>{simallerArticleCount}</b></span> simaller articles were found 
                        </div>
                        </div>

                    </div>
                    <div className="newsItemTop">
                        <div className="nitLeft">
                      
                            <h2 className="publication">{article?.article?.headline}</h2>
                        </div>

                    </div>
                    <div className="newsItemBottom">
                        <div className="nibLeft">
                            <span className="newsDate">{moment(article?.article?.created_on).format('lll')}</span>
                        </div>

                    </div>
                </div>
                <div className="newsItemList">
                {media_type_id === 2  && renderPrintDetails()}
            {media_type_id === 1 && renderOnlineDetails()}
                </div>
                <div className="imgContainer imageContainerWithPdf">
                    <div className="imagePdfbtnWrap">
                        <div role="group" className="rs-btn-group btn-group">
                            <button onClick={e => setShowPreview('image')} type="button" className={`${showPreview === 'image' ? 'active' : ''} btn btn-primary`}>Image</button>
                            {media_type_id === 2 && <button onClick={e => setShowPreview('pdf')} type="button" className={`${showPreview === 'pdf' ? 'active' : ''} btn btn-primary`}>PDF</button> }
                            <button type="button" onClick={e => setShowPreview('text')} className={`${showPreview === 'text' ? 'active' : ''} btn btn-primary`}>Text</button>
                        </div>
                    </div>
                    {showPreview === 'image' &&
                    <div className="imagePreviewWrap">
                    {media_type_id === 1 ? <ImagePreview
                      imgSrcArray={Array(article?.article?.top_image)}
                      singleImage
                    /> : <ImagePreview
                    imgSrcArray={article?.images?.map((el) =>
                      formatImageUrl(el.image_url, true, false)
                    )}
                    height={"400px"}
                    width={"75%"}
                  /> }
                    </div>
}

 {showPreview === 'pdf' && (
                <PDFImageViewer
                  imgSrcArray={article?.images?.map((el) =>
                    formatImageUrl(el.image_url, true, true)
                  )}
                />
              )}
              {showPreview === 'text' && (
                <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {escapeString(article?.article_content)}
            </ReactReadMoreReadLess>
                // <p id="newsContent">{`${escapeString(article?.article_content)}`}</p>
              )}
                </div>
            </div>
}
        </>
    )
}
export default AnalysisHeader