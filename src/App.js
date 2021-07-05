import { Route,Switch } from 'react-router';
import { useState ,useEffect} from 'react';
import './App.css';
import {React,useContext} from 'react'
import Header from './components/header/header.component';
import Create_offre from './components/offre/Create_offre';
import OffresPage from './components/offre/OffresPage'; 
import MainPage from './pages/main_page/main_page.component';
import SingInSingUp from './pages/signin_singup/signin_singup';
import Profile from './pages/profile/Profile';
import ChatPage from './pages/chat_page/ChatPage';
import  UserProvider  from  './firebase/Provider';


import {auth,createUserProfileDocument} from './firebase/firebase.utils';


 function App() {

    const [currentUser ,setCurrentUser] = useState({});
    var userAuthGlobal = null;
    useEffect( ()=>{
      auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
              const userRef = await  createUserProfileDocument(userAuth)
              userRef.onSnapshot(snap => {
                setCurrentUser({currentUser :{
                    id : snap.id,
                  ...snap.data()
                }})
              })
            }else {
              setCurrentUser(userAuth)

            }
          })
    },[userAuthGlobal])


    return ( 
        <div>
          <UserProvider>
            <Header/>
            <Route path='/' exact component={MainPage} />
            <div className="container  body-content content-wrapper"> 
            <Switch>
                <Route path='/offres'exact component={OffresPage} />
                <Route path='/chat' exact component={ChatPage}/>
                <Route path='/profile' exact component={Profile}/>
                <Route path='/signin'exact component={SingInSingUp} />
                <Route path='/signout'exact component={SingInSingUp} />
                <Route path='/offres/:id' exact component={Create_offre} />
                <Route path='/offres/add' exact  component={Create_offre} />
            </Switch>
            </div>
            </UserProvider>
        </div>
    );
}

export default App;


