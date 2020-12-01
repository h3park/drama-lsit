import React from 'react';
import './index-list.style.css'

export const IndexList = (props) => {
    return(
        <div className='index-list'>
            {props.dramas.map(drama => <Card key={drama.id} drama={drama}/>)}
        </div>
    );
}