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
            {offres.map(offre=> <OffreCard offre={offre}/>)}
       
        </div>
    )
}
export default OffresPage;