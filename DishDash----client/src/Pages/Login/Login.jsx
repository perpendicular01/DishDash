import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import banner from '../../assets/background.png';
import animation from '../../assets/login/login.json';
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [disable, setDisable] = useState(true)
    const { signIn } = useContext(AuthContext)
    
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)
    const from = location.state?.from?.pathname || '/'

   


    // for captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleCaptcha = (e) => {
        const userUsedValue = e.target.value;
        if (validateCaptcha(userUsedValue)) {
            setDisable(false);
        }
        else {
            setDisable(true)
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                Swal.fire({
                    title: "successfully logged in",
                    icon: "success"
                });

                form.reset()
                navigate(from , {replace: true})

            })


    }

    return (
        <div
            className="min-h-screen  flex items-center justify-center"
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
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <span
                                    className="absolute right-0 mr-4 mt-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>


                        <div className="mb-4">
                            <label className="label  hover:text-blue-900 ">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                onBlur={handleCaptcha}
                                type="text"
                                name='captcha'
                                placeholder="type the captcha above"
                                className="input input-bordered w-full mt-2"
                                required
                            />
                        </div>

                        <div className="text-left mb-4 ">
                            <a href="#" className="link link-hover underline text-sm text-blue-600 hover:text-blue-800 hover:font-medium">Forgot password?</a>
                        </div>

                        <input
                            disabled={disable}
                            type="submit"
                            className={`text-white py-2 w-full rounded transition 
                                      ${disable ? "bg-[#cd943e] opacity-50 cursor-not-allowed" : "bg-[#cd943e] hover:bg-[#b37e30] cursor-pointer"}`}
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

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
