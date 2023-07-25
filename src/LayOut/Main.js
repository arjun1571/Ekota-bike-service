import React from 'react';
import Header from '../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../component/Fotter/Fotter';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;