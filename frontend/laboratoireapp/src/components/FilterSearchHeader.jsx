import './FilterSearchHeader.css';

function FilterSearchHeader({className}) {
    return (
        <div className={`flex justify-between ${className}`}>
            <div className="stats flex gap-10">
                <p>All (56) </p>
                <button className='bg-white rounded-[7px] cursor-pointer text-sm add-specialite-button'>Ajouter une specialite +</button>
            </div>
            <div className="search-filter flex gap-1.5">
                <div className="search-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#6C757D"/>
                    </svg>
                </div>
                <div className="filter-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#6C757D"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default FilterSearchHeader;
