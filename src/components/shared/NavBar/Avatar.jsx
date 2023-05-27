import React, { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <img src={user?.photoURL ? user?.photoURL : avatar} height="30px" width="30px" className='rounded-full' />
        </div>
    );
};

export default Avatar;