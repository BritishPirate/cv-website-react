import React from "react";
import Entry from "./Entry.jsx";
import Collapsible from "react-collapsible";
import SectionHeader from "./SectionHeader";

function Section(title, contentArr){
    let ret = [];
    return(
        <Collapsible trigger={(<SectionHeader title={title}/>)} id={title}>
        {
            contentArr.map((entry, index)=>{
                return(
                    <>
                    <Entry key={index.toString()} entry={entry} /> <br/>
                    </> 
                )
            })
        }
    </Collapsible>
    );
}

export default Section;