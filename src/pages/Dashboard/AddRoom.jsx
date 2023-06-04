import React, { useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';



const AddRoom = () => {
    const[loading, setLoading] = useState(false)


    // handle form submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target

        const title = form.title.value;
        const from = dates.startDate
        const to = dates.endDate
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const category = form.category.value;

        const image = form.image.files[0]
    }


    return <AddRoomForm handleSubmit={handleSubmit} loading={loading} />
};

export default AddRoom;