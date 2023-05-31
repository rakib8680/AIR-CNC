import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import Container from '../shared/Container';
import Loader from '../shared/Loader';
import Card from './Card';

const Rooms = () => {


    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
            .catch(err => toast.error(err.message));
    }, [category])

    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
                {
                    rooms.map((room, index) => <Card key={index} room={room} ></Card>)
                }
            </div>
        </Container>
    );
};

export default Rooms;