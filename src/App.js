import React from 'react';
import './App.css';

import DisplayContainer from './container/DisplayContainer';
import SideBarContainer from './container/SideBarContainer';


class App extends React.Component {

  state = {
    allCountry: "",
    countryName: [],
    currentCountry: "",
    totalConfirmed: "",
    moreInfoCountry: ""
  }

  componentDidMount = () => {
    fetch("https://covid-19-data.p.rapidapi.com/country/all?format=undefined", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "84704a0959mshe69dd18d898a82ep171a1djsn86283313e1e6"
      }
    })
    .then(response => response.json())
    .then( datas =>{
      this.setState({allCountry: datas});
      this.filterCountry();
    })
    .catch(err => {
      console.log(err);
    });

    fetch("https://restcountries.eu/rest/v2/all?fields=name;flag;population")
            .then(resp=>resp.json())
            .then(datas=> this.setState({moreInfoCountry: datas}))
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
    this.setState({currentCountry: country})
  }

  getMoreInfoCurrentCountry = () => {
    if(this.state.moreInfoCountry && this.state.currentCountry)
      return this.state.moreInfoCountry.find((info)=> {
       return  info.name.includes(this.state.currentCountry.country) || this.state.currentCountry.country.includes(info.name)
      })
  }

  render(){
    // console.log("State Datas: ", this.state)
    return (
      <div className="App">
        <div className="side-bar">
          <SideBarContainer 
            currentCountry={this.handleCountrySelected} 
            allCountry = {this.state.allCountry} 
          />
        </div>
        <div className="display-container">
          <DisplayContainer 
            currentCountry={this.state.currentCountry} 
            totalConfirmed={this.state.totalConfirmed}
            currentCountryMoreInfo = {this.getMoreInfoCurrentCountry()}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
