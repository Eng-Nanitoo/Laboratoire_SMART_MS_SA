import React from 'react'
import './Labo.css';
import Map from '../assets/Map.png';

function Labo() {
  return (
    <div className='container-labo bg-white rounded-[7px] min-w-full'>
        
        <div className="form">
            <div className="logo">
                <h1 className='font-bold text-xl'>LABO</h1>
            </div>
            <div className="form-container flex justify-between">
                <form>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Nom</label>
                            <input type="text" placeholder='Nom complet' className='rounded-[5px] border'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Telephone</label>
                            <input type="text" placeholder='telephone' className='rounded-[5px] border'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Adresse</label>
                            <input type="text" placeholder='Adresse' className='rounded-[5px] border'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Email</label>
                            <input type="text" placeholder='email' className='rounded-[5px] border'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Numero d'identite</label>
                            <input type="text" placeholder='Id' className='rounded-[5px] border'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-label">
                            <label htmlFor="" className='font-medium text-sm'>Coordonnees</label>
                            <input type="text" placeholder='Coordonnees' className='rounded-[5px] border'/>
                        </div>
                    </div>
                </form>
                <div className="map-container">
                    <div className="map-image">
                        <img src={Map} alt="" width={350} height={250} />
                    </div>
                    <div className="button">
                        <button className='text-white w-40 text-center rounded-[3px] cursor-pointer'>Enregistrer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Labo
