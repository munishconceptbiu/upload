import React from "react";
import '../../../src/components/main.css'
function EditionDetails(){
    return(
        <>
        <div className="edition-section">
            <p>Edition :</p>
            <ul className="edition-list">
                <li><a href="#">New Delhi</a></li>
                <li><a href="#">Mumbai</a></li>
                <li><a href="#">Kolkata</a></li>
                <li><a href="#">Chennai</a></li>
                <li><a href="#">Bengaluru</a></li>
            </ul>
        </div>

        </>
    )
}

export default EditionDetails