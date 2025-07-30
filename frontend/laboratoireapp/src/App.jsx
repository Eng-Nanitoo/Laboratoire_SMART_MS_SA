import Sidebar from "./components/Sidebar"
import './App.css';
import Header from "./components/Header";
import Login from "./auth/pages/Login";
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
import Article from "./pages/Article";
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Container from "./Container";
import GestionSpecialite from "./pages/GestionSpecialite";
import Register from "./auth/pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";


function Logout() {
    localStorage.clear()
    return <Navigate to="/login" replace />;
}

function App() {
    const element = [

            {
            "component" : <Dashbord/>,
            "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "Have a good day at work"
                }
            },
            {
            "component" : <Article/>,
            "headerContent" :
                {
                    "title" : "Article",
                    "description" : "Have a good day at work"
                }
            },
            {
            "component" : <GestionUtilisateur/>,
            "headerContent" :
                {
                    "title" : "Gestion des utilisateurs",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
                "component" : <GestionAnalyse/>,
            "headerContent" :
                {
                    "title" : "Type des analyses",
                    "description" : "Have a good day at work"
                }
            },
            {
            "component" : <GestionDemande/>,
            "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
            "component" : <AjouterUtilisateur/>,
            "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
                "component" : <AjouterSpecialite/>,
                "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
            "component" : <Labo/>,
            "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
            "component" : <GestionSpecialite/>,
            "headerContent" :
                {
                    "title" : "Gestion des utilisateurs",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
            {
            "component" : <DemandeAnalyse/>,
            "headerContent" :
                {
                    "title" : "Good Day",
                    "description" : "New, pending and completed  laboratory test request"
                }
            },
        ]
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/logout" element={<Logout/>} />

                <Route path="/dashbord" element={
                    <ProtectedRoute>
                        <Container element={element[0]}>
                        </Container>
                    </ProtectedRoute>
                }/>
            <Route 
                path="/article" 
                element={
                    <ProtectedRoute>
                        <Container element={element[1]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/labo" 
                element={
                    <ProtectedRoute>
                        <Container element={element[7]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/gestion/utilisateur" 
                element={
                    <ProtectedRoute>
                        <Container element={element[2]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/gestion/specialite" 
                element={
                    <ProtectedRoute>
                        <Container element={element[8]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route path="/gestion/analyse" element={
                <ProtectedRoute>

                    <Container element={element[3]}>
                    </Container>
                </ProtectedRoute>
            }/>
            <Route 
                path="/ajouter/specialite" 
                element={
                    <ProtectedRoute>
                        <Container element={element[6]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route path="/gestion/demande" element={
                <ProtectedRoute>
                    <Container element={element[4]}>
                    </Container>
                </ProtectedRoute>
            }/>
            <Route 
                path="/ajouter/utilisateur" 
                element={
                    <ProtectedRoute>
                        <Container element={element[5]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/ajouter/analyse" 
                element={
                    <ProtectedRoute>
                        <Container element={element[9]}>
                        </Container>
                    </ProtectedRoute>
                }
            />
            <Route 
                path="/login" 
                element={
                    <Login/>
                }
            />
            <Route 
                path="/register" 
                element={
                    <Register/>
                }
            />
        </Routes>
        </BrowserRouter>
    )
}

export default App
