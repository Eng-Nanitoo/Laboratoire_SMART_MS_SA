import { useState, useEffect } from 'react';
import './AjouterSpecialite.css';
import Loading from '../components/Loading';
import Toast from '../components/Toast';
import api from '../api/api';

function AjouterSpecialite() {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState({});
    const [specialite, setSpecialite] = useState({
        nom: '',
        description: '',
        analyse_associed: []
    });
    const [isShowedToast, setIsShowedToast] = useState(false);
    const [specialiteAnalyses, setSpecialiteAnalyses] = useState([]);

    const fetchAnalyses = async () => {
        try {
            setLoading(true);
            const response = await api.get('specialites_analyses/');
            if (response.status === 200) {
                setSpecialiteAnalyses(response.data.results || []);
            }
        } catch (error) {
            console.error('Error fetching analyses:', error);
            setMessages(prev => ({
                ...prev,
                error: 'Erreur lors du chargement des analyses'
            }));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
            fetchAnalyses();
            return () => {
                setIsShowedToast(false);
            }        
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSpecialite(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAnalyseChange = (analyseId) => {
        setSpecialite(prev => {
            const analyses = prev.analyse_associed || [];
            const newAnalyses = analyses.includes(analyseId)
                ? analyses.filter(id => id !== analyseId)
                : [...analyses, analyseId];
            
            return {
                ...prev,
                analyse_associed: newAnalyses
            };
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!specialite.nom.trim()) {
            errors.nom = 'Le nom est requis';
        }
        if (!specialite.description.trim()) {
            errors.description = 'La description est requise';
        }
        setMessages(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSpecialiteRegister = async (e) => {
        e.preventDefault();

        
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);

        try {
            const res = await api.post('/specialites/', specialite);

            
            if (res.status === 201) {
                setIsShowedToast(true);
                setSpecialite({
                    nom: '',
                    description: '',
                    analyse_associed: []
                });
            }
        } catch (err) {
            console.error('Error creating speciality:', err);
            setMessages({
                error: err.response?.data?.message || 'Une erreur est survenue'
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className='container-ajouter-specialite bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Ajouter une spécialité</h2>
            <form onSubmit={handleSpecialiteRegister} className="ajouter-specialite-form">
                <div className="input-label">
                    <label htmlFor="nom">Nom de la specialite</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={specialite.nom}
                        placeholder='Nom de la specialite'
                        onChange={handleInputChange}
                        className={messages.nom ? 'error' : ''}
                    />
                    {messages.nom && <span className="error-message">{messages.nom}</span>}
                </div>

                <div className="input-label">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={specialite.description}
                        placeholder='Description de la specialite'
                        onChange={handleInputChange}
                        className={messages.description ? 'error' : ''}
                    />
                    {messages.description && <span className="error-message">{messages.description}</span>}
                </div>

                <div className="associed-analyse">
                    <label>
                        Analyse associe
                        <svg className='dropdown-icon inline-block' width="18" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </label>
                    <div className="choices">
                        {specialiteAnalyses.map((specialite_analyse, index) => (
                            <div key={index} className="choice">
                                <input
                                    type="checkbox"
                                    id={`analyse-${index}`}
                                    onChange={() => handleAnalyseChange(specialite_analyse.id)}
                                    value={specialite_analyse.id}
                                />
                                <label htmlFor={`analyse-${index}`}>{specialite_analyse.nom}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="submit-button">
                    <button
                        type="submit"
                        className='text-white rounded-[5px]'
                        disabled={loading}
                    >
                        {loading ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </div>
            </form>

            {isShowedToast && (
                <Toast
                    content="Spécialité créée avec succès"
                    onClose={() => setIsShowedToast(false)}
                />
            )}

            {messages.error && (
                <div className="error-message global">{messages.error}</div>
            )}
        </div>
    );
}

export default AjouterSpecialite;