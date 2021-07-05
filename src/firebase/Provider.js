import React, {createContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument ,firestore} from "./firebase.utils";

export const UserContext = createContext({ user: null });
function UserProvider(props){
    const [user, setuser] = useState({})
    useEffect( ()=>{
        auth.onAuthStateChanged(async userAuth => {
              if(userAuth){
                const userRef = firestore.doc(`users/${userAuth.uid}`)
                userRef.onSnapshot(snap => {
                    setuser({currentUser :{
                      id : snap.id,
                    ...snap.data()
                  }})
                })
              } 
            }) 
      },[])
    return (
      <UserContext.Provider value={user}>
        {props.children}
      </UserContext.Provider>
    ); 
}
export default UserProvider;