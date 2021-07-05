import React, { useEffect, useState } from 'react' 
import { getUserStatis } from '../../api/api.users';
import './User_info.css'
export default function UserInfo(props){ 
    const [stitis, setstitis] = useState({}) 
    const creator=props.creator; 
    const prct=Number(stitis.totalRate)? stitis.totalRate.toFixed(1)/5*100:0;
    useEffect(() => {  
        if(creator){  
            getUserStatis(creator.idUser)
                .then(d=> setstitis(d.data))
                .catch(e=> console.log(e));
        }
    }, [creator]); 
    // console.log(prct);
    return (    
        <div >
            <div className="rows px-0 border rounded">
                <div className=""> 
                    <div className="text-center card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-auto">
                                <img src={creator? creator.imgPath:"http://localhost:8080/user.png"} className="rounded-circle img-thumbnail" alt="profile"/>
                            </div>
                            <div className="mt-2">
                                <h4>{creator? creator.nomComplet:"creato"}</h4>
                                <p className="text-muted">{creator? creator.specialite:"dd"} </p>
                            </div> 
                            <button type="button" className="btn btn-primary mt-2 btn-rounded waves-effect w-md waves-light">Contacter</button>
                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-6 " style={{"borderRight":"solid 1px #c7c3c3"}}>
                                        <div className="mt-3">
                                            <h4>{stitis.nbOffers}</h4>
                                            <div className="p-0 m-0"><i className="fas fa-toolbox"></i></div>
                                            <p className="mb-0 text-muted">Total Services</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-3">
                                            <h4>{Number(stitis.totalRate)? stitis.totalRate.toFixed(1)+" / 5" : 0}</h4>
                                            
                                            <div className="progress my-1 mt-2" style={{"height":"11px"}}>
                                                <div className={"progress-bar bg-danger rounded"+ prct<30? "bg-danger":(prct>30&&prct<50? "bg-warning":"bg-success" )} 
                                                        role="progressbar" style={{"width":stitis.totalRate? (prct)+"%":(0+ "%"),"height":"10px","transition": "all 0.4s ease" }} 
                                                        aria-valuenow="0" 
                                                        aria-valuemin="0" 
                                                        aria-valuemax="100"
                                                        ></div>
                                            </div>
                                            <p className="mb-0 text-muted">Evaluation</p>
                                        </div>
                                    </div>
                                    {/* <div className="col-4">
                                        <div className="mt-3">
                                            <h4>11525</h4>
                                            <p className="mb-0 text-muted">Total Transactions</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}