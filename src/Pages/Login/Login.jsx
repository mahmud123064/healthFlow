import { Link } from "react-router-dom";
import "./Login.css"
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from "react";


const Login = () => {

    const [show, setShow] = useState(false);

    // handle toggle 

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className="banner">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  rounded-xl ">

                            <div className=" bg-[#233D64] rounded-lg md:p-6 opacity-90 ">
                                <div className="border-solid border-2 border-white rounded-lg p-12 mb-2">
                                    <div className="z-10 flex items-center justify-center -mt-16 mb-4">
                                        <button className="btn btn-xs">Login</button>
                                        {/* <img src = 'https://i.ibb.co/GvSqL7J/person.png' alt="profile image" className="w-16 -mt-16" /> */}
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" name="" placeholder="Enter your email" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" id="" />

                                        <div className="relative">
                                            <input type = {(show === false)? 'password' : 'text'} name="" placeholder="Enter your password" className="w-full  bg-[rgb(35,61,100)] border border-white rounded-lg px-2  mb-4 text-white py-2" id="" />

                                            <div className="text-2xl absolute top-2 right-2 text-white">

                                                {
                                                    (show === false) ? <AiFillEyeInvisible onClick={toggle} /> : <AiFillEye onClick={toggle} />
                                                }


                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <button className="bg-[#13A2B7] border border-white px-6 py-1 rounded-xl hover:bg-emerald-600">Login</button>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <p className="text-white">Forget Password?</p>
                                    </div>

                                    <div className="">
                                        <hr className="" />

                                        <div className="flex items-center justify-center z-10 -mt-3 mb-10">
                                            <button className="btn btn-sm bg-[#13A2B7] border border-white] border border-white flex items-center justify-center text-white">OR/ <span className="text-indigo-700"> <Link >Registration</Link></span></button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button className="bg-[#13A2B7] border border-white rounded-lg px-2 py-2 text-white flex items-center gap-3 "><FcGoogle></FcGoogle>Login With Google</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;