import React  from 'react';
import './OffreCard.css'
import img from '../../assets/plombier.jpg'
function OffreCard(props) {			  	//must start with an upper case letter
    //const [color,setColor]=useState("black");
    const {idService,nom,categorie,creator,prix,address,descri,imgs}=props.offre; 
     return ( 
        <div className="d-flex border m-2 OffreCard " id={idService}> 
            <div className="img-side bg-light d-flex align-items-center">
                <img className="cardImg img img-responsive h-d100 w-100  justi" src={imgs? imgs[0]:img} alt="card Img"/>
            </div>
            <div className="card-body  p-3">
                <h2 className="h2 pt-0 ">{nom}</h2>
                <a href="#" className="my-0 mb-2 px-1" style={{"color":"#848282"}}><i className="fass fas-user"></i>{creator.nomComplet || "User"}</a>
                <ul className="list-unstyled p-0">
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-info-circle text-secondary"></i>{descri}
                    </li>
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-map-marker-alt text-secondary">  </i>{address}
                    </li>
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-phone text-secondary">  </i>{creator.tel || "tel"}
                    </li>
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-dollar-sign text-secondary"></i>{prix}
                    </li>
            </ul> 
            </div>
        </div>
     );
}
export default OffreCard;