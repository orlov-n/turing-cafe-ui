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

  render() {
    console.log('this is Form state', this.state)
    return (
      <div>
        <input type='text' placeholder='Name' onInput={(event) => this.displayName(event)}/>

      </div>
    )
  }

}

export default Form;