import './App.css';
import Header from './components/header/header.component';
import Create_offre from './components/offre/Create_offre';
import OffresPage from './components/offre/OffresPage';

function App() {
    return ( 
        <div>
            <Header/>
            <div className="container  body-content content-wrapper">
                {/* <MainPage/> */}
                 <OffresPage/> 
               {/* <Create_offre/>*/}
            </div>
        </div>
    );
}
export default App;