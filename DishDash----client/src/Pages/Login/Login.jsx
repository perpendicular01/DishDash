import React from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import banner from '../../assets/background.png';
import animation from '../../assets/login/login.json';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    // for captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
      }, []);


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="   bg-center w-full flex flex-col md:flex-row items-center justify-center bg-black  rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.9)] max-w-3xl lg:max-w-6xl p-8 "
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
                    <p className="text-black font-semibold text-2xl pb-5 text-center">Login</p>

                    <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto">
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text font-semibold text-black mb-1">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="label  hover:text-blue-900 ">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                placeholder="type the captcha above"
                                className="input input-bordered w-full mt-2"
                                required
                            />
                        </div>

                        <div className="text-left mb-4 ">
                            <a href="#" className="link link-hover underline text-sm text-blue-600 hover:text-blue-800 hover:font-medium">Forgot password?</a>
                        </div>

                        <input
                            type="submit"
                            className="text-white py-2 bg-[#cd943e]  hover:bg-[#665437] hover:font-bold w-full rounded cursor-pointer"
                            value="Sign In"
                        />
                    </form>

                    <p className="text-[#D1A054] pt-3 text-center">
                        New here?
                        <Link to="/register">
                            <span className="font-semibold hover:text-[#9b8154] hover:font-bold"> Create a New Account </span>
                        </Link>
                    </p>

                    <p className="text-[#444444] font-medium pt-3 text-center">Or sign in with</p>

                    <div className="flex justify-center items-center gap-5 py-2">
                        <div className="border rounded-full p-2 cursor-pointer">
                            <FaFacebookF />
                        </div>
                        <div className="border rounded-full p-2 cursor-pointer">
                            <FaGoogle />
                        </div>
                        <div className="border rounded-full p-2 cursor-pointer">
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
