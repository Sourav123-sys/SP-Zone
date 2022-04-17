import React from 'react';
import Review from './Review/Review';


import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Service />
            <Review/>
        </div>
    );
};

export default Home;