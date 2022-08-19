import React from "react";
import "../../page-css/Home.css";
import Entry from "./Entry.jsx";

function Section(title, contentArr){
    console.log(contentArr);
    let ret = [];
    return(
        <div id={title}>
        <h2 id={title + "-title"} className="text-section-title text-default">{title}</h2>
        <hr className="section-divider" />
        {
            contentArr.map((entry)=>{
                console.log(entry);
                return(
                    <>
                    <Entry entry={entry} /> <br/>
                    </> 
                )
            })
        }
    </div>
    );
}

export default Section;