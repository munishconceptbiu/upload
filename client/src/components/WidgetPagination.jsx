import React from "react";

const WidgetPagination = ({
    datasetLength,
    selectedIndex,
    onSelectPage,
    dataLabel,
}) => {
    const arr = [];
    for (let i = 1; i <= datasetLength; i++) {
        arr.push(i);
    }
    const getActiveClass = (idx) => {
        // console.log(idx, selectedIndex);
        // console.log((selectedIndex + 1) === idx ? "activeBtn" : "");
        return (selectedIndex + 1) === idx ? "activeBtn" : "";
    }
    return (
        <div className="dataPagination">
            <div className="btnContainer">
                {dataLabel && dataLabel}
                {arr.map((v) => <button className={getActiveClass(v)} onClick={() => onSelectPage(v)}>{v}</button>)}
            </div>
        </div>
    )
};

export default WidgetPagination;