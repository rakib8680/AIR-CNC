

// save a user to data base 
export const saveUser = user => {
    const currentUser = {
        email: user.email
    };


    fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers:
        {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(currentUser)
    })
        .then(response => response.json())
        .then(data => console.log(data))
};


// become a host 
export const becomeHost = email => {
    const currentUser = {
        role: 'host',
    };


    return fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${email}`, {
        method: 'PUT',
        headers:
        {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(currentUser)
    })
        .then(response => response.json())
};


/// Get role
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
  }