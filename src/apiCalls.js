const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(result => result.json())
}