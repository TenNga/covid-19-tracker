import React from 'react';
import {getData} from 'country-list';

import './App.css';


import DisplayContainer from './container/DisplayContainer';
import SideBarContainer from './container/SideBarContainer';



class App extends React.Component {

  state = {
    allCountry: "",
    countryName: [],
    currentCountry: "",
    totalConfirmed: "",
    moreInfoCountry: "",
    currentCountryInfo: ""
  }

  componentDidMount = () => {
    this.setState({countryName: this.getOnlyNames()});

    fetch("https://restcountries.eu/rest/v2/all?fields=name;flag;population")
            .then(resp=>resp.json())
            .then(datas=> this.setState({moreInfoCountry: datas}))
  }

  convertName = (countries) => {
    let allCountries = [];
    countries.forEach((c)=>{
      if(c.name !== "USA")
        allCountries.push(c.name)
      else
        allCountries.push({...c, country:"United States of America"})
    })
    this.setState({allCountry: allCountries});
  }

  getOnlyNames = () => {
    const countries = getData();
    const allNames = [];
    countries.forEach( c => {
      allNames.push(c.name)
    })
    return allNames;
  }

  filterCountry = () => {
    if(this.state.allCountry) {
      const allCountry = [];
      let totalConfirmed = 0;
      this.state.allCountry.forEach((data)=>{
        // console.log("courntry data: ", data)
        allCountry.push(data.country);
        totalConfirmed += data.confirmed;
      })
      this.setState({countryName: allCountry,totalConfirmed: totalConfirmed});
    }
  }

  handleCountrySelected = (country) => {
    // this.setState({currentCountry: country})
    fetch(`https://covid-19-data.p.rapidapi.com/country?format=json&name=${this.state.currentCountry}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "a461ee32a5msh5fd9354481c98c3p1d96dajsn15d69c0af6c8"
        }
      })
      .then(response => response.json())
      .then(data => this.setState({currentCountry: country,currentCountryInfo: data[0]}))
      .catch(err => {
        console.log(err);
      });
  }

  getMoreInfoCurrentCountry = () => {
    if(this.state.moreInfoCountry && this.state.currentCountry)
      return this.state.moreInfoCountry.find((info)=> {
       return  info.name.includes(this.state.currentCountry) || this.state.currentCountry.includes(info.name)
      })
  }

  render(){
    console.log("State Datas: ", this.state)
    return (
      <div className="App">
        <div className="side-bar">
          <SideBarContainer 
            currentCountry={this.handleCountrySelected} 
            allCountry = {this.state.countryName} 
          />
        </div>
        <div className="display-container">
          <DisplayContainer 
            currentCountry={this.state.currentCountry} 
            countryInfo = {this.state.currentCountryInfo}
            //totalConfirmed={this.state.totalConfirmed}
            currentCountryMoreInfo = {this.getMoreInfoCurrentCountry()}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
