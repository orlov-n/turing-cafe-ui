import React from 'react';
import Reservation from '../Reservation/Reservation';
import './ReservationsContainer.css'
      //sample object: {id: 1, name: 'Christie', date: '12/29', time: '7:00', number: 12}



const ReservationsContainer = ({reservations}) => {
  const returnedReservations = reservations.map(reservation => {
    return (
      <Reservation reservation={reservation} key={reservation.id} />
    )
  })
  return (
    <div className='reservations-container'>
      {returnedReservations}
    </div>
  )
}

export default ReservationsContainer;