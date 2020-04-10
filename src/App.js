import React from 'react';
import './App.css';

import DisplayContainer from './container/DisplayContainer';
import SideBarContainer from './container/SideBarContainer';


class App extends React.Component {

  state = {
    allCountry: "",
    countryName: []
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
    .then( datas =>this.setState({allCountry: datas}))
    .catch(err => {
      console.log(err);
    });
  }

  filterCountry = () => {
    if(this.state.allCountry) {
      this.state.allCountry.forEach((data)=>{
        this.setState({countryName: [...this.state.countryName,data.country]})
      })
    }
  }
  render(){
    console.log("State Datas: ", this.state)
    return (
      <div className="App">
        <div className="side-bar">
          <SideBarContainer countryNames={this.filterCountry()}/>
        </div>
        <div className="display-container">
          <DisplayContainer />
        </div>
        
      </div>
    );
  }
}

export default App;
