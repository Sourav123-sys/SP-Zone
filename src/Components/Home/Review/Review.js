import React from 'react';
import image from '../../../person 1.png'
import image2 from '../../../person 2.png'
import image3 from '../../../person 3.png'
import image4 from '../../../person-4.jpg'
import image5 from '../../../person-5.jpg'
import image6 from '../../../person-6.jpg'
const Review = () => {
    return (

        <div className="mt-20">
        
            <h1 className="text-6xl sp-style mt-10" style={{ textAlign: 'center'}}>Our Member's Review</h1>
        <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-3 mx-10">
          
            <div className="custom-shadow">
  
            <div className="flex items-center mt-10 p-5 ">
                <img className='w-10 h-10 rounded-full mr-3'src={image2} alt=''/>
                <div >
                <h1 >PeterParker.</h1>
                <h1 >Posted On 10th December,2021</h1>
                  </div>
                
            </div>
            <div>
              <p className="pl-20 pb-5">"Great service.Trainer is just amazing"</p> 
            </div>

       </div>

       <div className="custom-shadow">
  
  <div className="flex items-center mt-10 p-5 ">
      <img className='w-10 h-10 rounded-full mr-3'src={image} alt=''/>
      <div >
      <h1 >Janes Bond.</h1>
      <h1 >Posted On 11th January,2022</h1>
        </div>
      
  </div>
  <div>
    <p className="pl-20 pb-5">"Great Environement.Very Comfortable Place"</p> 
  </div>

</div>
<div className="custom-shadow">
  
  <div className="flex items-center mt-10 p-5 ">
      <img className='w-10 h-10 rounded-full mr-3'src={image3} alt=''/>
      <div >
      <h1 >WilliamSon.</h1>
      <h1 >Posted On 5th March,2022</h1>
        </div>
      
  </div>
  <div>
    <p className="pl-20 pb-5">"Best fitness trainer in the town"</p> 
  </div>

</div>
<div className="custom-shadow">
  
  <div className="flex items-center mt-10 p-5 ">
      <img className='w-10 h-10 rounded-full mr-3'src={image4} alt=''/>
      <div >
      <h1 >Bekham.</h1>
      <h1 >Posted On 5th july,2021</h1>
        </div>
      
  </div>
  <div>
    <p className="pl-20 pb-5">"Nice support"</p> 
  </div>

</div>
<div className="custom-shadow">
  
  <div className="flex items-center mt-10 p-5 ">
      <img className='w-10 h-10 rounded-full mr-3'src={image5} alt=''/>
      <div >
      <h1 >Cris HamsWorth.</h1>
      <h1 >Posted On 5th March,2021</h1>
        </div>
      
  </div>
  <div>
    <p className="pl-20 pb-10 pr-5">"Digital equipments available  which is good"</p> 
  </div>

</div>
<div className="custom-shadow">
  
  <div className="flex items-center mt-10 p-5 ">
      <img className='w-10 h-10 rounded-full mr-3'src={image6} alt=''/>
      <div >
      <h1 >DavidSon.</h1>
      <h1 >Posted On 5th April,2022</h1>
        </div>
      
  </div>
  <div>
    <p className="pl-20 pb-5 pr-5">"Behaviour and Environment both are good"</p> 
  </div>

</div>
       
       
            </div>
            </div>
    );
};

export default Review;