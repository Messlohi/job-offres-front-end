import './App.css';
import Header from './components/header/header.component';
import Create_offre from './components/offre/Create_offre';

import OffresPage from './components/offre/OffresPage';

import {Switch,Route} from 'react-router-dom';
import MainPage from './pages/main_page/main_page.component';


function App() {
    return ( 
        <div>
            <Header/>
            <div >
                <MainPage />
                 <OffresPage/> 
            </div>
        </div>
    );
}


export default App;