import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '80px', fontSize: '2.5rem', color: '#2563eb'}}>404</h1>
            <p style={{textAlign: 'center', fontSize: '1.2rem'}}>Page non trouvée</p>
            <span style={{textAlign: 'center', fontSize: '1.2rem',display: 'block', marginTop: '20px'}}>
                <NavLink to='/dashbord'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 cursor-pointer'>Retourner au tableau de bord</button>
                </NavLink>
            </span>
        </div>
    )
}

export default NotFound
