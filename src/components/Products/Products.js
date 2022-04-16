import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h2>Knck knck who is there {user? user.displayName : 'voot'}</h2>
        </div>
    );
};

export default Products;