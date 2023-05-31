import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title='Veluvana Bali - Owl Bamboo House'
                subtitle='Sideman Indonesia'
            >

            </Heading>
            <div className='w-full md:h-[47vh] overflow-hidden rounded-lg'>
                <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" />
            </div>
      </>
    );
};

export default Header;