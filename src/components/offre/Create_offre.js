import React, { useEffect, useState } from 'react';

import { getCategories } from '../../api/api.categories';

import './OffreCard.css'

function Create_offre(props) {	
    const [offre,setOffre]=useState({idService:0,nom:"",descri:"",categorie:"",address:"",prix:"",imgs:[]});
    const [categories,setcategories]=useState([]); 
    useEffect(() => {
       getCategories().then((result) => {
           setcategories(result.data);
       }).catch((err) => {
           alert(err)
       });
    }, []);
    function myChangeHandler (event) {
        let nam = event.target.name;
        let val = event.target.value;
        setOffre({...offre, [nam] : val});	
        console.log(offre);	 
    }
    function onFileChangeHandler (e){
        e.preventDefault(); 
        const files = Array.from(e.target.files)
        console.log("files",files); 
        const imgs=offre.imgs;
        imgs.push(files[0].name)
        setOffre({...offre, imgs : imgs});	
        console.log(offre,"offffff");
    
        const formData = new FormData();
        formData.append('nom', offre.nom);
        formData.append('descri', offre.descri);
        formData.append('address', offre.address);
        formData.append('descri', offre.descri);
        formData.append('prix', offre.prix); 
        formData.append('categorie', offre.categorie); 
        formData.append('file', files[0]);
        fetch('http://localhost:8080/offres', {
            method: 'post',
            body:formData 
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });  
    };
    return (
        <div>
            <form className="form-horizontal">
                <hr />
                <div className="form-group">
                    <label className="control-label text-left col-md-2">Service</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <input type="text" value={offre.nom} onChange={myChangeHandler} name="nom" className="form-control"/>
                    </div>
                </div>  
                <div className="form-group">
                    <label className="control-label text-left col-md-2">prix</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <input type="string" value={offre.prix} onChange={myChangeHandler} name="prix"  className="form-control" placeholder="prix / unité"/>
                    </div>
                </div> 
                <div className="form-group">
                    <label className="control-label text-left col-md-2">Ville</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <input type="text" value={offre.address} onChange={myChangeHandler} name="address" className="form-control"/>
                    </div>
                </div> 
                <div className="form-group">
                    <label className="control-label text-left col-md-2">descri</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <textarea type="text" value={offre.descri} onChange={myChangeHandler} name="descri" className="form-control"/>
                    </div>
                </div>  
                <div className="form-group">
                    <label className="control-label text-left col-md-2">descri</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <select  value={offre.categorie}  onChange={myChangeHandler} name="categorie" className="form-control">
                            {categories.map((c)=> <option key={c.idCateg} value={c.idCateg} >{c.nomCateg||"Categorie"}</option>)}
                        </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label className="control-label text-left col-md-2">Image</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                         <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
                  </div>
                </div> 
                <div id="divContainer" className="w-50" >
                    <input type="submit" value="Créer"  onChange={onFileChangeHandler} name="imgs" className="btn btn-lg btn-primary px-5 ml-1" />
                </div>
            </form>  
        </div>
    )
}
export default Create_offre;
 