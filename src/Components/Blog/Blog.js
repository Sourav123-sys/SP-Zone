import React from 'react';
import image from '../../person 1.png'
import image2 from '../../person 2.png'
import image3 from '../../person 3.png'
const Blog = () => {
    return (
        <div style={{ margin:"20%"}} >
            <div className="custom-shadow ">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image} alt=''/>
                <div >
                <h1 >Will Smith</h1>
                <h1 >Posted On 20th August,2021</h1>
                  </div>
                
            </div>
            <div>
                    <h1 className="sp-style text-center text-3xl">Difference between authentication and authorization ?</h1>
                    <h1 className="sp-style p-10 text-2xl">Authentication is a system to verify a person who is this. Authentication system is changeable by user. In the other side, Authorization means what type of data user can data user can access or use. Authorization system is not changeable by user.</h1>
               
            </div>

       </div>

       <div className="review-card">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image2} alt=''/>
                <div >
                <h1 style={{color:'white'}}>Chris Hemsworth.</h1>
                <h1 style={{color:'white'}}>Posted On 10th August,2021</h1>
                  </div>
                
            </div>
            <div>
                <h1 className="blog-post">What is HTML Semantics?</h1>
              
            </div>

       </div>
       <div className="review-card">
  
            <div className="flex items-center mt-10 p-5">
                <img className='w-10 h-10 rounded-full mr-3'src={image3} alt=''/>
                <div >
                <h1 style={{color:'white'}}>Leonardo DiCaprio.</h1>
                <h1 style={{color:'white'}}>Posted On 10th August,2021</h1>
                  </div>
                
            </div>
            <div>
                <h1 className="blog-post">Inline Vs. Block Vs. Inline-Block Element</h1>
              
            </div>

       </div>
       
       </div>
    );
};

export default Blog;