import React from 'react';
import './index.style.css'

export const Index = (props) =>{
    return(
        <div className='index-container'>
            <h1>{props.drama.name}</h1>
        </div>
    );
};