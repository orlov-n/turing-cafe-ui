import React from "react";
import './Reservation.css'
      //sample object: {id: 1, name: 'Christie', date: '12/29', time: '7:00', number: 12}

const Reservation = ({reservation}) => {
  return (
    <div className="reservation">
      {/* <p>{console.log('this is sliced time', reservation.date.slice(0, 2))}</p> */}
      <p>{reservation.name}</p>
      {/* <p>{reservation.date.slice(0, 2) !== 12 ? 0 + reservation.date.slice(0, 1) : reservation.date.slice(0, 2)}</p> */}
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of guests: {reservation.number}</p>
    </div>
  )
}





export default Reservation;