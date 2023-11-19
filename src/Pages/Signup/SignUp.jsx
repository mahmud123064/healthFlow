/* eslint-disable no-unused-vars */

import axios from "axios";
import "./SignUp.css"
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Image_hosting_url = import.meta.env.VITE_Image_Upload_Url


const SignUp = () => {

    const [show, setShow] = useState(false);
    const [image, SetImage] = useState("https://i.ibb.co/GvSqL7J/person.png");
    const [fileImage, setFileImage] = useState(null);
    const { createUser, updateUser } = useContext(AuthContext)
    // handle toggle 

    const toggle = () => {
        setShow(!show)
    }

    // useref
    const inputRef = useRef(null);

    //
    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFileImage(file);
        // SetImage(event.target.files[0]);
        SetImage(URL.createObjectURL(file))
    }

    const { register, formState: { errors }, handleSubmit } = useForm()


    const onSubmit = (data) => {

        const { name, email, password } = data;

        console.log(data)
        console.log(fileImage);

        const formData = new FormData();
        formData.append("image", fileImage)
        
        axios.post(Image_hosting_url, formData)
        .then(res => {
            console.log(res.data);
            const image_Url = res.data.display_url;

            createUser(email, password)
            .then( response => {
                updateUser(name, image)
                .then(res => {
                    toast.success('Login Successfully!')
                })
            })
            .catch(error =>toast.error(error.message))
            

        })
        .catch(error => {
            console.log(error);
        })

        
    }

    console.log(Image_hosting_url);
    return (
        <div>
            <div className="banner">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  rounded-xl ">

                            <div className=" bg-[#233D64] rounded-lg md:p-6 opacity-90 ">
                                <div className="border-solid border-2 border-white rounded-lg p-12 mb-2">
                                    <div className="z-10 flex items-center justify-center -mt-[60px] mb-4">
                                        <button className="btn btn-xs">Sign Up</button>
                                        {/* <img src = 'https://i.ibb.co/GvSqL7J/person.png' alt="profile image" className="w-16 -mt-16" /> */}
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-5 " onClick={handleImageClick}>

                                            <div className="relative overflow-hidden w-24 h-24 rounded-full mx-auto mb-3 border-solid border-2 border-white">
                                                <img src={image} alt="profile image" className="w-full h-full " />

                                                <input type="file"
                                                    accept="image/*"

                                                    name="image" ref={inputRef} onChange={handleImageChange} className="mb-3 " style={{ display: "none" }} />

                                                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-7 bg-[#2F486C]">
                                                    <p className="text-center rounded-b-3xl px-5 py-3 overflow-y-hidden overflow-x-auto text-white ">Upload</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div>
                                            <input type="text"
                                                {...register("name")}
                                                name="name" placeholder="Enter your name" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" id="" />
                                        </div>

                                        <div>
                                            <input type="email"
                                                {...register("email")}
                                                name="email" placeholder="Enter your email" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" id="" />

                                        </div>

                                        <div className="relative">

                                            <input
                                                {...register("password",
                                                    {
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 20,
                                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                                    })} type={show ? "text" : "password"} placeholder="Enter Your Password"
                                                // className="input input-bordered rounded-full -mt-2  border-[#004d73]  w-full"
                                                // type={(show === false) ? 'password' : 'text'} name="" placeholder="Enter your password"
                                                className="w-full  bg-[rgb(35,61,100)] border border-white rounded-lg px-2  mb-4 text-white py-2" id="" />

                                            {errors.password?.type === 'minLength' && <p className="text-red-300" role="alert">Password must have 6 characters</p>}

                                            {errors.password?.type === 'maxLength' && <p className="text-red-300" role="alert">Password must have less than 20 characters</p>}

                                            {errors.password?.type === 'pattern' && <p className="text-red-300" role="alert">Password must have one lower case one upper case, one number and one special character</p>}


                                            <div className="text-2xl absolute top-2 right-2 text-white">

                                                {
                                                    (show === false) ? <AiFillEyeInvisible onClick={toggle} /> : <AiFillEye onClick={toggle} />
                                                }


                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <button className="bg-[#13A2B7] border border-white px-6 py-1 rounded-xl hover:bg-emerald-600 text-white">Sign Up</button>
                                        </div>
                                    </form>
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