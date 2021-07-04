import React from 'react' 
import './User_info.css'
export default function User_info(props){ 

    return (    
        <div >
            <div className="rows px-0 border rounded">
                <div className=""> 
                    <div className="text-center card-box">
                        <div className="member-card pt-2 pb-2">
                            <div className="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                            <div className="">
                                <h4>Alfred M. Bach</h4>
                                <p className="text-muted">Manager </p>
                            </div> 
                            <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Contacter</button>
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>7421</h4>
                                            <p className="mb-0 text-muted">Wallets Balance</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>14754</h4>
                                            <p className="mb-0 text-muted">Income amounts</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mt-3">
                                            <h4>11525</h4>
                                            <p className="mb-0 text-muted">Total Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}