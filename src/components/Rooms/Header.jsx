import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({roomData}) => {
    return (
        <>
            <Heading
                title={roomData.title}
                subtitle={roomData.location}
            >

            </Heading>
            <div className='w-full md:h-[47vh] overflow-hidden rounded-lg'>
                <img className='object-cover w-full' src={roomData.image}/>
            </div>
      </>
    );
};

export default Header;