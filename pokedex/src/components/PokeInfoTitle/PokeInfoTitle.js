import React from 'react';

import { idGen } from '../../utils/classUtils';


const PokeInfoTitle = ({ name, id }) => (
    <div className="poke-name" >
        <h2> {name} </h2>
        <span> {idGen(id)} </span>
    </div>
)

export default PokeInfoTitle;