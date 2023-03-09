import React, { useState } from "react";
import { BackArrow, ForwardArrow } from "../..//Icons/icons.component";

export default function PDFImageViewer  ({ imgSrcArray = [], handleImageZoom }) {
  const [currentSrc, setCurrentSrc] = useState(0);
  const showArrowBtns = imgSrcArray.length > 1;

  return (
    <div className="pdfPreviewWrap">
      {showArrowBtns && (
        <div className="imageActions">
          <button
            disabled={currentSrc === 0}
            onClick={() => setCurrentSrc(currentSrc - 1)}
          >
            <div className="hasTooltip">
              <BackArrow />
              <span className="tooltipWrap center">Previous</span>
            </div>
          </button>
          <button
            disabled={currentSrc === imgSrcArray.length - 1}
            onClick={() => setCurrentSrc(currentSrc + 1)}
          >
            <div className="hasTooltip">
              <ForwardArrow />
              <span className="tooltipWrap center">Next</span>
            </div>
          </button>
        </div>
      )}
      <div className="imageWrap">
        {imgSrcArray.map((src, index) => {
          if (index !== currentSrc) {
            return null;
          }
          return <iframe width="100%" height="750px" src={src} alt="NA" />;
        })}
      </div>
    </div>
  );
};
