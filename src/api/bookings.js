






// add a booking 
export const addBooking = async bookingData => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    })
    const data = await response.json()
    return data
};




// update booking status 
// update room status
export const updateStatus = async (id, status) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/rooms/status/${id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ status }),
      }
    )
    const data = await response.json()
    return data
  }