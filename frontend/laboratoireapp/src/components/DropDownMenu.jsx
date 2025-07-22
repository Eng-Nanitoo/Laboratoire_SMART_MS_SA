import PropTypes from 'prop-types';
import { useState } from 'react';
import './DropDownMenu.css';


function DropDownMenu({Options,handleAnalyseOption}) {
    const [filtredOptions, setFilteredOptions] = useState({});
    const filterOptions = (e) => {
        const inputFilterValue = e.target.value.toLowerCase();
        const filtered = Options.filter(option => option.toLowerCase().includes(inputFilterValue));
        setFilteredOptions(filtered);
    }

    return (
        <div className="dropdown-menu">
                <input type="text" placeholder='Text input' onChange={filterOptions}/>
                <div className="options">
                    {
                    
                    filtredOptions.length > 0 
                        ? filtredOptions.map((option, index) => (
                            <div key={index} className='option cursor-pointer' onClick={handleAnalyseOption}>{option}</div>
                        ))
                    :                    
                    Options.map((option, index) => (
                        <div key={index} className='option cursor-pointer' onClick={handleAnalyseOption}>{option}</div>
                    ))}
                </div>
            </div>
    )
}

DropDownMenu.propTypes = {
    data : PropTypes.array.isRequired,
    handleAnalyseOption : PropTypes.func.isRequired
}

export default DropDownMenu
