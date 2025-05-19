import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'

import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import banner from '../../assets/background.png';
import animation from '../../assets/login/register.json';


import { useForm } from "react-hook-form"
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);

    const axiosPublic = useAxiosPublic()


    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const from = location.state?.from?.pathname || '/'

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: "user",
                            firebaseUid: loggedUser.uid
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("profile updated")
                                    console.log(loggedUser)
                                    Swal.fire({
                                        title: "successfully registered",
                                        icon: "success"
                                    });

                                    reset();
                                    navigate(from, { replace: true })
                                }

                            })

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })

    }


    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="   bg-center w-full flex flex-col md:flex-row-reverse items-center justify-center bg-black  rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.9)] max-w-3xl lg:max-w-6xl p-8 "
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Lottie Animation Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="max-w-sm">
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>

                {/* Login Form Section */}
                <div className="w-full md:w-1/2 px-4">
                    <p className="text-black font-bold text-2xl pb-5 text-center">Sign Up</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
                        {/* name */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">UserName</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Enter your name"
                                className="input input-bordered w-full"

                            />
                            {errors.name && <span className='mt-1 text-red-800'>username is required</span>}
                        </div>

                        {/* photoURL */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">PhotoUrl</span>
                            </label>
                            <input
                                type="=text"
                                {...register("photo", { required: true })}
                                placeholder="Enter your photo url link"
                                className="input input-bordered w-full"

                            />
                            {errors.photo && <span className='mt-1 text-red-800'>photoUrl is required</span>}
                        </div>

                        {/* email */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="Enter your email"
                                className="input input-bordered w-full"

                            />
                            {errors.email && <span className='mt-1 text-red-800'>Email is required</span>}
                        </div>

                        {/* password */}
                        <div className="mb-6">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">Password</span>
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 15,
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).*$/
                                    })}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full"
                                />
                                <span
                                    className="absolute right-0 mr-4 mt-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* handle errors */}
                            {errors.password?.type === "required" && (
                                <span className='mt-1 text-red-800'>Password is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className='mt-1 text-red-800'>Password should be at least 6 characters</span>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <span className='mt-1 text-red-800'>Password should not more than 15 characters</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className='mt-1 text-red-800'>Password should have atleast one uppercase, one lowercase, one number and one special character</span>
                            )}
                        </div>

                        <input
                            type="submit"
                            className="text-white py-2 bg-[#cd943e] hover:bg-[#665437] hover:font-bold w-full rounded cursor-pointer"
                            value="Sign up"
                        />
                    </form>

                    <p className="text-[#D1A054] pt-3 text-center">
                        Already registered?
                        <Link to="/login">
                            <span className="font-semibold hover:text-[#9b8154] hover:font-bold"> Go to log in </span>
                        </Link>
                    </p>

                    <p className="text-[#444444] font-medium pt-3 text-center">Or sign up with</p>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
