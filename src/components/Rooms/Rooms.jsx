import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Container from '../shared/Container';
import Card from './Card';

const Rooms = () => {

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(err => toast.error(err.message));
    }, [])


    return (
        <Container>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-7'>
                {
                    rooms.map((room, index) => <Card key={index} room={room} ></Card>)
                }
            </div>
        </Container>
    );
};

export default Rooms;