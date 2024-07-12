import React from 'react';

const Dropdown = ({ options, onSelect, selectedOption }) => {

    const handleChange = (event) => {
        const value = event.target.value;
        onSelect(value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
