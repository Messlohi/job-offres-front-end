import React, { useEffect, useState } from 'react';
import './OffreCard.css'
import {getOffres} from '../../api/api.offres';
import OffreCard from './OffreCard';
import { getCategories } from '../../api/api.categories';
import { Link } from 'react-router-dom'; 
function OffresPage(props) {	
    const [offres,setOffres]=useState([]);
    const [categories,setcategories]=useState([]); 
    const [selectedCateg,setselectedCateg]=useState(0);
  
    useEffect(() => {
        fetchCategos();
        if(selectedCateg===0){
            fetchOffres();
        }else{
        getOffres()
            .then(d=>{
                setOffres(d.data.filter(e=> e.categorie.idCateg===selectedCateg));
            })
            .catch(e=> console.log(e));
            
            }
    }, [selectedCateg]) 
    function fetchCategos() {
        getCategories().then((result) => {
            setcategories(result.data);
            }).catch((err) => {
                alert(err)
            });
    }
    function fetchOffres() {
        getOffres()
        .then(d=> setOffres(d.data))
        .catch(e=> console.log(e));
    }
    return ( 
        <div className="row">
                <div className="col-md-3 col-xs-12 my-1 ">
                  <div className="sidebar  bg-light border rounded">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title h5">
                                        {/* <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                                            <i className="more-less fas fa-stream p-2 py-3"></i> Les catégories            
                                        {/* </a> */}
                                    </h4>
                                </div>
                                <form method="get" id="search_cats_w" action="https://bricom.ma/search-results/">
                                    <div id="collapseOne" className="panel--collapse collapse- in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body categories">
                                            <ul className="list-group m-0 my-2">  
                                                <li className={`pl-2 list-group-item btn btn-outline-primary ${ selectedCateg===0? "active" : ""}`} 
                                                    onClick={()=>setselectedCateg(0)}>Tous 
                                                </li>
                                                {categories.map((c)=> 
                                                    <li key={c.idCateg}  
                                                            className={`pl-2 list-group-item btn btn-outline-primary ${c.idCateg === selectedCateg? "active" : ""}`}
                                                            onClick={()=>setselectedCateg(c.idCateg)}
                                                            >{c.nomCateg }
                                                    </li>) 
                                                }
                                            </ul>	
                                        </div>
                                    </div>
                                </form>
                            </div>       
                        </div>
                    </div>
                </div>
            <div className="col-md-9 col-lg-9 col-xs-12 white-bg my-1 border rounded">
                <div>
                    <div>
                        <Link to="/offres/add" className="btn btn-primary">Créer un offre</Link>
                    </div>
                    <div>
                        {offres.map(offre=> <div className="offre-container" key={offre.idService}><OffreCard offre={offre}/></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OffresPage;