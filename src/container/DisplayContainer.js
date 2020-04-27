import React from 'react';
import './css/DisplayContainer.css';

const DisplayContainer = ({currentCountry,totalConfirmed,currentCountryMoreInfo}) => {
    //console.log("MOre Information: ", currentCountryMoreInfo)
    return(
        <div className="display-container">
            {currentCountry? <>
                <h1>{currentCountry.country}</h1>
                <h2>confirmed: <span id="confirmed">{currentCountry.confirmed}</span></h2>
                <h2>Recovered: <span id="recovered">{currentCountry.recovered}</span></h2>
                <h2>Deaths: <span id="deaths">{currentCountry.deaths}</span></h2>
                {currentCountryMoreInfo? <>
                <h2>Population: <span>{currentCountryMoreInfo.population}</span></h2>
                <img src={currentCountryMoreInfo.flag} alt="country flag" /></>
                : null }
                </> : <h1>Total Confirmed: {totalConfirmed}</h1>}
        </div>
    )
}

export default DisplayContainer;