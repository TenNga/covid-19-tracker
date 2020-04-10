import React from 'react';
import './css/AllCountry.css';

const AllCountry = (props) => {
    const renderCountryName = () => {
       return props.allCountryName.map((country)=><li>{country}</li>)
    }
    return ( 
        <div className="country-name-list">
            <ul>
                {renderCountryName()}
            </ul>
        </div>
    )
}

export default AllCountry;