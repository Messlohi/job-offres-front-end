import { Route,Switch ,Redirect } from 'react-router';
import { useState ,useEffect} from 'react';
import './App.css';
import {React,useContext} from 'react'
import Header from './components/header/header.component';
import Create_offre from './components/offre/Create_offre';
import OffreDetails from './components/offre/OffreDetails';
import OffresPage from './components/offre/OffresPage'; 
import MainPage from './pages/main_page/main_page.component';
import SingInSingUp from './pages/signin_singup/signin_singup';
import Profile from './pages/profile/Profile';
import ChatPage from './pages/chat_page/ChatPage';
import  UserProvider  from  './firebase/Provider';
import  Nav  from  './components/nav/Nav';


import {auth,createUserProfileDocument} from './firebase/firebase.utils';
 function App(props) {
    const [currentUser ,setCurrentUser] = useState({});
    var userAuthGlobal = null;
    var unsubscribeFromAuth = null

    useEffect( ()=>{
      unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
              const userRef = await  createUserProfileDocument(userAuth,{})
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
          return () => {
            unsubscribeFromAuth();
          }
    },[userAuthGlobal])
    return ( 
        <div>
          <UserProvider>
            <Header currentUser={currentUser}/>
            <Route path='/' exact component={MainPage} />
            <div className="container  body-content content-wrapper"> 
            <Switch>
                <Route path='/offres'exact component={OffresPage} />
                <Route path='/chat' exact component={ChatPage}/>
                <Route path='/profile' exact component={currentUser==null?MainPage:Profile}/>
                <Route  path='/offres/details/:id' component={OffreDetails} /> 
                <Route exact path='/offres/add'component={Create_offre} />
                <Route  path='/offres/edit/:id'component={Create_offre} /> 
                {currentUser?  <Redirect to='/'/> :<Route path='/signin'exact component={SingInSingUp} />}
                {currentUser?  <Redirect to='/'/> :<Route path='/signout'exact component={SingInSingUp} />}
            </Switch>
            </div>
            </UserProvider>
        </div>
    );
}

export default App;


