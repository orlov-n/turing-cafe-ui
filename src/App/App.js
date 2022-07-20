import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import Form from '../Form/Form';
import { getReservations, postReservation } from '../apiCalls'
      
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

  saveReservation = (reservation) => {
    reservation.id = Date.now
//sample object: {id: 1, name: 'Christie', date: '12/29', time: '7:00', number: 12}
    postReservation(reservation).then(data => {

      this.setState({
        reservations: [...this.state.reservations, reservation]
    })
    // const compared
    })

  }

  render() {
    console.log('this is reservations', this.state.reservations)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form saveReservation={this.saveReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
