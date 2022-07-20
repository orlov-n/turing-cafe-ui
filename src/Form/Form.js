import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: ''
    }
  }

  displayName = (event) => {
    this.setState({
      // ...this.state,
      name: event.target.value
    })
  }
  displayDate = (event) => {
    this.setState({
      // ...this.state,
      date: event.target.value
    })
  }
  displayTime = (event) => {
    this.setState({
      // ...this.state,
      time: event.target.value
    })
  }
  displayNumberOfGuests = (event) => {
    this.setState({
      // ...this.state,
      numberOfGuests: event.target.value
    })
  }

  render() {
    console.log('this is Form state', this.state)
    return (
      <div>
        <input type='text' placeholder='Name' onInput={(event) => this.displayName(event)}/>
        <input type='text' placeholder='Date' onInput={(event) => this.displayDate(event)}/>
        <input type='text' placeholder='Time' onInput={(event) => this.displayTime(event)}/>
        <input type='text' placeholder='Number of guests' onInput={(event) => this.displayNumberOfGuests(event)}/>
        <button onClick={() => this.props.saveReservation(this.state)}>Make Reservation</button>
      </div>
    )
  }

}

export default Form;