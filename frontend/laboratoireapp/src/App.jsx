import Sidebar from "./components/Sidebar"
import './App.css';
import Header from "./components/Header";
import Login from "./pages/Login";
import Main from "./components/Main";
import Dashbord from "./pages/Dashbord";
import Labo from "./pages/Labo";
import GestionUtilisateur from "./pages/GestionUtilisateur";
import DemandeAnalyse from "./pages/DemandeAnalyse";
import AjouterUtilisateur from "./pages/AjouterUtilisateur";
import AjouterSpecialite from "./pages/AjouterSpecialite";
import NouvelleAnalyse from "./pages/NouvelleAnalyse";
import GestionDemande from "./pages/GestionDemande";
import GestionAnalyse from "./pages/GestionAnalyse";

function App() {
    return (
        <>
            <div className="container min-w-full">
            <Sidebar/>
            <Header title="Good Day" description="Have a good day at work"/>
            <Main>
                <GestionAnalyse/>
            </Main>
            </div>
        </>
    )
}

export default App
