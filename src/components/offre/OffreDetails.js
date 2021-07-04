import React, { useEffect, useState } from 'react';
import img from '../../assets/plombier.jpg'
import {getOffreById} from '../../api/api.offres';
import RateComponent from '../common/rate';
function OffreDetails({match}) {
    const [offre, setoffre] = useState({}); 
    const [comment, setcomment] = useState("");
    const [rate, setrate] = useState(0);
    const id=match.params.id;
    useEffect(() => {
        getOffreById(id)
            .then(d=> setoffre(d.data))
            .catch(e=> console.log(e));
    }, [id]);
    // console.log(rate);
    return ( 
        <div>
            <div className="row ">
                <div className="col-md-8 col-xs-12 col-sm-12 container border p-2">
                      <div className="">
                          <div>
                                <h4 className="text">{offre.nom}</h4>
                                <p className="text m-0 py-0 text-secondary">{new Date(offre.date).toUTCString()}</p>
                          </div>
                           <div>
                               <img src={offre.imgs? offre.imgs[0]:img} className="w-100 img img-responsive" alt=""/>
                           </div>
                           <div>
                               <h5 className="my-2 p-2 bg-light">Détails</h5>
                               <div className="p-2">
                                    <p>Prix: <span className="text text-secondary">{offre.prix}</span></p>
                                    <p>Address: <span className="text text-secondary">{offre.creator? offre.address:""}</span></p>
                                    <p>Téléphone: <span className="text text-secondary">{offre.creator? offre.creator.tel:"" }</span></p>
                                    <p>Email: <span className="text text-secondary">{offre.creator? offre.creator.email:""}</span></p>
                             </div>
                           </div>
                      </div>
                      <div className="border p-2" >
                          <h5 className="my-2 p-2 bg-light">Evaluer Service</h5>
                          <RateComponent rate={rate} setrate={setrate}/>
                          <textarea className="form-control my-2" value={comment} onChange={(e)=>setcomment(e.target.value)} placeholder="Commentaire..."/>
                          <button className="btn btn-orange">Envoyer</button>
                      </div>
                </div> 
                <div className="col-md-4 col-xs-12 col-sm-12  ">
                    <div className="bg-light border p-2 h-50">
                        <div>
                            user contact
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}
export default OffreDetails;