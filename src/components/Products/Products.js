import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Knck knck who is there {user? user.displayName : 'voot'}</h2>
        </div>
    );
};

export default Products;