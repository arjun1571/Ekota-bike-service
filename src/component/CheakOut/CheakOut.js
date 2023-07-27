import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheakOut = () => {
    const {title} = useLoaderData()
    return (
        <div>
            {title }
        </div>
    );
};

export default CheakOut;