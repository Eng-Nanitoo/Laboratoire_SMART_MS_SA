import React from 'react'
import User from '../assets/user.jpg'
import './Header.css'
function Header({title,description}) {
    const date = new Date();
    console.log(date)
    return (
        <header className='grid content-center gap-20'>
            <div className="page-description">
                <h2 className='font-medium'>{title}</h2>
                <p className='text-sm opacity-[.8]'>{description}</p>
            </div>
            <div className="search">
                <input className='text-[#444]' type="search" placeholder='Search here'/>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.95363 17.8445L8.05835 12.7435L5.41887 10.104L0.314152 15.2087C-0.104755 15.6276 -0.104755 16.3172 0.314151 16.7361L1.42258 17.8445C1.8452 18.2634 2.53843 18.2634 2.95363 17.8445Z" fill="#ACB1C6"/>
                    <path d="M6.55693 10.2192L7.93969 11.6019L9.51522 10.0264C11.6616 11.5167 14.6348 11.3091 16.5476 9.39619C18.6941 7.24976 18.6941 3.76135 16.5476 1.61121C14.4012 -0.538924 10.9128 -0.535217 8.76267 1.61121C6.84979 3.52409 6.64219 6.49721 8.13246 8.64364L6.55693 10.2192ZM9.84515 2.67887C11.4021 1.12187 13.9267 1.12187 15.48 2.67887C17.037 4.23586 17.037 6.76042 15.48 8.31371C13.923 9.8707 11.3984 9.8707 9.84515 8.31371C8.28816 6.76042 8.28816 4.23586 9.84515 2.67887Z" fill="#ACB1C6"/>
                </svg>
            </div>

            <div className='flex gap-5'>
                <p className='text-sm'>Monday Jul 07 2025</p>
                <div className="profile-image">
                    <img src={User} alt="" />
                </div>
                <div className="notification-icon">
                    <i className='bx bx-bell'></i>
                </div>
            </div>
        </header>
    )
}

export default Header
