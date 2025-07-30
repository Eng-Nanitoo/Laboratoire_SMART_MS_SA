import DropDownMenu from '../components/DropDownMenu';
import './DemandeAnalyse.css';
import { useEffect, useState } from 'react';
import api from '../api/api';
import Toast from '../components/Toast';
import Loading from '../components/Loading';

function DemandeAnalyse() {
    const options = [
        "Radio",
        "Scanner",
        "Cardiographe",
    ];

    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isShowedToast,setIsShowedToast] = useState(false);
    const [formData, setFormData] = useState({
        nom_demandeur: '',
        nom_patient: '',
        telephone_demandeur: '',
        genre_patient: 'homme',
        adresse_patient: '',
        date: '',
        type_analyse: ''
    });

    const showDropDown = () => {
        setIsShowingDropdown(!isShowingDropdown);
    };

    const handleAnalyseOption = (e) => {
        setFormData({
            ...formData,
            type_analyse: e.target.textContent
        });
        setIsShowingDropdown(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    useEffect(() => {
        return () => {
            setIsShowedToast(false);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.post('analyses/', formData);

            if (response.status  === 201){
                setIsLoading()
                setFormData({
                    nom_demandeur: '',
                    telephone_demandeur: '',
                    nom_patient: '',
                    genre_patient: 'homme',
                    adresse_patient: '',
                    date: '',
                    type_analyse: ''
                });
                console.log('Analyse registered successfully:', response.data);
                setIsShowedToast(true);
            }
            
            
        } catch (err) {
            console.log(err)
            setError(err.response?.data?.message || 'Une erreur est survenue lors de l\'enregistrement');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) setTimeout( () => {return <Loading/>},250)

    return (
        <div className='container-demande-analyse bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Demande d'analyse</h2>
            {error && (
                <div className="error-message bg-red-100 text-red-700 p-3 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="demande-analyse-form grid grid-cols-2">
                <div className="input-label">
                    <label htmlFor="nom_demandeur" className='font-medium text-sm'>Nom du demandeur</label>
                    <input
                        type="text"
                        id="nom_demandeur"
                        name="nom_demandeur"
                        value={formData.nom_demandeur}
                        onChange={handleInputChange}
                        placeholder='Nom du demandeur'
                        required
                    />
                </div>
                <div className="input-label">
                    <label htmlFor="telephone_demandeur" className='font-medium text-sm'>Telephone</label>
                    <input
                        type="tel"
                        id="telephone_demandeur"
                        name="telephone_demandeur"
                        value={formData.telephone_demandeur}
                        onChange={handleInputChange}
                        placeholder='Telephone'
                        required
                    />
                </div>
                <div className="input-label">
                    <label htmlFor="patient" className='font-medium text-sm'>Nom du patient</label>
                    <input
                        type="text"
                        id="patient"
                        name="nom_patient"
                        value={formData.nom_patient}
                        onChange={handleInputChange}
                        placeholder='Nom du patient'
                        required
                    />
                </div>
                <div className="input-label">
                    <label htmlFor="genre_patient" className='font-medium text-sm'>Genre</label>
                    <select
                        name="genre_patient"
                        id="genre_patient"
                        value={formData.genre_patient}
                        onChange={handleInputChange}
                    >
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>
                <div className="input-label">
                    <label htmlFor="adresse" className='font-medium text-sm'>Adresse</label>
                    <input
                        type="text"
                        id="adresse"
                        name="adresse_patient"
                        value={formData.adresse_patient}
                        onChange={handleInputChange}
                        placeholder='adresse'
                        required
                    />
                </div>
                <div className="input-label">
                    <label htmlFor="date" className='font-medium text-sm'>Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="input-label">
                    <label htmlFor="type_analyse" className='font-medium text-sm'>Analyse</label>
                    <div className="input-dropdown-icon">
                        <input
                            type="text"
                            id="type_analyse"
                            placeholder='Type Analyse'
                            value={formData.type_analyse}
                            onClick={showDropDown}
                            readOnly
                            required
                        />
                        <svg className='dropdown-icon' width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    {isShowingDropdown && (
                        <DropDownMenu Options={options} handleAnalyseOption={handleAnalyseOption}/>
                    )}
                </div>
                <div className="submit-button col-span-2">
                    <button
                        type="submit"
                        className='text-white font-medium text-sm rounded-[5px] disabled:opacity-50'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </div>
            </form>
            {isShowedToast && <Toast content='Analyse Has Been Created Succefully'/>}
        </div>
    );
}

export default DemandeAnalyse;