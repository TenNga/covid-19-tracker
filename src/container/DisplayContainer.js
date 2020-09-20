import React from 'react';
import styled from 'styled-components';

    const DisplayBody = styled.div`
        margin: 0;
        text-align: center;
        & img {
            width: 100%;
            max-height: 200px;
            object-fit: contain;
        }
    `;

    const Confirmed = styled.span `
        color: rgb(67, 67, 177);
    `;

    const Recovered = styled.span `
        color: rgb(95, 125, 95);
    `;

    const Deaths = styled.span `
        color: rgb(215, 110, 110);
    `;

    const HeaderOne = styled.h1`
        letter-spacing: 1px;
    `;
    const HeaderTwo = styled.h2`
        letter-spacing: 1px;
    `;


const DisplayContainer = ({currentCountry,totalConfirmed,currentCountryMoreInfo,countryInfo}) => {
    // console.log("MOre Information: ", countryInfo)


    return(
        <DisplayBody>
            {currentCountry && countryInfo? <>
                <HeaderOne>Country: {countryInfo.country}</HeaderOne>
                <HeaderTwo>confirmed: <Confirmed>{countryInfo.confirmed}</Confirmed></HeaderTwo>
                <h2>Recovered: <Recovered>{countryInfo.recovered}</Recovered></h2>
                <h2>Deaths: <Deaths>{countryInfo.deaths}</Deaths></h2>
                {currentCountryMoreInfo? <>
                <h2>Population: <span>{currentCountryMoreInfo.population}</span></h2>
                <img src={currentCountryMoreInfo.flag} alt="country flag" /></>
                : null }
                </> : <h1>Choose a Country From the List</h1>}
        </DisplayBody>
    )
}

export default DisplayContainer;