import './App.css';
import OffreCard from './components/offre/OffreCard';
import OffresPage from './components/offre/OffresPage';
import Header from './components/header/header.component';
import MainPage from './pages/main_page/main_page.component';


function App() {
    const offre={id:1,titre:"Plombier Fes",category:"catego",prix:'55 dh/m',desc:"desc",addres:"addresse",img:"./assets/logo.png"};
    return ( 
        <div>
            <Header/>
            <div className="container">
                {/* <MainPage/> */}
                {/* <OffreCard offre={offre}/> */}
                <OffresPage/>
            </div>
        </div>
    );
}
export default App;