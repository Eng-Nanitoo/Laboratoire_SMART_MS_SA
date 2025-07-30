import React, { useState, memo, useEffect } from 'react';
import './Labo.css';
import Map from '../assets/Map.png';
import api from '../api/api';
import Loading from '../components/Loading';
import isEmpty from '../validators/emptyStringValidator';
import isMauritanienNumber from '../validators/numberMauritanien';
import isDigit from '../validators/isDigit';
import { toast } from 'react-toastify';
import Toast from '../components/Toast';


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const InputField = memo(({ 
    label, 
    name, 
    type = 'text', 
    placeholder, 
    value, 
    onChange, 
    error, 
    disabled 
}) => (
    <div className="row">
        <div className="input-label">
            <label htmlFor={name} className="font-medium text-sm">{label}</label>
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className={`rounded-[5px] border ${error ? 'border-red-500' : ''}`}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    </div>
));

InputField.displayName = 'InputField';

function Labo() {
    const [showToast,setShowToast] = useState(false)
    const [labo, setLabo] = useState({
        nom: '',
        telephone: '',
        adresse: '',
        email: '',
        numero_identification: '',
        longitude: 0,
        laltitude: 0
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLabo(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    useEffect(
        () => {
            setShowToast(false);
        }        
        ,[]
    )

    const validateForm = () => {
        const newErrors = {};

        if (isEmpty(labo.nom)) {
            newErrors.nom = 'Le nom est obligatoire';
        }

        if (!isMauritanienNumber(labo.telephone)) {
            newErrors.telephone = 'Le numéro doit contenir 8 chiffres et commencer par 2, 3 ou 4';
        }

        if (isEmpty(labo.adresse)) {
            newErrors.adresse = 'L\'adresse est obligatoire';
        }

        if (isEmpty(labo.email)) {
            newErrors.email = 'L\'email est obligatoire';
        } else if (!EMAIL_REGEX.test(labo.email)) {
            newErrors.email = 'Format d\'email invalide';
        }

        if (!isDigit(labo.numero_identification)) {
            newErrors.numero_identification = 'Le numéro d\'identification doit contenir uniquement des chiffres';
        } else if (labo.numero_identification.length < 10) {
            newErrors.numero_identification = 'Le numéro d\'identification doit contenir au moins 10 chiffres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleLaboRegister = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast.error('Veuillez corriger les erreurs dans le formulaire');
            return;
        }

        setLoading(true);

        try {
            const response = await api.post('/laboratoires/', labo);
            
            if (response.status === 201) {
                setShowToast(true)
            }
        } catch (error) {
            console.error('Error creating laboratory:', error);
            
            if (error.response) {
                
                const serverError = error.response.data;
                if (serverError.detail) {
                    toast.error(serverError.detail);
                } else {
                    Object.entries(serverError).forEach(([field, messages]) => {
                        setErrors(prev => ({
                            ...prev,
                            [field]: Array.isArray(messages) ? messages[0] : messages
                        }));
                    });
                }
            } else {
                toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="container-labo bg-white rounded-[7px] min-w-full">
            <div className="form">
                <div className="logo">
                    <h1 className="font-bold text-xl">LABO</h1>
                </div>
                <div className="form-container flex justify-between">
                    <form onSubmit={handleLaboRegister} className="space-y-4 w-1/2">
                        <InputField
                            label="Nom"
                            name="nom"
                            placeholder="Nom complet"
                            value={labo.nom}
                            onChange={handleInputChange}
                            error={errors.nom}
                        />
                        <InputField
                            label="Téléphone"
                            name="telephone"
                            placeholder="Téléphone"
                            value={labo.telephone}
                            onChange={handleInputChange}
                            error={errors.telephone}
                        />
                        <InputField
                            label="Adresse"
                            name="adresse"
                            placeholder="Adresse"
                            value={labo.adresse}
                            onChange={handleInputChange}
                            error={errors.adresse}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={labo.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                        <InputField
                            label="Numéro d'identité"
                            name="numero_identification"
                            placeholder="Numéro d'identité"
                            value={labo.numero_identification}
                            onChange={handleInputChange}
                            error={errors.numero_identification}
                        />
                        <InputField
                            label="Coordonnées"
                            name="coordonnees"
                            placeholder="Coordonnées"
                            value={`${labo.laltitude}, ${labo.longitude}`}
                            onChange={handleInputChange}
                            disabled
                        />
                    </form>
                    
                    <div className="map-container">
                        <div className="map-image relative">
                            <img
                                src={Map}
                                alt="Carte"
                                className="w-[350px] h-[250px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="button mt-4">
                            <button
                                type="submit"
                                form="labo-form" // Connect to form
                                className="bg-blue-600 hover:bg-blue-700 text-white w-40 py-2 text-center rounded-[3px] cursor-pointer transition-colors duration-200"
                                onClick={handleLaboRegister}
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showToast && <Toast content="Laboratoire Has Been Created Succefully"/>}
        </div>
    );
}

export default Labo;