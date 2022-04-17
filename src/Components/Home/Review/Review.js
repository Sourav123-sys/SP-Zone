import React from 'react';
import image from '../../../person 1.png'
import image2 from '../../../person 2.png'
import image3 from '../../../person 3.png'
const Review = () => {
    return (

        <>
        
            <h1 className="text-3xl sp-style mt-10" style={{ textAlign: 'center'}}>Our Member's Review</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 mx-10">
          
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
       
       
            </div>
            </>
    );
};

export default Review;