import React from 'react';
import './Dropdown.css';
const Dropdown = ({ options, onSelect, selectedOption }) => {

    const handleChange = (event) => {
        const value = event.target.value;
        onSelect(value);
    };

    return (
        <div className='dropdown-container'>
            <select value={selectedOption} onChange={handleChange} className='dropdown-select'>
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option} className="dropdown-option">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
