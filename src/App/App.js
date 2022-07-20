import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form';
import { getReservations } from '../apiCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
      //sample object: {id: 1, name: 'Christie', date: '12/29', time: '7:00', number: 12}
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
    console.log('this is reservations', this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
