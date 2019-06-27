import React from 'react';
import Form from './main/Form'
import Display from './main/Display'
import axios from 'axios'
import './App.css';

// currentWeather endpoint api.openweathermap.org/data/2.5/weather?q={city name},{country code}

const API_key = "2eadc3ca0ca8696e6a2ceb4792fc2b80"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      tempData: []
    }
}


  handleChanges = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getWeather = (event) => {
    event.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_key}`)
    .then(res => {
      console.log(res.data)
      console.log(res.data.main.temp)
      this.setState({
        tempData: res.data.main
      })
    }).catch(err => console.log(err))
    
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather App ! ! !</p>
        <section className = "body">
          <Form 
            handleChanges = {this.handleChanges}
            city = {this.state.city} 
            country = {this.state.country}
            getWeather = {this.getWeather}
            />

          <Display 
            tempData = {this.state.tempData}/>
        </section>
      </header>
    </div>
  );
  }
}

export default App;
