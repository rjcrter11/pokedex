import React from 'react';

import pokeballSpinner from '../../assets/pokeballSpinner.png';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner-overlay' >
            <div className="spinner-container" >
                <img src={pokeballSpinner} alt='loading-spinner' />
            </div>
        </div>
    )
}
export default Spinner;