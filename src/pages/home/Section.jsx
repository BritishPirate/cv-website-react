import React from "react";
import "../../page-css/Home.css";
import Entry from "./Entry.jsx";
import Collapsible from "react-collapsible";
import SectionHeader from "./SectionHeader";

function Section(title, contentArr){
    let ret = [];
    return(
        <Collapsible trigger={(<SectionHeader title={title}/>)} id={title}>
        {
            contentArr.map((entry)=>{
                return(
                    <>
                    <Entry entry={entry} /> <br/>
                    </> 
                )
            })
        }
    </Collapsible>
    );
}

export default Section;