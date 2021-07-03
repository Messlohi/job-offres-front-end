import React, { useEffect, useState } from 'react';
import './OffreCard.css'
import {getOffres} from '../../api/api.offres';
import OffreCard from './OffreCard';
function OffresPage(props) {	
    const [offres,setOffres]=useState([]);
    useEffect(() => {
        getOffres()
            .then(d=> setOffres(d.data))
            .catch(e=> console.log(e));
    }, [])
    // console.log(offres);
    return (
        <div>
            <div>
                <button className="btn btn-primary">Créer un offre</button>
            </div>
            <div>
                 {offres.map(offre=> <div className="offre-container" key={offre.idService}><OffreCard offre={offre}/></div>)}
            </div>
        </div>
    )
}
export default OffresPage;