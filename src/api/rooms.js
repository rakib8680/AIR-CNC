

// add a room 
export const addRoom = async roomData => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rooms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(roomData)
    })
    const data = await response.json()
    return data
};



// get all rooms 
export const getAllRooms = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rooms`)
    const data = await response.json()
    return data
};


// single room data 
export const getRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/room/${id}`)
    const data = await response.json()
    return data
  }