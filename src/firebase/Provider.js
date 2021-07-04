import React, {createContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "./firebase.utils";

export const UserContext = createContext({ user: null });
function UserProvider(props){
    const [user, setuser] = useState({})
    useEffect( ()=>{
        auth.onAuthStateChanged(async userAuth => {
              if(userAuth){
                const userRef = await  createUserProfileDocument(userAuth)
                userRef.onSnapshot(snap => {
                    setuser({currentUser :{
                      id : snap.id,
                    ...snap.data()
                  }})
                })
              }else {
                setuser(userAuth)
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