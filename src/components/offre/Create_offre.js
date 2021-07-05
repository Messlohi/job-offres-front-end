import React, { useContext, useEffect, useState } from 'react'; 
import { getCategories } from '../../api/api.categories';
import { getOffreById, updateOffre } from '../../api/api.offres';
import { UserContext } from '../../firebase/Provider';   

  
function Create_offre({props,match}) {	
    const [offre,setOffre]=useState({idService:0,nom:"",descri:"",categorie:"",address:"",prix:"",imgs:[]});
    const [categories,setcategories]=useState([]); 
    const id=match.params? match.params.id:0;
    const user=useContext(UserContext);  
    useEffect(() => {
        console.log(user)
       getCategories().then((result) => {
           setcategories(result.data);
       }).catch((err) => {
           alert(err)
       });
       if(id){
            getOffreById(id)
            .then((result) => setOffre(result.data))
            .catch((err) => setOffre(err.data));
       }
    }, []);
    function myChangeHandler (event) {
        let name = event.target.name;
        let val = event.target.value;
        setOffre({...offre, [name] : val});	
       // console.log(offre);	 
    } 

    function onFileChangeHandler (e){
        // e.preventDefault(); 
        // files= Array.from(e.target.files)
        // console.log("adding files",files);  
    };
    function addOffer() { 
        const imgs=offre.imgs;
        const file=document.getElementById("file").files[0];  
        if(!file) {
            alert("veuillez choisir une image");
            return;
        }
        imgs.push(file.name)
        setOffre({...offre, imgs : imgs});	 
        const formData = new FormData();
        formData.append('nom', offre.nom);
        formData.append('descri', offre.descri);
        formData.append('address', offre.address);
        formData.append('descri', offre.descri);
        formData.append('prix', offre.prix); 
        formData.append('categorie', offre.categorie); 
        formData.append('creatorID', user.currentUser.id);
        formData.append('file', file);
        if(!id){ 
            console.log("updating",formData);
            fetch('http://localhost:8080/offres', {
                method: 'post',
                body:formData 
            }).then(res => {
                if(res.ok) {
                    console.log("adding ",id ,"formdata", formData);
                    console.log(res.data);
                    alert("File uploaded successfully.");
                    window.location="/offres";
                } 
            }); 
        }else{ 
            // console.log("updating",formData);
            formData.append('idService', offre.idService);
            updateOffre(formData)
                .then(r=>{
                    console.log(r);
                    console.log("updating ",id ,"formdata", formData);
                    alert("modifié");
                    // window.location="/offres";
                })
                .catch(err=>console.log(err)) 
        }
    }
    return ( 
        <div>
            <div className="form-horizontal">
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
                    <label className="control-label text-left col-md-2">Categorie</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                        <select  value={offre.categorie}  onChange={myChangeHandler} name="categorie" className="form-control">
                            {categories.map((c)=> <option key={c.idCateg} value={c.idCateg} >{c.nomCateg||"Categorie"}</option>)}
                        </select>
                    </div>
                </div> 
                <div className="form-group">
                    <label className="control-label text-left col-md-2">Image</label>  
                    <div className="col-md-8 col-lg-4 px-0"> 
                         <input type="file" className="form-control"  id="file" name="file" onChange={onFileChangeHandler}/>
                  </div>
                </div> 
                <div id="divContainer" className="w-50" >
                    <input type="submit" value="Créer"  onClick={()=>addOffer()} name="imgs" className="btn btn-lg btn-primary px-5 ml-1" />
                </div>
            </div>  
        </div>
    )
}
export default Create_offre;
 