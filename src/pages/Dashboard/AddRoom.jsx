import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { imageUpload } from '../../api/utils';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { AuthContext } from '../../providers/AuthProvider';



const AddRoom = () => {
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const { user } = useContext(AuthContext);
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })


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
        const location = form.location.value;
        const category = form.category.value;
        const image = form.image.files[0]

        // upload image 
        imageUpload(image)
            .then(data => {
                const roomData = {
                    image: data.data.display_url,
                    from,
                    to,
                    price: parseFloat(price),
                    total_guest,
                    bedrooms,
                    bathrooms,
                    description,
                    category,
                    location,
                    title,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email
                    },
                }
                console.log(roomData);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })

    };


    // handle image change 
    const handleImageChange = image => {
        setUploadButtonText(image.name.slice(0, 15));
    }

    // calender select function 
    const handleDates = ranges => {
        setDates(ranges.selection)
    }


    return <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
    />
};

export default AddRoom;