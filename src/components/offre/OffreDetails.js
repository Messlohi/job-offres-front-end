import React, { useEffect, useState } from 'react';
import img from '../../assets/plombier.jpg'
import {getOffreById} from '../../api/api.offres';
function OffreDetails({match}) {
    const [offre, setoffre] = useState({}); 
    const id=match.params.id;
    useEffect(() => {
        getOffreById(id)
            .then(d=> setoffre(d.data))
            .catch(e=> console.log(e));
    }, [id]);
    console.log(offre);
   // const { idService1, nom ,prix100,descri ,address ,date ,imgsnull,categorie ,creator }=props.offre;
    return ( 
        <div>
            <div class="row">
                <div class="col-md-8 col-xs-12 col-sm-12 container border">
                      <div className="">
                          <div>
                                <h4 className="text">{offre.nom}</h4>
                                <p className="text text-secondary">{new Date(offre.date).toUTCString()}</p>
                          </div>
                           <div>
                               <img src={img} className="w-100 img img-responsive"/>
                           </div>
                           <div>
                               <h5 className="my-2 p-2 bg-light">Détails</h5>
                               <div className="p-2">
                                    <p>Prix: <span className="text text-secondary">{offre.prix}</span></p>
                                    {/* <p>Address: <span className="text text-secondary">{offre.address}</span></p> */}
                                    {/* <p>Téléphone: <span className="text text-secondary">{offre.creator.tel}</span></p> */}
                                    {/* <p>Email: <span className="text text-secondary">{offre.address}</span></p> */}
                             </div>
                           </div>
                      </div>
                      <div className="border p-2 m-2">
                          comments
                      </div>
                </div> 
                <div class="col-md-4 col-xs-12 col-sm-12 bg-light border">
                      <div>
                            user contact
                      </div>
                </div>
                    
            </div>
        </div>
    )
}
export default OffreDetails;