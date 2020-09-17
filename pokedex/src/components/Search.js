import React from 'react'

import './Search.css'

const Search = ({ inputValue, petFilterOnChange }) => (
    <div className="form-group">

        <input
            type='text'
            value={inputValue} onChange={petFilterOnChange}
            className="form-control-lg"
            placeholder="Search Pokemon..."
        />

    </div>
)
export default Search