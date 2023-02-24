import React from "react";
import Section from "./Section.jsx";
import HeaderEntry from "./HeaderEntry";

import "../../index.css";
import "../../page-css/home/Home.css";



function Home(){
    //#region settingArrays
    //#region Contact Details
    const contactDetArr = [];
    contactDetArr.push({
        title: 'Email', 
        link: 'mailto: nur10000@gmail.com', 
        text: 'nur10000@gmail.com', 
        svg: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#FFFFFF" id="email-icon-svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>)
    });
    contactDetArr.push({
        title: 'Phone', 
        link: '07490409655', 
        text: '07490409655', 
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
        )
    });
    contactDetArr.push({
        title: 'LinkedIn', 
        link: 'https://www.linkedin.com/in/nur-luski-levi/', 
        text: 'https://www.linkedin.com/in/nur-luski-levi/', 
        svg: (
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px">
                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"/>
            </svg>
        )
    });
    //#endregion
    
    //#region education section
    const educationArr=[];
    educationArr.push({
        b: 'Computer Science BSc',
        i: 'University of Liverpool',
        right: '06/2019 – 05/2022',
        desc: 'Grade: 2.1'
    });
    educationArr.push({
        b: 'A Levels',
        i: 'Allerton High School',
        right: '01/2017 – 12/2019',
        desc: ("Maths - A Further Maths - B Physics - B") 
    });
    //#endregion

    //#region Professional Experience
    const profExpArr=[];
    profExpArr.push({
        b: 'Retail Assistant',
        i: 'Iceland Foods Inc',
        right: '11/2021 – 01/2022',
        desc: ''
    });
    profExpArr.push({
        b: 'Software Developer and Consultant with Test',
        i: 'The Software Institute/Qualitest',
        right: '07/2022 – 09/2023',
        desc: ''
    });
    //#endregion
    
    //#region Awards
    const awards=[];
    awards.push({
        b: 'NCS 4 week program',
        i: '',
        right: '07/2017',
        desc: ''
    });
    awards.push({
        b: 'V100 Volunteering Award',
        i: '',
        right: '',
        desc: ''
    });
    //#endregion
    //#endregion

    return(
    <div id="bg">
        <div id="header-container">
        <header className="rcorner1">
            <div id="name" className="text-default"><b><h1>Nur Luski Levi</h1></b></div>
            <div id="contact-details" className="flex-container">
                {
                    contactDetArr.map((entry, index) =>
                        {
                            return(
                                <HeaderEntry key={entry.title} title={entry.title} link={entry.link} text={entry.text} svg={entry.svg} />
                            )
                        }
                    )
                }
            </div>
        </header>
        </div>
        <div id="content"> 

            {Section('Education', educationArr)}

            {Section('Professional Experience', profExpArr)}

            {Section('Awards', awards)}

        </div>
    </div>
    );
}

export default Home;