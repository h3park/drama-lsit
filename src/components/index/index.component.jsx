import React from 'react';
import './index.style.css'

export const Index = (props) =>{
    return(
        <div className='index-container'>
            {console.log(props.drama.poster_path)}
            <img src={`https://image.tmdb.org/t/p/w200${props.drama.poster_path}`}/>
            {/* <Image src={`https://image.tmdb.org/t/p/w500${props.drama.poster_path}`}  width={300} height={300}/> */}
            <h1>{props.drama.name}</h1>
        </div>
    );
};