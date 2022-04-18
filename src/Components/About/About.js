import React from 'react';
import pic from '../../IMG-20210913-WA0019.jpg'
const About = () => {
    return (
    <div>
    
   
        <div style={{margin:"20%"}}className="custom-shadow">
            
            <h1 className='text-2xl sp-style text-center mt-5' >My name is <span className='text-3xl'>S</span>ourav Arefin.
             </h1>

        <p className='mt-10 p-10'>I'm a junior web developer. I know JavaScript, ReactJS, Bootstrap, Tailwind, Firebase, ExpressJS etc. My focus is getting a job as a junior developer in 2022. Inshallah I'll achive my goal.</p>
        </div>

       
            <img className='w-100 h-100 rounded-full mr-3'src={pic} alt=''/>



        </div>

    );
};

export default About;