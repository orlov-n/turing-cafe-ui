import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import { getReservations } from '../apiCalls'
class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(data => {
      this.setState({
        reservations: data
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer />
        </div>
      </div>
    )
  }
}

export default App;
