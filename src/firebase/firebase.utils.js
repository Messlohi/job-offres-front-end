import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

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
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const singInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        //Adding user to SQL database
        const user = {
            "id":"0",
            "email": email,
            "nomComplet": displayName,
            "idFirebase": userAuth.uid,
            "tel": "-",
            "adress": "-",
            "isConnected": true,
            "imgPath" : "-"
    
    }

     addUser(user).then(snap => {
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
    return userRef;
}

export default firebase;