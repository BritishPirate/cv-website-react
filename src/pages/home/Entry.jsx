import React from "react";



function Entry({entry}){
    return(
        <div>
            <div className="opline">
                <span className="text-default"><b>{entry.b + (entry.i == '' ? '' : ',')}</b> <i>{entry.i}</i></span>
                <span className="text-default">{entry.right}</span>
            </div>
            <span className="text-default">{entry.desc}</span>
        </div>
    )
}

export default Entry;