const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(result => result.json())
}

const postReservation = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify({
      id: reservation.id, 
      name: reservation.name, 
      date: reservation.date, 
      time: reservation.time, 
      number: reservation.number 
    }),
    headers: {
      'Content-type': 'application/json'
    }
    })
    .then(result => result.json())
  }


export { getReservations, postReservation }