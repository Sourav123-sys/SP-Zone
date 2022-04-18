import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../../no-image.png'
import CustomLink from '../../CustomLink/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    };
    console.log(user)
    

    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (
        <nav className=" text-black py-4 md:py-1  absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-10 w-full">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                {open ? <ImCross className="h-4 w-4 ml-2 text-black"></ImCross> : <IoMdMenu className="text-black h-6 w-6 ml-2"></IoMdMenu>}
            </div>

            
            <div className='flex items-center'>
                
            <ul className={` w-full md:w-2/3 text-lg py-2 md:flex items-center md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-14" : "top-[-250px]"}`}>
                <div className="logo hidden md:block">
                 <h1 className='cursor-pointer -mt-5 sp-style' onClick={() => navigate('/')}><span  className="text-8xl">sp</span><span className="text-xl">zone</span></h1>   
                </div>
                <div className="items md:flex">
                        <li className='p-2 md:mx-2 li-style text-black font-medium'><CustomLink style={ {borderBottom:"2px solid red"}}to="/">Home</CustomLink></li>
                        <li className='p-2 md:mx-2 li-style text-black font-medium'><CustomLink style={ {borderBottom:"2px solid red"}}to="/blog">Blog</CustomLink></li>
                    <li className='p-2 md:mx-2 li-style text-black  font-medium'><CustomLink style={ {borderBottom:"2px solid red"}}to="/services">Services</CustomLink></li>
                    <li className='p-2 md:mx-2 li-style text-black  font-medium'><CustomLink style={ {borderBottom:"2px solid red"}}to="/about">About</CustomLink></li>

                    {
                        user ? 
                            <li style={{cursor:'pointer'}}className='p-2 md:mx-2  text-red-500 font-medium' onClick={logout}>Sign Out <FontAwesomeIcon icon={faSignOut} /></li>
                            
                            :   <li style={{cursor:'pointer'}}className='p-2 md:mx-2 text-blue-700 font-medium'><Link to="/login">Sign In <FontAwesomeIcon icon={faSignIn} /></Link></li>
            }




                </div>
                </ul>
                
                <div className=' flex w-48 items-center absolute top-0 right-0 md:static'>
                <p className=' font-black '>Name: {user? user.displayName : "Login-first"}</p>
           <img className="w-10 h-10 rounded-full  ml-3"src={userImg} alt='' />
                </div>
            
            </div>
           
           
        </nav>
    );
};

export default Navbar;