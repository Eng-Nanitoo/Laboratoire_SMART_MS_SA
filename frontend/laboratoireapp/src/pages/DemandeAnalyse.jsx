import DropDownMenu from '../components/DropDownMenu';
import './DemandeAnalyse.css';
import { useState } from 'react';

function DemandeAnalyse() {
    const options = [
        "Analyse 1",
        "Analyse 2",
        "Analyse 3",
        "Analyse 4",
        "Analyse 5",
        "Analyse 6"
    ]
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    
    const showDropDown = () => {
        setIsShowingDropdown(!isShowingDropdown);
    }
    const handleAnalyseOption = (e) => {
        const inputField = document.querySelector('.input-dropdown-icon input');
        inputField.value = e.target.textContent;
        setIsShowingDropdown(false);
    }

    return (
        <div className='container-demande-analyse bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Demande d'analyse</h2>
            <div className="demande-analyse-form grid grid-cols-2">
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Nom du demandeur</label>
                    <input type="text" placeholder='nom du demandeur' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Telephone</label>
                    <input type="text" placeholder='Telephone' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Nom du patient</label>
                    <input type="text" placeholder='Nom du patient' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Genre</label>
                    <input type="text" placeholder='genre' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Adresse</label>
                    <input type="text" placeholder='adresse' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Date</label>
                    <input type="text" placeholder='Date' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Analyse</label>
                    <div className="input-dropdown-icon">
                        <input type="text" placeholder='Analyse' onClick={showDropDown} readOnly/>
                        <svg className='dropdown-icon' width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                        {isShowingDropdown
                            &&
                            <DropDownMenu  Options={options} handleAnalyseOption={handleAnalyseOption}/>
                        }
                </div>
            </div>
            <div className="submit-button">
                <button className='text-white font-medium text-sm rounded-[5px]'>Enregistrer</button>
            </div>
        </div>
    )
}

export default DemandeAnalyse
