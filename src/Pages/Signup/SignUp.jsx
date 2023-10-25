// import { Link } from "react-router-dom";
import "./SignUp.css"
import { useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const SignUp = () => {

    const [show, setShow] = useState(false);
    const [image, SetImage] = useState("");

    // handle toggle 

    const toggle = () => {
        setShow(!show)
    }

    // useref
    const inputRef = useRef(null);

    //
    const handleImageClick = () => {

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
                                        <button className="btn btn-xs">Sign Up</button>
                                        {/* <img src = 'https://i.ibb.co/GvSqL7J/person.png' alt="profile image" className="w-16 -mt-16" /> */}
                                    </div>

                                    <div onClick={handleImageClick}>
                                        <img src='https://i.ibb.co/GvSqL7J/person.png' alt="profile image" className="w-24 mx-auto mb-3" />

                                        <input type="file" name="" id="" ref={inputRef} />

                                    </div>

                                    <input type="text" name="" placeholder="Enter your email" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" id="" />

                                    <input type="text" name="" placeholder="Enter your email" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" id="" />



                                    <div className="relative">

                                        <input type={(show === false) ? 'password' : 'text'} name="" placeholder="Enter your password" className="w-full  bg-[rgb(35,61,100)] border border-white rounded-lg px-2  mb-4 text-white py-2" id="" />

                                        <div className="text-2xl absolute top-2 right-2 text-white">

                                            {
                                                (show === false) ? <AiFillEyeInvisible onClick={toggle} /> : <AiFillEye onClick={toggle} />
                                            }


                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <button className="bg-[#13A2B7] border border-white px-6 py-1 rounded-xl hover:bg-emerald-600 text-white">Sign Up</button>
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

export default SignUp;