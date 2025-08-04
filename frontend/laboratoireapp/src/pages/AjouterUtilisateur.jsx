import './AjouterUtilisateur.css';
import  { useEffect, useState } from 'react';
import api from '../api/api';
import Loading from '../components/Loading';
import Toast from '../components/Toast';

function AjouterUtilisateur() {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState({});
    const [utilisateur, setUtilisateur] = useState({
        nom_complet: '',
        genre: '',
        nni: '',
        adresse: '',
        email: '',
        telephone: '',
        role: '',
        specialite: '',
        analyses_autorises: []
    });
    const [specialitesAnalyses, setSpecialitesAnalyses] = useState([]);
    const [isShowedToast, setIsShowedToast] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUtilisateur(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'role' && value !== 'specialiste' ? { analyses_autorises: [] } : {})
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!utilisateur.nom_complet.trim()) {
            errors.nom_complet = 'Le nom complet est requis';
        }
        if (!utilisateur.genre.trim()) {
            errors.genre = 'Le genre est requis';
        }
        if (!utilisateur.nni.trim()) {
            errors.nni = 'Le NNI est requis';
        }
        if (!utilisateur.adresse.trim()) {
            errors.adresse = 'L\'adresse est requise';
        }
        if (!utilisateur.email.trim()) {
            errors.email = 'L\'email est requis';
        }
        if (!utilisateur.telephone.trim()) {
            errors.telephone = 'Le téléphone est requis';
        }
        if (!utilisateur.role.trim()) {
            errors.role = 'Le rôle est requis';
        }
        setMessages(errors);
        return Object.keys(errors).length === 0;
    };

    const handleAutorizedAnalyses = (e) => {
        const { checked, value } = e.target;
        setUtilisateur(prev => ({
            ...prev,
            analyses_autorises: checked 
                ? [...prev.analyses_autorises, value]
                : prev.analyses_autorises.filter(id => id !== value)
        }));
    };

    const handleUtilisateurRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const response = await api.post('utilisateurs/', utilisateur);
            if (response.status === 201) {
                setMessages({ success: 'Utilisateur ajouté avec succès' });
                setIsShowedToast(true);
                setUtilisateur({
                    nom_complet: '',
                    genre: '',
                    nni: '',
                    adresse: '',
                    email: '',
                    telephone: '',
                    role: '',
                    specialite: '',
                    analyses_autorises: []
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessages(prev => ({
                    ...prev,
                    ...error.response.data,
                    error: error.response.data.error || 'Erreur lors de l\'ajout de l\'utilisateur'
                }));
            } else {
                setMessages(prev => ({
                    ...prev,
                    error: 'Erreur lors de l\'ajout de l\'utilisateur'
                }));
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchSpecialitesAnalyses = async () => {
        try {
            const res = await api.get('specialites_analyses/');
            if (res.status === 200) {
                setSpecialitesAnalyses(res.data.results || []);
            }
        } catch (error) {
            console.error('Error fetching specialites analyses:', error);
        }
    };

    useEffect(() => {
        fetchSpecialitesAnalyses();
    }, []);

    if(loading) return <Loading />;

    return (
        <div className='container-ajouter-utilisateur bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Ajouter un utilisateur</h2>
            <div className="ajouter-utilisateur-form grid grid-cols-3 gap-4 max-[900px]:block">
                <div className="input-label">
                    <label className='font-medium text-sm'>Nom complet</label>
                    <input 
                        type="text" 
                        placeholder='Nom complet'
                        name='nom_complet' 
                        onChange={handleInputChange}
                        className={messages.nom_complet ? 'border-red-500' : ''}
                    />
                    {messages.nom_complet && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.nom_complet}</span>
                    )}
                    {Array.isArray(messages.nom_complet) && messages.nom_complet.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="input-label">
                    <label className='font-medium text-sm'>Genre</label>
                    <select 
                        name='genre' 
                        onChange={handleInputChange}
                        className={messages.genre ? 'border-red-500' : ''}
                    >
                        <option value="">Sélectionnez un genre</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    {messages.genre && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.genre}</span>
                    )}
                    {Array.isArray(messages.genre) && messages.genre.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="input-label">
                    <label className='font-medium text-sm'>NNI</label>
                    <input 
                        type="text" 
                        placeholder='NNI' 
                        name='nni' 
                        onChange={handleInputChange}
                        className={messages.nni ? 'border-red-500' : ''}
                    />
                    {messages.nni && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.nni}</span>
                    )}
                    {Array.isArray(messages.nni) && messages.nni.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="input-label">
                    <label className='font-medium text-sm'>Adresse</label>
                    <input 
                        type="text" 
                        placeholder='Adresse' 
                        name='adresse' 
                        onChange={handleInputChange}
                        className={messages.adresse ? 'border-red-500' : ''}
                    />
                    {messages.adresse && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.adresse}</span>
                    )}
                    {Array.isArray(messages.adresse) && messages.adresse.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="input-label">
                    <label className='font-medium text-sm'>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        name='email' 
                        onChange={handleInputChange}
                        className={messages.email ? 'border-red-500' : ''}
                    />
                    {messages.email && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.email}</span>
                    )}
                    {Array.isArray(messages.email) && messages.email.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="input-label">
                    <label className='font-medium text-sm'>Telephone</label>
                    <input 
                        type="tel" 
                        placeholder='Telephone' 
                        name='telephone' 
                        onChange={handleInputChange}
                        className={messages.telephone ? 'border-red-500' : ''}
                    />
                    {messages.telephone && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.telephone}</span>
                    )}
                    {Array.isArray(messages.telephone) && messages.telephone.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                <div className="permissions">
                    <label className='font-medium text-sm block mb-2'>Rôle</label>
                    <div className="role-options flex flex-col gap-2">
                        <div className="choice">
                            <input 
                                type="radio" 
                                name="role" 
                                value="admin"
                                checked={utilisateur.role === 'admin'}
                                onChange={handleInputChange}
                            />
                            <label className="ml-2">Administrateur</label>
                        </div>
                        <div className="choice">
                            <input 
                                type="radio" 
                                name="role" 
                                value="responsable_stock"
                                checked={utilisateur.role === 'responsable_stock'}
                                onChange={handleInputChange}
                            />
                            <label className="ml-2">Responsable de stock</label>
                        </div>
                        <div className="choice">
                            <input 
                                type="radio" 
                                name="role" 
                                value="specialiste"
                                checked={utilisateur.role === 'specialiste'}
                                onChange={handleInputChange}
                            />
                            <label className="ml-2">Spécialiste</label>
                        </div>
                    </div>
                    {messages.role && (
                        <span className="text-red-500 text-xs mt-1 block">{messages.role}</span>
                    )}
                    {Array.isArray(messages.role) && messages.role.map((msg, i) => (
                        <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                    ))}
                </div>
                
                {utilisateur.role === 'specialiste' && (
                    <div className="analyse-types">
                        <label className='font-medium text-sm'>Types d'analyses autorisés</label>
                        <div className="analyses-list flex flex-col gap-2 mt-2">
                            {specialitesAnalyses.map((specialite) => (
                                <div className="choice" key={specialite.id}>
                                    <input 
                                        type="checkbox"
                                        name="analyses_autorises"
                                        value={specialite.id}
                                        onChange={handleAutorizedAnalyses}
                                        className="mr-2"
                                    />
                                    <label>{specialite.nom}</label>
                                </div>
                            ))}
                        </div>
                        {messages.analyses_autorises && (
                            <span className="text-red-500 text-xs mt-1 block">{messages.analyses_autorises}</span>
                        )}
                        {Array.isArray(messages.analyses_autorises) && messages.analyses_autorises.map((msg, i) => (
                            <span key={i} className="text-red-500 text-xs mt-1 block">{msg}</span>
                        ))}
                    </div>
                )}
            </div>
            {messages.error && (
                <div className="text-red-500 text-xs mt-2">{messages.error}</div>
            )}
            <div className="submit-button mt-6">
                <button 
                    className='text-white w-40 text-center rounded-[3px] cursor-pointer bg-blue-600 py-2 hover:bg-blue-700 disabled:opacity-50' 
                    onClick={handleUtilisateurRegister}
                    disabled={loading}
                >
                    {loading ? 'Enregistrement...' : 'Enregistrer'}
                </button>
            </div>
            {isShowedToast && (
                <Toast 
                    content={messages.success || 'Utilisateur créé avec succès'}
                />
            )}
        </div>
    );
}
export default AjouterUtilisateur;