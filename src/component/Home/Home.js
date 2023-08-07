import React from 'react';
import Banner from './Banner/Banner';
import NewBike from '../NewBike/NewBike';
import LatestNews from '../Latest News/LatestNews';
import OurService from '../OurService/OurService';
import Quation from '../Quation/Quation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewBike></NewBike>
            <LatestNews></LatestNews>
            <OurService></OurService>
            <Quation></Quation>
        </div>
    );
};

export default Home;