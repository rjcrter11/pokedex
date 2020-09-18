import React from 'react'

import { statClass } from '../../utils/classUtils'

import './StatsBox.css'

const StatsBox = ({ baseStat, statName }) => {
    const mathed = Math.ceil(baseStat / 10)
    return (
        <div className="stats-column" >
            <span className={statClass(mathed, 10)} ></span>
            <span className={statClass(mathed, 9)}></span>
            <span className={statClass(mathed, 8)}></span>
            <span className={statClass(mathed, 7)}></span>
            <span className={statClass(mathed, 6)}></span>
            <span className={statClass(mathed, 5)}></span>
            <span className={statClass(mathed, 4)}></span>
            <span className={statClass(mathed, 3)}></span>
            <span className={statClass(mathed, 2)}></span>
            <span className={statClass(mathed, 1)}></span>
            <p className="ten"> {statName} </p>
        </div>
    )
}
export default StatsBox; 