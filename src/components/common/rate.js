import React from 'react'
import './rate.css'
export default function RateComponent(props){
    const {rate, setrate} = props; 

    return (    
        <div style={{"position":"relative"}}>
            <div className="star-wrapper border">
                <span className={`fas fa-star s1 ${ rate===5? "selected":""}`} onClick={()=>setrate(5)}></span>
                <span className={`fas fa-star s1 ${ rate>=4? "selected":""}`} onClick={()=>setrate(4)}></span>
                <span className={`fas fa-star s1 ${ rate>=3? "selected":""}`} onClick={()=>setrate(3)}></span>
                <span className={`fas fa-star s1 ${ rate>=2? "selected":""}`} onClick={()=>setrate(2)}></span>
                <span className={`fas fa-star s1 ${ rate>=1? "selected":""}`} onClick={()=>setrate(1)}></span>
            </div>  
        </div>
    )
}