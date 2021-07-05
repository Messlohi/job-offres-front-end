import React, { useContext }  from 'react'; 
import img from '../../assets/plombier.jpg'
import { Link, withRouter } from "react-router-dom"; 
import { UserContext } from '../../firebase/Provider';
function OffreCard(props) {			  	//must start with an upper case letter
    //const [color,setColor]=useState("black"); 
    const {idService,nom,creator,prix,address,descri,imgs}=props.offre; 
    const user=useContext(UserContext); 
    const id=user.currentUser? user.currentUser.id:null; 
    
     return ( 
         <div>
             <div className="d-flex border m-2 OffreCard " id={idService} > 
                <div className="img-side bg-light d-flex align-items-center">
                    <img className="cardImg img img-responsive h-d100 w-100  justi" src={imgs? imgs[0]:img} alt="card Img"/>
                </div>
                <div className="card-body  p-3">
                    <div className="d-flex" style={{"justifyContent":"space-between"}}>
                        <h2 className="h2 pt-0 ">{nom}</h2>
                        <div className="trait-offre">
                            {user.currentUser&&id? (id===creator.idFirebase?
                                <div> 
                                    <Link to={{pathname:"/offres/edit/"+idService}} className=" "> 
                                        <i className="btn text-primary fas fa-edit"></i>
                                    </Link>
                                    <i className="btn text-danger fas fa-trash" onClick={()=>props.handlDeleteOffre(idService)}></i>
                                </div>:""):""
                            }
                        </div>
                    </div>
                    <a href="#" className="my-0 mb-2 px-1" style={{"color":"#848282"}}><i className="fass fas-user"></i>{creator.nomComplet || "User"}</a>
                    <ul className="list-unstyled p-0  ">
                        <li className="col-md-8 pl-0 my-1">
                            <i className="fas fa-info-circle text-secondary"></i>{descri}
                        </li>
                        <li className="col-md-8 pl-0 my-1">
                            <i className="fas fa-map-marker-alt text-secondary">  </i>{address}
                        </li>
                        <li className="col-md-8 pl-0 my-1">
                            <i className="fas fa-phone text-secondary">  </i>{creator.tel || "tel"}
                        </li>
                        <li className="col-md-12 pl-0 my-0 d-flex" style={{"justifyContent":"space-between"}}>
                            <div>
                                <i className="fas fa-dollar-sign text-secondary"></i>{prix}
                            </div>
                            <div>
                                <button className="btn btn-orange py-2" onClick={()=>props.history.push("/offres/details/"+idService)}>Voir Détails</button>
                            </div>
                        </li>
                    </ul> 
                </div>
            </div>
            
    </div>
     );
}
export default withRouter(OffreCard);