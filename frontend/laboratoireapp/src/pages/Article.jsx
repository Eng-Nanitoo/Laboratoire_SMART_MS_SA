import './Article.css';
import { useState, memo, useEffect,useCallback } from 'react';
import api from '../api/api';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import Toast from '../components/Toast';

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
                className={`rounded-[5px] max-[900px]:w-full border ${error ? 'border-red-500' : ''}`}
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

function Article() {
    const [showToast, setShowToast] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState({
        nom: '',
        code: '',
        quantite: '',
        recommended_quntite: '',
        mesure_unite: '',
        categorie: ''
    });

    const mesureUniteOptions = [
        'mg', 'g', 'kg', 'ml', 'l'
    ];

    const categorieOptions = [
        'reactif','consommable'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setArticle(prev => ({
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


    useEffect(() => {
        let timeoutId;
        if (showToast) {
            timeoutId = setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showToast]);

    const resetForm = useCallback(() => {
        setArticle({
            nom: '',
            code: '',
            quantite: '',
            recommended_quntite: '',
            mesure_unite: '',
            categorie: ''
        });
        setErrors({});
    }, []);

    const handleArticleRegister = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post('/articles/', article);
            
            if (response.status === 201) {
                setShowToast(true);
                resetForm();
            }
        } catch (error) {
            console.error('Error creating Article:', error);
            
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

    if (loading) return setTimeout(() => {<Loading />,1000});

    return (
        <div className='container-article bg-white rounded-[5px]'>
            <h2 className='font-medium'>Ajouter un article</h2>
            <form  className="article-form grid grid-cols-2 max-[900px]:block" onSubmit={handleArticleRegister}>
                <InputField
                            label="Nom"
                            name="nom"
                            placeholder="Nom"
                            value={article.nom}
                            onChange={handleInputChange}
                            error={errors.nom}
                />
                <InputField
                            label="Code"
                            name="code"
                            placeholder="code"
                            value={article.code}
                            onChange={handleInputChange}
                            error={errors.code}
                />
                <InputField
                            label="Quantité en stock"
                            name="quantite"
                            placeholder="Quantite"
                            value={article.quantite}
                            onChange={handleInputChange}
                            error={errors.quantite}
                />
                <div className="row">
                    <div className="input-label">
                        <label htmlFor="mesure_unite" className="font-medium text-sm">Unité de mesure</label>
                        <select
                            id="mesure_unite"
                            name="mesure_unite"
                            className={`rounded-[5px] max-[900px]:w-full border ${errors.mesure_unite ? 'border-red-500' : ''}`}
                            value={article.mesure_unite}
                            onChange={handleInputChange}
                        >
                            <option value="">Sélectionnez une unité</option>
                            {mesureUniteOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.mesure_unite && (
                            <p className="text-red-500 text-xs mt-1">{errors.mesure_unite}</p>
                        )}
                    </div>
                </div>
                <InputField
                            label="Quantité recommandée"
                            name="recommended_quntite"
                            placeholder="Quantite"
                            value={article.recommended_quntite}
                            onChange={handleInputChange}
                            error={errors.recommended_quntite}
                />
                <div className="row">
                    <div className="input-label">
                        <label htmlFor="categorie" className="font-medium text-sm">Catégorie</label>
                        <select
                            id="categorie"
                            name="categorie"
                            className={`rounded-[5px] max-[900px]:w-full border ${errors.categorie ? 'border-red-500' : ''}`}
                            value={article.categorie}
                            onChange={handleInputChange}
                        >
                            <option value="">Sélectionnez une catégorie</option>
                            {categorieOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                        {errors.categorie && (
                            <p className="text-red-500 text-xs mt-1">{errors.categorie}</p>
                        )}
                    </div>
                </div>
            </form>
            <div className="submit-button">
                <button
                    type="submit"
                    form="article-form"
                    className='article-register text-white text-sm font-medium rounded-[3px]' 
                    onClick={handleArticleRegister}
                >
                    Enregistrer
                </button>
            </div>

            {showToast && <Toast content="Article Has Been Created Succefully"/>}
        </div>
    )
}

export default Article
