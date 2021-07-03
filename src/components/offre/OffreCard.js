import React  from 'react';
import './OffreCard.css'
import img from '../../assets/plombier.jpg'
function OffreCard(props) {			  	//must start with an upper case letter
    //const [color,setColor]=useState("black");
    console.log(props.offre);
    const {idService,nom,categorie,creator,prix,address,descri,imgLink}=props.offre; 
     return (
        <div className="d-flex border m-2 OffreCard " key={props.key}> 
            <div className="img-side bg-light d-flex align-items-center">
                <img className="cardImg img img-responsive w-100  justi" src={img} alt="card Img"/>
            </div>
            <div className="card-body  p-3">
                <h2 className="h2 pt-0 ">{nom}</h2>
                <p className="my-0 mb-2 px-1" style={{"color":"#848282"}}>{categorie.nomCateg || "Categorie"}</p>
                <ul className="list-unstyled p-0">
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-info-circle text-secondary"></i>{descri}
                    </li>
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-map-marker-alt text-secondary">  </i>{address}
                    </li>
                    <li className="col-md-8 pl-0 my-1">
                        <i className="fas fa-phone text-secondary">  </i>0602052832
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