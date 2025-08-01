import { useEffect, useState } from "react";
import FilterSearchHeader from "../components/FilterSearchHeader"
import Pagination from "../Pagination";
import './GestionAnalyse.css';
import api from "../api/api";
import Loading from "../components/Loading";

function GestionAnalyse() {
    const [analyses, setAnalyses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;

    const fetchAnalyses = async (page = 1) => {
        setIsLoading(true);
        try {
            const response = await api.get(`analyses/?page=${page}`);
            if (response.status === 200) {
                setAnalyses(response.data.results || []);
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
                        {analyses.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">Aucune analyse trouvée</td>
                            </tr>
                        ) : (
                            analyses.map((analyse, idx) => (
                                <tr key={analyse.id}>
                                    <td className="max-[900px]:hidden">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                                    <td className="max-[900px]:text-xs">{analyse.nom_demandeur}</td>
                                    <td className="max-[900px]:text-xs">{analyse.code}</td>
                                    <td className="max-[900px]:text-xs">{analyse.duree}{analyse.duree_type}</td>
                                    <td className="max-[900px]:text-xs">{analyse.cout}</td>
                                    <td className="max-[900px]:text-xs">{analyse.is_active ? "Actif" : "Inactif"}</td>
                                    <td className='flex gap-2.5 max-[900px]:text-xs'>
                                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6.3335C6.16694 6.3335 6.39442 6.42129 6.61426 6.71436C6.83435 7.00781 7 7.45956 7 8.00049C6.99993 8.54121 6.83426 8.99225 6.61426 9.28564C6.3944 9.57879 6.16696 9.6665 6 9.6665C5.83304 9.6665 5.6056 9.57879 5.38574 9.28564C5.16574 8.99225 5.00007 8.54121 5 8.00049C5 7.45956 5.16565 7.00781 5.38574 6.71436C5.60558 6.42129 5.83306 6.3335 6 6.3335Z" stroke="#6C757D" strokeWidth="2"/>
                                            <path d="M9.99441 7.13081C10.2399 7.51585 10.3626 7.70837 10.3626 8C10.3626 8.29163 10.2399 8.48415 9.99441 8.8692C9.24438 10.0458 7.73714 12 6 12C4.26286 12 2.75562 10.0458 2.00559 8.8692C1.76014 8.48415 1.63741 8.29163 1.63741 8C1.63741 7.70837 1.76014 7.51585 2.00559 7.1308C2.75562 5.95424 4.26286 4 6 4C7.73714 4 9.24438 5.95424 9.99441 7.13081Z" stroke="#6C757D"/>
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
                itemsPerPage={itemsPerPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default GestionAnalyse