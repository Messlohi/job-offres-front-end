import { Route } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import Create_offre from './components/offre/Create_offre';
import OffresPage from './components/offre/OffresPage'; 
import OffreDetails from './components/offre/OffreDetails'; 
import MainPage from './pages/main_page/main_page.component';
function App() {
    return ( 
        <div>
            <Header/>
            <Route path='/' exact component={MainPage} />
            <div className="container  body-content content-wrapper"> 
                <Route path='/offres'exact component={OffresPage} />
                <Route path='/offres/add' component={Create_offre} />
                <Route path='/offres/:id' component={OffreDetails} />
            </div>
        </div>
    );
}
export default App;