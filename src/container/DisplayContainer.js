import React from 'react';
import './css/DisplayContainer.css';

const DisplayContainer = ({currentCountry,totalConfirmed,currentCountryMoreInfo,countryInfo}) => {
    console.log("MOre Information: ", countryInfo)
    return(
        <div className="display-container">
            {currentCountry && countryInfo? <>
                <h1>Country: {countryInfo.country}</h1>
                <h2>confirmed: <span id="confirmed">{countryInfo.confirmed}</span></h2>
                <h2>Recovered: <span id="recovered">{countryInfo.recovered}</span></h2>
                <h2>Deaths: <span id="deaths">{countryInfo.deaths}</span></h2>
                {currentCountryMoreInfo? <>
                <h2>Population: <span>{currentCountryMoreInfo.population}</span></h2>
                <img src={currentCountryMoreInfo.flag} alt="country flag" /></>
                : null }
                </> : <h1>Total Confirmed: {totalConfirmed}</h1>}
        </div>
    )
}

export default DisplayContainer;