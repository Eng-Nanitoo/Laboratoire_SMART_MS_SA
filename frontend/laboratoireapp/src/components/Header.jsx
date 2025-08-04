import {useState} from 'react'
import User from '../assets/user.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useSearch } from "../context/SearchContext";

function getCurrentDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(/,/g, '');
}

function Header({title,description}) {
    const date = getCurrentDate();
    const [navToggle, setLinkToggle] = useState(false);
    const { search, setSearch } = useSearch();


    const handleNavToggle = () => {
        setLinkToggle(prev => !prev);
    }

    return (
        <header className='flex content-center gap-20 sticky top-0 bg-[var(--background-color)]' style={{padding: '10px 20px', justifyContent: 'space-between'}}>
            <div className="page-description max-[900px]:hidden">
                <h2 className='font-medium max-[900px]:text-sm'>{title}</h2>
                <p className='text-sm opacity-[.8] max-[900px]:text-xs'>{description}</p>
            </div>
            <div className="search">
                <input
                    className='text-[#444] max-[900px]:'
                    type="search"
                    placeholder='Search here'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.95363 17.8445L8.05835 12.7435L5.41887 10.104L0.314152 15.2087C-0.104755 15.6276 -0.104755 16.3172 0.314151 16.7361L1.42258 17.8445C1.8452 18.2634 2.53843 18.2634 2.95363 17.8445Z" fill="#ACB1C6"/>
                    <path d="M6.55693 10.2192L7.93969 11.6019L9.51522 10.0264C11.6616 11.5167 14.6348 11.3091 16.5476 9.39619C18.6941 7.24976 18.6941 3.76135 16.5476 1.61121C14.4012 -0.538924 10.9128 -0.535217 8.76267 1.61121C6.84979 3.52409 6.64219 6.49721 8.13246 8.64364L6.55693 10.2192ZM9.84515 2.67887C11.4021 1.12187 13.9267 1.12187 15.48 2.67887C17.037 4.23586 17.037 6.76042 15.48 8.31371C13.923 9.8707 11.3984 9.8707 9.84515 8.31371C8.28816 6.76042 8.28816 4.23586 9.84515 2.67887Z" fill="#ACB1C6"/>
                </svg>
            </div>

            <div className='flex gap-5 date-time'>
                <p className='text-sm'>{date}</p>
                <div className="profile-image">
                    <img src={User} alt="" />
                </div>
                <div className="notification-icon">
                    <i className='bx bx-bell'></i>
                </div>
            </div>


            <div className="nav-links min-[901px]:hidden max-[900px]:block relative">
                <button onClick={handleNavToggle} className='toggle-button bg-white border-[1px] border-[#e8e8e8] rounded-[5px] p-2.5' style={{padding:5}}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_20_603)">
                            <path d="M4.16669 6.25H22.3485M7.57578 15.3409H22.3485M10.9849 24.4318H22.3485" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_20_603">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div
                    className={`dropdown-anim fixed top-16 right-0 ${navToggle ? 'open' : ''}`}
                    style={{ width: '200px', padding: '10px' }}
                >
                    <ul className={`flex flex-col bg-white shadow-lg rounded-[5px]`}>
                        <NavLink onClick={handleNavToggle} to='/dashbord' className='text-sm font-medium'>Dashbrod</NavLink>
                        <NavLink onClick={handleNavToggle} to='/gestion/utilisateur' className='text-sm font-medium'>Utilisateurs</NavLink>
                        <NavLink onClick={handleNavToggle} to='/labo' className='text-sm font-medium'>Laboratoire</NavLink>
                        <NavLink onClick={handleNavToggle} to='/ajouter/specialite' className='text-sm font-medium'>Spécialistes</NavLink>
                        <NavLink onClick={handleNavToggle} to='/gestion/analyse' className='text-sm font-medium'>Analyses</NavLink>
                        <NavLink onClick={handleNavToggle} to='/article' className='text-sm font-medium'>Article</NavLink>
                        <NavLink onClick={handleNavToggle} to='/logout' className='text-xs font-medium flex gap-20 items-center bg-zinc-100 '><span>Logout</span> 
                            <svg width="14" height="14" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 7.5V4.5C10.8333 3.70435 11.1143 2.94129 11.6144 2.37868C12.1145 1.81607 12.7927 1.5 13.5 1.5H22.8333C23.5406 1.5 24.2188 1.81607 24.7189 2.37868C25.219 2.94129 25.5 3.70435 25.5 4.5V22.5C25.5 23.2956 25.219 24.0587 24.7189 24.6213C24.2188 25.1839 23.5406 25.5 22.8333 25.5H13.5C12.7927 25.5 12.1145 25.1839 11.6144 24.6213C11.1143 24.0587 10.8333 23.2956 10.8333 22.5V19.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 13.5H1.5M1.5 13.5L5.5 9M1.5 13.5L5.5 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
