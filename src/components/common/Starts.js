import React from 'react'
import './rate.css'
export default function Starts(props){
    const {rate} = props;  
    return (    
        <div style={{"position":"relative"}}>
            <div className="  m-1 starts">
                <span className={`fas fa-star  ${ rate===5? "actif":""}`} ></span>
                <span className={`fas fa-star  ${ rate>=4? "actif":""}`} ></span>
                <span className={`fas fa-star  ${ rate>=3? "actif":""}`} ></span>
                <span className={`fas fa-star  ${ rate>=2? "actif":""}`} ></span>
                <span className={`fas fa-star ${ rate>=1? "actif":""}`} ></span>
            </div>  
        </div>
    )
}