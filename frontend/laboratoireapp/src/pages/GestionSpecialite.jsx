import React, { useState, useEffect } from 'react';
import api from '../api/api';
import Loading from '../components/Loading';
import Toast from '../components/Toast';
import Pagination from "../components/Pagination";
import FilterSearchHeader from '../components/FilterSearchHeader';
import { Link } from 'react-router-dom';
import './GestionSpecialiste.css';
import { useSearch } from '../context/SearchContext';

function GestionSpecialite() {
    const [specialistes, setSpecialites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isShowedToast, setIsShowedToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const { search } = useSearch();

    const fetchSpecialites = async (page) => {
        try {
            setLoading(true);
            const response = await api.get(`specialites/?page=${page}`);
            
            if (response.status === 200) {
                setSpecialites(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 10));
            }
        } catch (error) {
            console.error('Error fetching specialistes:', error);
            setError('Erreur lors du chargement des spécialités');
            setToastMessage('Erreur lors du chargement des spécialités');
            setIsShowedToast(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpecialites(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleDeleteSpecialite = async (id) => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cette spécialité ?')) {
            return;
        }

        try {
            const response = await api.delete(`specialites/${id}/`);
            if (response.status === 204) {
                setToastMessage('Spécialité supprimée avec succès');
                setIsShowedToast(true);
                fetchSpecialites(currentPage);
            }
        } catch (error) {
            console.error('Error deleting specialiste:', error);
            setToastMessage('Erreur lors de la suppression');
            setIsShowedToast(true);
        }
    };

    const filteredSpecialistes = specialistes.filter(specialiste =>
        specialiste.nom?.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <Loading />;

    if (error) {
        return (
            <div className="text-red-500 text-center p-4">
                {error}
            </div>
        );
    }

    return (
        <div className="container-gestion-specialiste">
            <h1 className='font-bold text-xl'>Liste des Specialistes</h1>
            <div className="gestion-specialiste-header flex justify-between">
                <FilterSearchHeader navTo='/ajouter/specialite' navToContent='Ajouter Specialiste +' totalItems={filteredSpecialistes.length}/>
            </div>
            <div className="specialiste-table">
                {filteredSpecialistes.length === 0 ? (
                    <p className="text-center text-gray-500">Aucune spécialité trouvée</p>
                ) : (
                    <>
                        <table className="w-full text-sm">
                            <thead className="">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nom
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Analyses Associées
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredSpecialistes.map((specialiste) => (
                                    <tr key={specialiste.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {specialiste.nom}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">
                                                {specialiste.analyse_associed.length}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-4.5 justify-center">
                                            <Link
                                                to={`/modifier-specialiste/${specialiste.id}`}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                <svg width="17" height="19" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.369 2.66352C11.9039 3.2806 11.9126 4.27792 11.3888 4.90738L7.1522 9.99805C6.89722 10.3044 6.54728 10.4815 6.17923 10.4904L4.4011 10.5335L4.4387 8.4655C4.44625 8.05049 4.59302 7.65503 4.84814 7.36235L9.17754 2.39543C9.72055 1.77245 10.598 1.7739 11.1395 2.39867L11.369 2.66352Z" fill="#6C757D"/>
                                                    <path d="M11.3688 2.66352C11.9036 3.2806 11.9124 4.27792 11.3885 4.90738L7.15196 9.99805C6.89698 10.3044 6.54704 10.4815 6.17899 10.4904L4.40085 10.5335L4.43846 8.4655C4.446 8.05049 4.59278 7.65503 4.84789 7.36235L9.17729 2.39543C9.72031 1.77245 10.5978 1.7739 11.1393 2.39867L11.3688 2.66352Z" fill="#6C757D"/>
                                                    <path opacity="0.3" d="M6.98751 1.25C7.28666 1.25 7.52918 1.52982 7.52918 1.875C7.52918 2.22018 7.28666 2.5 6.98751 2.5H3.25001C2.6517 2.5 2.16668 3.05964 2.16668 3.75V11.25C2.16668 11.9404 2.6517 12.5 3.25001 12.5H9.75001C10.3483 12.5 10.8333 11.9404 10.8333 11.25V8.125C10.8333 7.77982 11.0759 7.5 11.375 7.5C11.6742 7.5 11.9167 7.77982 11.9167 8.125V11.25C11.9167 12.6307 10.9466 13.75 9.75001 13.75H3.25001C2.05339 13.75 1.08334 12.6307 1.08334 11.25V3.75C1.08334 2.36929 2.05339 1.25 3.25001 1.25H6.98751Z" fill="#6C757D"/>
                                                    <path opacity="0.3" d="M6.98766 1.25C7.28682 1.25 7.52933 1.52982 7.52933 1.875C7.52933 2.22018 7.28682 2.5 6.98766 2.5H3.25016C2.65185 2.5 2.16683 3.05964 2.16683 3.75V11.25C2.16683 11.9404 2.65185 12.5 3.25016 12.5H9.75016C10.3485 12.5 10.8335 11.9404 10.8335 11.25V8.125C10.8335 7.77982 11.076 7.5 11.3752 7.5C11.6743 7.5 11.9168 7.77982 11.9168 8.125V11.25C11.9168 12.6307 10.9468 13.75 9.75016 13.75H3.25016C2.05355 13.75 1.0835 12.6307 1.0835 11.25V3.75C1.0835 2.36929 2.05355 1.25 3.25016 1.25H6.98766Z" fill="#6C757D"/>
                                                </svg>
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteSpecialite(specialiste.id)}
                                                className="text-red-600 hover:text-red-900 flex items-center"
                                            >
                                                <svg width="12" height="19" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 2V9.5C0 10.3284 0.671573 11 1.5 11H5.5C6.32843 11 7 10.3284 7 9.5V2H0Z" fill="#6C757D"/>
                                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4.59961 0.5C4.59961 0.223858 4.37575 0 4.09961 0H3.09961C2.82347 0 2.59961 0.223858 2.59961 0.5H0.349609C0.211538 0.5 0.0996094 0.611929 0.0996094 0.75C0.0996094 0.888071 0.211538 1 0.349609 1H6.84961C6.98768 1 7.09961 0.888071 7.09961 0.75C7.09961 0.611929 6.98768 0.5 6.84961 0.5H4.59961Z" fill="#6C757D"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            {isShowedToast && (
                <Toast
                content={toastMessage}
                />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default GestionSpecialite;