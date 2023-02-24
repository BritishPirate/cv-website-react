import React from "react";
import {useState} from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
  };

export default function HeaderEntry({title, link, text, svg}){ /* TODO: Create an SVG component so that I can pass it values rather than the code*/
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };

    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };

    return(
        <a href={link}
           id={title} 
           className={'flex-item ' + status  + ' grid'} 
           onMouseEnter={onMouseEnter} 
           onMouseLeave={onMouseLeave}
           >
            <span id={title + '-icon'}>
               {svg}
            </span>
            <span id={title + '-text'} className={'text-default header-entry-text'}>{text}</span>
        </a>
    );
}
