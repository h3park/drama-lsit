import React from 'react';
import './index-list.style.css'

export const IndexList = (props) => {
    return(
        <div className='index-list'>
            {props.dramas.map(drama => <h1 key={drama.id}>{drama.name}</h1>)}
        </div>
    );
}