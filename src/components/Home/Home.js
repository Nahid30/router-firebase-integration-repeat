import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home</h2>
            <p>Current User is: {user ? user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Home;