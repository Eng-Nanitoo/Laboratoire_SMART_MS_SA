import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterSearchHeader from "../components/FilterSearchHeader"
import Pagination from "../components/Pagination";
import './GestionAnalyse.css';
import api from "../api/api";
import Loading from "../components/Loading";
import Toast from "../components/Toast";
import { useSearch } from "../context/SearchContext";

function GestionAnalyse() {
    const [analyses, setAnalyses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [toastMessage, setToastMessage] = useState('');
    const [isShowedToast, setIsShowedToast] = useState(false);
    const itemsPerPage = 10;
    const { search } = useSearch();
    const navigate = useNavigate();

    let filteredAnalyses = analyses.filter(analyse =>
        (analyse.nom_demandeur && analyse.nom_demandeur.toLowerCase().includes(search.toLowerCase())) ||
        (analyse.code && analyse.code.toLowerCase().includes(search.toLowerCase()))
    );

    const fetchAnalyses = async (page = 1) => {
        setIsLoading(true);
        try {
            const response = await api.get(`analyses/?page=${page}`);
            if (response.status === 200) {
                setAnalyses(response.data.results || []);
                filteredAnalyses = response.data.results
                if (response?.data?.count % itemsPerPage === 0) {
                    setTotalPages(response.data.count / itemsPerPage);
                } else {
                    setTotalPages(Math.floor(response.data.count / itemsPerPage) + 1);
                }
            }
        } catch (err) {
            console.error('Error fetching analyses:', err);
            setError('Erreur lors du chargement des analyses');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalyses(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleModifier = (id) => {
        navigate(`/modifier/analyse/${id}`);
    };


    const handleSupprimer = async (id) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette analyse ?")) return;
        try {
            const response = await api.delete(`analyses/${id}/`);
            if (response.status === 204) {
                setToastMessage("Analyse supprimée avec succès");
                setIsShowedToast(true);
                fetchAnalyses(currentPage);
            }
        } catch (err) {
            setToastMessage("Erreur lors de la suppression");
            setIsShowedToast(true);
            console.log('Error deleting analyse:', err);
        }
    };

    if (isLoading)  return <Loading/>

    if (error) {
        return (
            <div className="error-message bg-red-100 text-red-700 p-3 rounded mb-4">
                {error}
            </div>
        );
    }

    return (
        <div className='container-gestion-analyse'>
            <h2 className='font-medium text-xl'>Liste des analyses</h2>
            <FilterSearchHeader className='gestion-specialiste-header' navTo='/ajouter/analyse' navToContent='Ajouter Analyse +' totalItems={analyses?.length}/>
            <div className="gestion-analyse-table">
                <table className="w-full bg-white rounded-[5px]">
                    <thead className="bg-[var(--main-color)] text-white">
                        <tr>
                            <th className="max-[900px]:hidden">#</th>
                            <th className="max-[900px]:text-sm">Nom</th>
                            <th className="max-[900px]:text-sm">Code</th>
                            <th className="max-[900px]:text-sm">Durée prévue</th>
                            <th className="max-[900px]:text-sm">Coût</th>
                            <th className="max-[900px]:text-sm">Etat</th>
                            <th className="max-[900px]:text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAnalyses.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">Aucune analyse trouvée</td>
                            </tr>
                        ) : (
                            filteredAnalyses.map((analyse, idx) => (
                                <tr key={analyse.id}>
                                    <td className="max-[900px]:hidden">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                    <td className="max-[900px]:text-xs">{analyse.nom_demandeur}</td>
                                    <td className="max-[900px]:text-xs">{analyse.code}</td>
                                    <td className="max-[900px]:text-xs">{analyse.duree}{analyse.duree_type}</td>
                                    <td className="max-[900px]:text-xs">{analyse.cout}</td>
                                    <td className="max-[900px]:text-xs">{analyse.is_active ? "Actif" : "Inactif"}</td>
                                    <td className='flex gap-2.5 max-[900px]:text-xs justify-center'>
                                        <button
                                            onClick={() => handleModifier(analyse.id)}
                                        >
                                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3688 2.66352C11.9036 3.2806 11.9124 4.27792 11.3885 4.90738L7.15196 9.99805C6.89698 10.3044 6.54704 10.4815 6.17899 10.4904L4.40085 10.5335L4.43846 8.4655C4.446 8.05049 4.59278 7.65503 4.84789 7.36235L9.17729 2.39543C9.72031 1.77245 10.5978 1.7739 11.1393 2.39867L11.3688 2.66352Z" fill="#6C757D"/>
                                                <path d="M11.3688 2.66352C11.9036 3.2806 11.9124 4.27792 11.3885 4.90738L7.15196 9.99805C6.89698 10.3044 6.54704 10.4815 6.17899 10.4904L4.40085 10.5335L4.43846 8.4655C4.446 8.05049 4.59278 7.65503 4.84789 7.36235L9.17729 2.39543C9.72031 1.77245 10.5978 1.7739 11.1393 2.39867L11.3688 2.66352Z" fill="#6C757D"/>
                                                <path opacity="0.3" d="M6.98766 1.25C7.28682 1.25 7.52933 1.52982 7.52933 1.875C7.52933 2.22018 7.28682 2.5 6.98766 2.5H3.25016C2.65185 2.5 2.16683 3.05964 2.16683 3.75V11.25C2.16683 11.9404 2.65185 12.5 3.25016 12.5H9.75016C10.3485 12.5 10.8335 11.9404 10.8335 11.25V8.125C10.8335 7.77982 11.076 7.5 11.3752 7.5C11.6743 7.5 11.9168 7.77982 11.9168 8.125V11.25C11.9168 12.6307 10.9468 13.75 9.75016 13.75H3.25016C2.05355 13.75 1.0835 12.6307 1.0835 11.25V3.75C1.0835 2.36929 2.05355 1.25 3.25016 1.25H6.98766Z" fill="#6C757D"/>
                                                <path opacity="0.3" d="M6.98766 1.25C7.28682 1.25 7.52933 1.52982 7.52933 1.875C7.52933 2.22018 7.28682 2.5 6.98766 2.5H3.25016C2.65185 2.5 2.16683 3.05964 2.16683 3.75V11.25C2.16683 11.9404 2.65185 12.5 3.25016 12.5H9.75016C10.3485 12.5 10.8335 11.9404 10.8335 11.25V8.125C10.8335 7.77982 11.076 7.5 11.3752 7.5C11.6743 7.5 11.9168 7.77982 11.9168 8.125V11.25C11.9168 12.6307 10.9468 13.75 9.75016 13.75H3.25016C2.05355 13.75 1.0835 12.6307 1.0835 11.25V3.75C1.0835 2.36929 2.05355 1.25 3.25016 1.25H6.98766Z" fill="#6C757D"/>
                                            </svg>

                                        </button>
                                        <button
                                            onClick={() => handleSupprimer(analyse.id)}
                                        >
                                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2V9.5C0 10.3284 0.671573 11 1.5 11H5.5C6.32843 11 7 10.3284 7 9.5V2H0Z" fill="#6C757D"/>
                                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4.59961 0.5C4.59961 0.223858 4.37575 0 4.09961 0H3.09961C2.82347 0 2.59961 0.223858 2.59961 0.5H0.349609C0.211538 0.5 0.0996094 0.611929 0.0996094 0.75C0.0996094 0.888071 0.211538 1 0.349609 1H6.84961C6.98768 1 7.09961 0.888071 7.09961 0.75C7.09961 0.611929 6.98768 0.5 6.84961 0.5H4.59961Z" fill="#6C757D"/>
                                            </svg>

                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {isShowedToast && (
                <Toast
                    content={toastMessage}
                />
            )}
            <Pagination
                onPageChange={handlePageChange}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default GestionAnalyse