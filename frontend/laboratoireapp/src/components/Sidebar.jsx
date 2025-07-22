import './Sidebar.css';
import LogoSmart from '../assets/Logo_Smart.png'

function Sidebar(){
    return (
        <aside className="sidebar">
            <img src={LogoSmart} className='logo' width={100} height={100}/>
            <div className="links">
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'>
                    </i>Dashbord
                </a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Gestion des utilisateurs</a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Information du labo</a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Suivie du stock</a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Gestion des spécialistes</a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Type des analyse</a>
                <a href="/dashbord" className='text-sm block font-medium'><i class='bx bxs-dashboard'></i>Article</a>
            </div>
        </aside>
    )
}

export default Sidebar;