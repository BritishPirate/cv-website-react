import React from "react";

export default function SectionHeader({title}){
    return (
        <>
            <h2 id={title + "-title"} className="text-section-title text-default">{title}</h2>
            <hr className="section-divider" />
        </>
    );
}