import React from 'react';
import Why from '../Why/Why';
import Review from './Review/Review';


import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Service />
            <Review />
            <Why/>
        </div>
    );
};

export default Home;