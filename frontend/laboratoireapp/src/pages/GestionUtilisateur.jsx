import React, { useEffect, useState } from 'react'
import './GestionUtilisateur.css';
import FilterSearchHeader from '../components/FilterSearchHeader';
import Pagination from '../Pagination';
import api from '../api/api';

function GestionUtilisateur() {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;

    const fetchUtilisateurs = async (page = 1) => {
        setLoading(true);
        try {
            const res = await api.get(`utilisateurs/?page=${page}`);
            if (res.status === 200) {
                setUtilisateurs(res.data.results || []);
                if (res?.data?.count % 10 === 0){
                    setTotalPages(res.data.count / 10);
                } else {
                    setTotalPages(Math.floor(res.data.count / 10) + 1);
                }
            }
        } catch (err) {
            setError("Something Went Wrong Please Try Later");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUtilisateurs(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='container-gestion-utilisateur'>
            <h1 className='font-bold text-xl'>Liste des utilisateurs</h1>
            <div className="gestion-utlisateur-header flex justify-between">
                <FilterSearchHeader navTo='/ajouter/utilisateur' navToContent='Ajouter Utilisateur +' totalItems={utilisateurs.length}/>
            </div>
            <div className="gestion-utilisateur-table rounded-[10px] bg-white">
                <table className='w-full text-sm'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nom</th>
                            <th>Telephone</th>
                            <th>Role</th>
                            <th>Genre</th>
                            <th>Etat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">Chargement...</td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan="7" className="text-center text-red-500 py-4">{error}</td>
                            </tr>
                        ) : utilisateurs.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">Aucun utilisateur trouvé</td>
                            </tr>
                        ) : (
                            utilisateurs.map((user, idx) => (
                                <tr key={user.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                    <td>{user.nom_complet}</td>
                                    <td>{user.telephone}</td>
                                    <td>{user.role}</td>
                                    <td>{user.genre}</td>
                                    <td>{user.is_active ? "Actif" : "Inactif"}</td>
                                    <td>
                                        {/* Replace with your action buttons/icons */}
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.87576 4.13843C4.91079 4.13843 2.6809 7.53632 1.85392 9.12785C1.67189 9.47817 1.58087 9.65333 1.59129 9.91836C1.60172 10.1834 1.70929 10.3558 1.92443 10.7006C2.9075 12.2761 5.45119 15.7263 8.87576 15.7263C12.3003 15.7263 14.844 12.2761 15.8271 10.7006C16.0422 10.3558 16.1498 10.1834 16.1602 9.91836C16.1706 9.65333 16.0796 9.47817 15.8976 9.12785C15.0706 7.53631 12.8407 4.13843 8.87576 4.13843Z" stroke="#4A7CB1" strokeWidth="3"/>
                                            <ellipse cx="8.87575" cy="9.93239" rx="2.95858" ry="3.31081" fill="#4A7CB1"/>
                                        </svg>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                onPageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default GestionUtilisateur