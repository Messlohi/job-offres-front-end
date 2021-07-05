import React, { useEffect, useState ,useContext} from 'react'; 
import './offrePage.css'
import {deleteOffre, getOffres} from '../../api/api.offres';
import OffreCard from './OffreCard';
import { getCategories } from '../../api/api.categories';
import { Link, useLocation } from 'react-router-dom'; 
function OffresPage({match}) {	
    const [offres,setOffres]=useState([]);
    const [categories,setcategories]=useState([]);  
    const search = useLocation().search;
    var idCateg = new URLSearchParams(search).get('id');
    const [selectedCateg,setselectedCateg]=useState(idCateg? Number(idCateg):1000); 
    // console.log(idCateg ,selectedCateg);
    useEffect(() => { 
        fetchCategos();
        if(selectedCateg===1000){
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
    function handlDeleteOffre(id) {
        var flag=window.confirm("voulez vous supprimer cette offre?");
        if(flag) deleteOffre(id).then(r=>setOffres(r.data))
    }
    function handlCateg(id) {
        idCateg=id;
        setselectedCateg(id)
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
                                            <ul className="list-group m-0 my-2 categories-list">  
                                                <li className={`pl-2 list-group-item btn btnn-outline-primary ${ selectedCateg===1000? "picked" : ""}`} 
                                                    onClick={()=>handlCateg(1000)}>Tous 
                                                </li>
                                                {categories.map((c)=> 
                                                    <li key={c.idCateg}  
                                                            className={`pl-2 list-group-item btn btnn-outline-primary ${c.idCateg == selectedCateg? "picked" : ""}`}
                                                            onClick={()=>handlCateg(c.idCateg)}
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
            <div className="col-md-9 col-lg-9 col-xs-12 white-bg my-1 border rounded py-2">
                <div>
                    <div style={{"display": "flex","justifyContent": "space-between"}}> 
                        <h3 className="">Annonces</h3>
                        <div>
                            <Link to="/offres/add" className="btn btn-orange">Créer un offre</Link>
                        </div>
                    </div>
                    <div>
                        {offres.map(offre=> <div className="offre-container" key={offre.idService}><OffreCard offre={offre} handlDeleteOffre={handlDeleteOffre}/></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OffresPage;