import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className=" text-black py-4 md:py-1 absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-10 w-full">
            <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                {open ? <ImCross className="h-4 w-4 ml-2"></ImCross> : <IoMdMenu className="h-6 w-6 ml-2"></IoMdMenu>}
            </div>

            <ul className={` w-full text-lg py-2 md:flex md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-14" : "top-[-200px]"}`}>
                <div className="logo hidden md:block">
                 <h1 className='cursor-pointer sp-style' onClick={() => navigate('/')}><span  className="text-6xl">sp</span><span className="text-xl">zone</span></h1>   
                </div>
                <div className="items md:flex">
                    <li className='p-2 md:mx-2 font-medium'><Link to="/blog">Blog</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/services">Services</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/about">About</Link></li>
                    <li className='p-2 md:mx-2 font-medium'><Link to="/contact">Sign Out</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;