import './NouvelleAnalyse.css';
import { useState } from 'react';
import DropDownMenu from '../components/DropDownMenu';

function NouvelleAnalyse() {
    const optionsEquipement = [
        "Sering",
        "Plasma",
    ]
    const optionsReactif = [
        "Panadol",
        "Paracetamol",
        "Smacta"
    ]
    

    const [isShowingDropdown1, setIsShowingDropdown1] = useState(false);
    const [isShowingDropdown2, setIsShowingDropdown2] = useState(false);
    const [equipment, setEquipment] = useState('');
    const [reactif, setReactif] = useState('');

    const showDropDown1 = () => {
        setIsShowingDropdown1(!isShowingDropdown1);
    }
    const showDropDown2 = () => {
        setIsShowingDropdown2(!isShowingDropdown2);
    }

    const handleAnalyseOption1 = (e) => {
        setEquipment(e.target.textContent);
        setIsShowingDropdown1(false);
    }
    
    const handleAnalyseOption2 = (e) => {
        setReactif(e.target.textContent);
        setIsShowingDropdown2(false);
    }

    return (
        <div className='container-nouvelle-analyse bg-white rounded-[5px]'>
            <h2 className='font-medium text-xl'>Nouvele Analyse</h2>
            <div className="nouvelle-analyse-form grid grid-cols-3">
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Nom de l'analyse</label>
                    <input type="text" placeholder="nom de l'analyse" />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Equipement requis</label>
                    <div className="input-dropdown-icon">
                        <input 
                            type="text" 
                            placeholder='Analyse' 
                            onClick={showDropDown1} 
                            value={equipment}
                            readOnly
                        />
                        <svg className='dropdown-icon' width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    {isShowingDropdown1 && (
                        <DropDownMenu 
                            Options={optionsEquipement} 
                            handleAnalyseOption={handleAnalyseOption1}
                        />
                    )}
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Dure prevu</label>
                    <div className="input-select">
                        <input type="text" placeholder='Nombre' />
                        <select name="" id="" className='text-sm'>
                            <option value="hour">Heure</option>
                            <option value="day">Jour</option>
                        </select>
                    </div>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Code de l'analyse</label>
                    <input type="text" placeholder="code de l'analyse" />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Reactif consomable</label>
                    <div className="input-dropdown-icon">
                        <input 
                            type="text" 
                            placeholder='Analyse' 
                            onClick={showDropDown2} 
                            value={reactif}
                            readOnly
                        />
                        <svg className='dropdown-icon' width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    {isShowingDropdown2 && (
                        <DropDownMenu 
                            Options={optionsReactif} 
                            handleAnalyseOption={handleAnalyseOption2}
                        />
                    )}
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Cout</label>
                    <input type="text" placeholder='cout' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Commentaire</label>
                    <textarea 
                        name="" 
                        id="" 
                        placeholder='commentaire'
                    ></textarea>
                </div>
            </div>
            <div className="submit-button">
                <button className='text-white font-medium text-sm rounded-[5px]'>Enregistrer</button>
            </div>
        </div>
    )
}

export default NouvelleAnalyse