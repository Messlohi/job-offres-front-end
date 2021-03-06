import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import Person from '../assets/person.png'
import { getUserById } from '../api/api.users';


import {addUser} from '../api/api.users';


  var firebaseConfig = {
    apiKey: "AIzaSyDBlryWaGzw8hpY-27lwdtx0GEV2xXNI3s",
    authDomain: "job-offer-38091.firebaseapp.com",
    projectId: "job-offer-38091",
    storageBucket: "job-offer-38091.appspot.com",
    messagingSenderId: "396939854310",
    appId: "1:396939854310:web:220c57fa494b7e7c6d1627"
  };
  
  firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth()
export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const database = firebase.database();


export const getCurrenUser = async () => {
    let uid=  ""
    await auth.onAuthStateChanged(async (userAuth) => {
        if(userAuth) {
            uid = userAuth.uid;
        }
    })
     return uid;
  } 


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const singInWithGoogle = async () => auth.signInWithPopup(provider);

const loadFormData = async (userAuth,addtion)=> {
    console.log(userAuth)
    console.log(addtion)
    const {email,uid } = userAuth;
    const { tel, addr} = addtion
    let displayName ="";
    if(userAuth.displayName==null)  {
        displayName = addtion.displayName
    }else{displayName = userAuth.displayName}
    const formData = new FormData();
    formData.append('idUser', '1');
    formData.append('nomComplet', displayName);
    formData.append('email', email);
    formData.append('password', '');
    formData.append('tel', tel?tel:"-");
    formData.append('adress', addr?addr:"-");
    formData.append('idFirebase', uid);
    formData.append('specialite', '-');
    return formData;
}


export const createUserProfileDocument = async(userAuth, additionalData,history) => {
    if (!userAuth ) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName,email } = userAuth;
        //Adding user to SQL database
        if(additionalData!= null ){
            let formData = await loadFormData(userAuth,additionalData);
            addUser(formData).then(snap => {
                console.log(snap)
            }).catch(err => alert(err))
            const createdAt = new Date();
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
              
            } catch (error) {
                window.alert("erreur in saving user " + error)
            }
        }
    }
       
    
    return userRef;
}

export default firebase;