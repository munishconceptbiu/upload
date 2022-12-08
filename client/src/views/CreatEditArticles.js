import React from "react";

export default function CreatEditform(){
    return(
        <div>
            <form>
                <div className="row">
                    <div className="col-4"><input type={text} placeholder="Email ID"/></div>
                    <div className="col-4"><input type={text} placeholder="Language"/></div>
                    <div className="col-4"><input type={text} placeholder="Based In "/></div>
                    <div className="col-4"><input type={text} placeholder="Publication"/></div>
                    <div className="col-4"><input type={text} placeholder="Genre"/></div>
                    <div className="col-4"><input type={text} placeholder="Medium"/></div>
                    <div className="col-4"><input type={text} placeholder="Reach"/></div>
                    <div className="col-4"><input type={text} placeholder="Education"/></div>
                    <div className="col-4"><input type={text} placeholder="Designation"/></div>
                    <div className="col-4"><input type={text} placeholder="Primary Beat"/></div>
                    <div className="col-4"><input type={text} placeholder="Primary Beat"/></div>
                    <div className="col-4"><input type={text} placeholder="Publications"/></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input type={text} placeholder="Text Here"/>
                        <input type={text} placeholder="Text Here"/>
                        <input type={text} placeholder="Text Here"/>
                        <input type={text} placeholder="Text Here"/>
                        <input type={text} placeholder="Text Here"/>
                        <input type={text} placeholder="Text Here"/>
                    </div>
                </div>
            </form>
        </div>
    )
}