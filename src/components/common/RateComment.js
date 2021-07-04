import React, { useEffect, useState } from "react"; 
import { getRatings } from "../../api/api.ratings";
import Starts from "./Starts";
function RateComment(props){ 
    return (
        <div>
            {props.comments.map(c=>
                 <div key={c.num} className="border my-2 p-2 rounded user_rate">
                     <div  style={{"display": "flex","justifyContent": "space-between"}}>
                        <div> 
                            <h4 className="font-weight-bold mb-0">{c.user_rator.nomComplet}</h4>
                            <div className="text-secondary m-0 p-0"><i className="fas fa-clock pr-1"></i>{new Date(c.date).toUTCString() }</div>
                        </div> 
                        <div className="">
                            <Starts rate={c.points} />
                            
                        </div>
                     </div>
                     <div>
                         <h5 className="mt-2 pl-2 bg-light alert alert-light rounsded" style={{"borderRadius":"5px"}}>{c.comment}</h5>
                     </div>
             </div> 
            )}
           
        </div>
    ); 
}
export default RateComment;