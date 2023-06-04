

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
}