import React, { useState } from "react";

export default function ImagePreview ({
  imgSrcArray = [],
  singleImage,
  height,
  width,
}) {
  const [currentSrc, setCurrentSrc] = useState(0);
  const showArrowBtns = imgSrcArray.length > 1;

  const onImgError = (id) => {
    const targetElm = document.getElementById(id);
    if (targetElm) {
      targetElm.classList.add("hide");
    }
  };
  return (
    <div className="imagePreviewWrap">
      <div className="previewImg">
        <img
          height={Array.isArray(height) ? height[currentSrc] : height}
          width={Array.isArray(width) ? width[currentSrc] : width}
          src={imgSrcArray[currentSrc]}
          alt="NA"
        ></img>
      </div>
      {showArrowBtns && (
        <div className="imageActions">
          {/* <button
            disabled={currentSrc === 0}
            onClick={() => setCurrentSrc(currentSrc - 1)}
          >
            <BackArrow />
          </button> */}
          <div className="imageThumbnailWrap">
            {imgSrcArray.map((src, index) => {
              return (
                <div
                  className={
                    index === currentSrc
                      ? "imgThumbnail activeThumb"
                      : "imgThumbnail"
                  }
                  onClick={(e) => setCurrentSrc(index)}
                >
                  <span>
                    <img src={src} alt="NA" />
                  </span>
                </div>
              );
            })}
          </div>
          {/* <button
            disabled={currentSrc === imgSrcArray.length - 1}
            onClick={() => setCurrentSrc(currentSrc + 1)}
          >
            <ForwardArrow />
          </button> */}
        </div>
      )}
    </div>
  );
};
