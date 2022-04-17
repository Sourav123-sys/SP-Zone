import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import googleLogo from '../../s1AjSxph_400x400.jpg'
import { auth } from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
const Register = () => {
    const { register, handleSubmit, watch, formState: { errors },trigger } = useForm();
    const [email, setEmail] = useState(' ')
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [confirmPassword, setConfirmPassword] = useState(' ')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    console.log(show);
console.log(email);
console.log(password);
console.log(confirmPassword);
console.log(firstName+' '+lastName);

    //email authentication
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    console.log(user)
    const [signInWithGoogle, name] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [updateProfile, updating, error3] = useUpdateProfile(auth);
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handleFirstNameBlur = e => {
        setFirstName(e.target.value);
    }
    const handleLastNameBlur = e => {
        setLastName(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value)
    }
    const navigate = useNavigate()
    const handleCreateUser = async e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password must be at least 6 characters")
            return;
        }
       
        if (password !== confirmPassword) {
            setError("password didn't match")
            return;
        }

      
           await createUserWithEmailAndPassword(email, password)
           await updateProfile({ displayName : firstName+''+lastName, });
           toast('Profile create successfully');
           navigate('/')
     
    }
 // react-firebase-hooks

 const location = useLocation()
 const from = location?.state?.from?.pathname || '/'
 const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then( () =>{
        navigate(from, {replace: true})
    })
    }
    return (
        <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10'>Please Register to Continue</h1>
            <form onSubmit={handleSubmit(handleCreateUser)}>

                <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 mb-6 w-full group">
                        <input onBlur={handleFirstNameBlur} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                      {...register("firstname", {
                        required: 'first name is Required',
                        minLength: {
                            value: 3, message: 'Minimum 3 character required'
                        }
                      })}
                      // register function er fitor condition r message gula object akare likhte hoy
                      onKeyUp={() => {
                        trigger('firstname')
                    }}    />
                        <label for="floating_first_name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        <p className='text-red-500 text-sm'>{errors?.firstname?.message}</p>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onBlur={handleLastNameBlur} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                         {...register("lastname", {
                            required: 'last name is Required',
                            minLength: {
                                value: 3, message: 'Minimum 3 character required'
                            }
                         })}
                           // register function er fitor condition r message gula object akare likhte hoy
                      onKeyUp={() => {
                        trigger('lastname')
                    }} />
                        <label for="floating_last_name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        <p className='text-red-500 text-sm'>{errors?.lastname?.message}</p>
                    </div>


                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input onBlur={handleEmailBlur} type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                    
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    //Regex use korte hole pattern likhe object create korte hobe
                    onKeyUp={() => {
                        trigger('email')
                    }}
                    
                    />
                    <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              
                    <p className='text-red-500 text-sm'>{errors?.email?.message}</p>
              
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input
                    
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one letter and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                        
                        onBlur={handlePasswordBlur} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <FontAwesomeIcon onClick={()=>setShow(!show)}icon={faEyeSlash} /> 
                    <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              
                    <p className='text-red-500 text-sm'>{errors?.password?.message}</p>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                    
                   
                   
                    />
                    <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>

                <button type="submit" class="text-white bg-[#4ea227] hover:bg-[#2a680d] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
            <p style={{ color: 'red' }}>{error} {error3?.message}</p>
                {

                    loading && <p>Loading...</p>

                }
            <p className='mt-10 text-xl'>

                Already Have an Account ?<span className='text-blue-800 h-2 w-2  ml-2 p-2 rounded '><Link className='form-link ' to='/login'>Go To Login</Link></span> 

            </p>
            <div className="flex items-center my-8">
                <div className="top"></div>
                <div className="middle mx-4 text-lg">or</div>
                <div className="bottom"></div>
            </div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn}className='flex items-center mx-auto google-button rounded-lg google-sign'><img className='w-10 h-10 rounded-full mr-3' src={googleLogo} alt="" /><p className='ml-2 text-lg'>Signin with Google</p></button>
            </div>
<ToastContainer/>
        </div>
    );
};

export default Register;