import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  
  state ={
    request:{},
    loading:true
  };
 

  componentWillMount(){
    this.apiRequest();

  }
  apiRequest(){
    axios.get("https://ow-api.com/v1/stats/pc/us/LcnJunior-1457/complete ").then(response => {
      this.setState({
        request:response.data ,
        loading:false
      });
    });
    this.setState({load:false});
  }
  
vClear(){
  if(this.state.loading){
    return "Carregando . . . . "
  }else{
    return (
      <div className="info">
          <h1><img className="imgs" src={this.state.request.icon }></img> {this.state.request.name }</h1>
          <h1>Rank: {this.state.request.rating}  <img className="imgs" src={this.state.request.ratingIcon } ></img></h1>
          
          <h1>Vitórias: {this.state.request.gamesWon}</h1>
          <div className="quick">
            <h1>Quick Play</h1>
            <h2>Destaques: {this.state.request.quickPlayStats.awards.cards}</h2>
            <h2>Medalhas: {this.state.request.quickPlayStats.awards.medals}</h2>
            <h2>Medalhas de Bronze: {this.state.request.quickPlayStats.awards.medalsBronze}</h2>
            <h2>Medalhas de Prata: {this.state.request.quickPlayStats.awards.medalsSilver}</h2>
            <h2>Medalhas de Ouro: {this.state.request.quickPlayStats.awards.medalsGold}</h2>
          </div>
          <div className="comp">
            <h1>Competitivo</h1>
            <h2>Destaques: {this.state.request.competitiveStats.awards.cards}</h2>
            <h2>Medalhas: {this.state.request.competitiveStats.awards.medals}</h2>
            <h2>Medalhas de Bronze: {this.state.request.competitiveStats.awards.medalsBronze}</h2>
            <h2>Medalhas de Prata: {this.state.request.competitiveStats.awards.medalsSilver}</h2>
            <h2>Medalhas de Ouro: {this.state.request.competitiveStats.awards.medalsGold}</h2>
          </div>
          
          
          </div>
    );
  }
}
  
  render() {
   
      return (
        <div className="App">
        {console.log(this.state.request)
            
        }
        {this.vClear()} 
          
            
        </div>
      );
    
  }
}

export default App;
