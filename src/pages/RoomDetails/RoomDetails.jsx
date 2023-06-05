import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Rooms/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';
import Container from '../../components/shared/Container';

const RoomDetails = () => {
    const roomData = useLoaderData();
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Header roomData={roomData} />
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo roomData={roomData} />
                        <div className='order-first md:order-last mb-10 md:col-span-3'>
                        <RoomReservation roomData={roomData} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;