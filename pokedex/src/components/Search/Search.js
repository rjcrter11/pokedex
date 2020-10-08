import React from 'react';

import './Search.css';

const Search = ({ inputValue, pokemonFilterOnChange }) => (
    <div className="form-group">
        <input
            type='text'
            value={inputValue} onChange={pokemonFilterOnChange}
            className="form-control-lg"
            placeholder="Search Pokemon..."
        />
    </div>
)
export default Search;