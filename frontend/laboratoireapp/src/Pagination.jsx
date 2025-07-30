import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">

            <div className="pagination-container flex items-center justify-center gap-2 mt-4">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.64471 0.290836C7.75733 0.382428 7.84669 0.491222 7.90765 0.61099C7.96862 0.730758 8 0.859149 8 0.988812C8 1.11848 7.96862 1.24687 7.90765 1.36663C7.84669 1.4864 7.75733 1.5952 7.64471 1.68679L2.93089 5.52814L7.64471 9.36948C7.87187 9.5546 7.99949 9.80567 7.99949 10.0675C7.99949 10.3292 7.87187 10.5803 7.64471 10.7654C7.41755 10.9506 7.10945 11.0545 6.7882 11.0545C6.46695 11.0545 6.15886 10.9506 5.9317 10.7654L0.35529 6.22116C0.242664 6.12957 0.153311 6.02078 0.0923452 5.90101C0.0313797 5.78124 0 5.65285 0 5.52318C0 5.39352 0.0313797 5.26513 0.0923452 5.14536C0.153311 5.02559 0.242664 4.9168 0.35529 4.82521L5.9317 0.280935C6.39336 -0.0952792 7.1709 -0.0952789 7.64471 0.290836Z" fill="#2B79D3"/>
                    </svg>

                </button>
                <div className="pagination-pages">
                    {pages.map(page => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-1 rounded ${
                                currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.355291 0.290836C0.242666 0.382428 0.153312 0.491222 0.0923468 0.61099C0.0313812 0.730758 0 0.859149 0 0.988812C0 1.11848 0.0313812 1.24687 0.0923468 1.36663C0.153312 1.4864 0.242666 1.5952 0.355291 1.68679L5.06911 5.52814L0.355291 9.36948C0.128132 9.5546 0.000514428 9.80567 0.000514428 10.0675C0.000514428 10.3293 0.128132 10.5803 0.355291 10.7654C0.582451 10.9506 0.890546 11.0545 1.2118 11.0545C1.53305 11.0545 1.84114 10.9506 2.0683 10.7654L7.64471 6.22116C7.75734 6.12957 7.84669 6.02078 7.90765 5.90101C7.96862 5.78124 8 5.65285 8 5.52319C8 5.39352 7.96862 5.26513 7.90765 5.14536C7.84669 5.02559 7.75734 4.9168 7.64471 4.82521L2.0683 0.280935C1.60664 -0.0952792 0.829104 -0.095279 0.355291 0.290836Z" fill="#2B79D3"/>
                    </svg>

                </button>
            </div>
        </div>
    );
}

export default Pagination;