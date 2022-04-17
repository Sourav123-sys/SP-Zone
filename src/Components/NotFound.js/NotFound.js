import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../yalantis-interactive-404.gif'
const NotFound = () => {
    return (
        <>
             <button style={{marginTop:'10%',width:'50%'}} className=' bg-blue-500  text-xl text-white ml-20'><Link to='/'>Go To Home</Link></button>
              <div>
           
           <img className="mt-10 h-50 w-full"src={error} alt=''/>
        </div>
        </>
      
    );
};

export default NotFound;