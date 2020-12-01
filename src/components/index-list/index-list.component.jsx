import React from 'react';
import './index-list.style.css'
import {Index} from '../index/index.component'

export const IndexList = (props) => {
    return(
        <div className='index-list'>
            {props.dramas.map(drama => <Index key={drama.id} drama={drama}/>)}
        </div>
    );
}