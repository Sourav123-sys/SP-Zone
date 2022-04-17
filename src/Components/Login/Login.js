import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../s1AjSxph_400x400.jpg'

const Login = () => {
    return (
        <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Login to Continue</h1>
            <form>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>

                <button type="submit" class="text-white bg-[#4ea227] hover:bg-[#2a680d] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
            <p className="mt-5">

                New To Sp_ZONE ? <Link className='form-link' to='/signup'><span className='text-red-700'>Create an Account</span></Link>

            </p>
            <p >

                Forget Password ? <span className='form-link reset text-blue-900' >Reset Password</span>

            </p>
            <div className="flex items-center my-8">
                <div className="top"></div>
                <div className="middle mx-4 text-lg">or</div>
                <div className="bottom"></div>
            </div>
            <div className="text-center">
                <button className='flex items-center mx-auto google-button rounded-lg'><img className='w-10 h-10 rounded-full mr-3' src={googleLogo} alt="" /><p className='ml-2 text-lg'>Signin with Google</p></button>
            </div>
        </div>
    );
};

export default Login;