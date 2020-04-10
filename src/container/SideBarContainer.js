import React from 'react';
import AllCountry from '../components/AllCountry';
import './css/SideBarContainer.css';

const SideBarContainer = (props) => {
    return(
        <div className="side-bar-container">
            <h1>Side Bar Container</h1>
            <AllCountry allCountryName = {props.allCountryName} />
        </div>
    )
}

export default SideBarContainer;