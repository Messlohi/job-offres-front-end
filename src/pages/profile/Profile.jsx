import React ,{useState,useEffect,useContext, useRef} from 'react'
import { useParams,withRouter } from 'react-router';

import { firestore, storage } from '../../firebase/firebase.utils'
import { UserContext } from '../../firebase/Provider';
import { getUserById,updateUser } from '../../api/api.users';

import './Profile.scss'

const CardInfo = ({onClickEdit,profileInfo,idExist}) => 
{
    return(
        <div className="card-body">
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">Nom Complet</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {profileInfo.displayName}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                        {profileInfo.email}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">Téléphone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {profileInfo.tel}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {profileInfo.addr}
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">Spécialité</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {profileInfo.spec}
                </div>
            </div>
            <hr />
            {!idExist &&
            <div className="row">
            <div className="col-sm-12">
                <a className="btn btn-info " onClick={(e)=>onClickEdit(e)} value="edit" href="#">Edit</a>
            </div>
              </div> 
            
            }
               
        </div>
    )
}


const EditCard = ({HandelOnChage,onClickSave,profileInfo})=> {
    return(
        <div className="card">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Nom Complet</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text"  name="displayName" className="form-control" 
                        value={profileInfo.displayName}
                        onChange={HandelOnChage}
                      />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text"  name="email" className="form-control"
                         value={profileInfo.email}
                         onChange={HandelOnChage}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Téléphone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" name="tel" className="form-control" 
                         value={profileInfo.tel}
                           onChange={HandelOnChage}
                    />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" name="addr" className="form-control"
                         value={profileInfo.addr}
                          onChange={HandelOnChage}
                         />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Spécialité</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" name="spec" className="form-control"
                         value={profileInfo.spec}
                          onChange={HandelOnChage}
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                        <input type="button" className="btn btn-primary px-4" 
                        onClick={(e)=>onClickSave(e)}
                        value="Enregistrer"/>
                    </div>
                </div>
            </div>
        </div>    
    )

}


const Profile = ({history}) => {
const {currentUser} = useContext(UserContext);
const [editButtonClicked , setEditButtonClicked] = useState(false);
const [profileInfo ,setProfileInfo] = useState({});
const [usetId,setUserId] = useState("");
const {id} = useParams();
var idExist =false;
const refImg = useRef(null)



 useEffect(async () => {
     if(currentUser!=null){
         //geting user data from fire base
        //  const userRef = await firestore.doc(`users/${currentUser.id}`).get()
        //  const userData = userRef.data()
        //  console.log(userData)
         //setProfileInfo(userData)
        let usetIdA = id!=null?id:currentUser.id
        idExist = id==null
        setUserId(usetIdA)
         getUserById(usetIdA).then(usera => {
             let user = usera.data
            let userFetched = {
                displayName:user.nomComplet,
                spec : user.specialite,
                img : user.imgPath,
                addr : user.adress,
                tel : user.tel,
                email : user.email,
                idSQl : user.idUser
            }
            setProfileInfo(userFetched)
         })
     
     }
     return () => {
         
     }
 }, [currentUser])

 const onClikMessage = () => {
        history.push(`../chat/${currentUser.id}...${usetId}`)
}


const HandelOnChage = (event)=> {
    const {name, value } = event.target;
    setProfileInfo({...profileInfo,[name]:value})
}
const getExtension = (filePath) => {
    var splitedPath = filePath.split('.');
    return splitedPath[splitedPath.length-1];
}

const uploadImg=  (event) =>{
    if(event.target.files[0]!=null){
        console.log("changed")
        setProfileInfo({ ...profileInfo,
            img:URL.createObjectURL(event.target.files[0])})
        var storageRef = storage.ref(); 
        var date = new Date().getTime();
        var uploadTask = storageRef.child(`profilImg/${date}.${getExtension(event.target.value)}`)
        .put(event.target.files[0])
        uploadTask.on('state_changed',()=> {},(err)=> alert(err),()=> {
            const {img , ...otherProps} = profileInfo;
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    firestore.doc(`users/${currentUser.id}`).update({img:downloadURL,...otherProps})  
                    const {displayName ,addr, img,tel ,spec,email,idSQl} = profileInfo;
                    let user = {
                        idUser:idSQl,
                        nomComplet:displayName,
                        idFirebase :currentUser.id,
                        adress:addr,
                        imgPath:downloadURL,
                        specialite:spec,
                        tel:tel,
                        email:email,
                    }
                 updateUser(user).then()
                });
        })
    }
}
const removeImg = () => {
    const {img , ...otherProps} = profileInfo;
    firestore.doc(`users/${currentUser.id}`).update({...otherProps})  
    const {displayName ,addr,tel ,spec,email,idSQl} = profileInfo;
    let user = {
        idUser:idSQl,
        nomComplet:displayName,
        idFirebase :currentUser.id,
        adress:addr,
        specialite:spec,
        tel:tel,
        email:email,
    }
    updateUser(user)
    setProfileInfo(otherProps);
}

const onClickEdit  = (e) => {
    setEditButtonClicked(true);
}



const onClickSave =(e) =>{
     setEditButtonClicked(false);
     const {displayName ,addr, img,tel ,spec,email,idSQl} = profileInfo;
        let user = {
            idUser:idSQl,
            nomComplet:displayName,
            idFirebase :currentUser.id,
            imgPath:img,
            adress:addr,
            specialite:spec,
            tel:tel,
            email:email,
        }
     updateUser(user).then(snap => console.log(snap))
     // firestore.doc(`users/${currentUser.id}`).update(profileInfo)  
    }


return(
    <div className="container">
        <div className="main-body">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img ref={refImg} src={profileInfo.img ? profileInfo.img : "https://saccade.ca/img/autiste-apropos.svg"} alt="Admin" className="rounded-circle" width="150"/>
                            <div style={{display:'flex',gap:'10px'}}>
                            {id == null?
                            <>
                              <span onClick={removeImg}><i class="fas fa-trash text-danger" style={{cursor:'pointer'}}></i></span>
                              <label  for="choseImg"  style={{cursor:'pointer'}}><i class="fas fa-file-image text-primary" ></i></label>
                              </>
                              : null
                            }
                          
                            </div>
                            <input type="file" 
                                accept="image/gif, image/jpeg, image/png"
                                onChange={uploadImg}
                                id="choseImg" hidden/>
                            <div className="mt-3">
                                <h4>{profileInfo.displayName}</h4>
                                {/* <p className="text-secondary mb-1">{profileInfo.desc ? profileInfo.desc : "description"}</p> */}
                                <br/>
                                <button className="btn btn-outline-primary" onClick={()=> onClikMessage()}>Message</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                <span className="text-secondary">https://bootdey.com</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                <span className="text-secondary">@bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <span className="text-secondary">bootdey</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card mb-3">
                      {editButtonClicked==false? 
                      <CardInfo
                      idExist
                        profileInfo={profileInfo}
                       onClickEdit={onClickEdit}/>
                       :<EditCard 
                       profileInfo={profileInfo}
                       HandelOnChage={HandelOnChage} 
                       onClickSave={onClickSave}/>}
                    </div>
                </div>   
            </div>
         
        </div>
    </div>
)

}

export default withRouter(Profile);