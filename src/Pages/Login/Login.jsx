import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
// import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useContext, useState } from "react";
import GoogleLogin from "../Shared/Social/GoogleLogin";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    // handle toggle 

    const toggle = () => {
        setShow(!show)
    }

    // onSubmit data handle 

    const onSubmit = (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then(res => {
                toast.success('Login Successfully!')
                navigate(from, { replace: true });

            })
            .catch(error => toast.error(error.message))

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
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div>
                                            <input type="email"
                                                {...register("email")}
                                                placeholder="Enter your email" className="w-full border border-white rounded-lg px-2 p-2 bg-[#233D64] text-white mb-3" />

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

                                        <div className="flex items-center justify-center mb-4">
                                            <button className="bg-[#13A2B7] border border-white px-6 py-1 rounded-xl hover:bg-emerald-600 text-white">Login</button>
                                        </div>
                                    </form>

                                    <div className="mb-5">
                                        <p className="text-white">Forget Password?</p>
                                    </div>

                                    <div className="">
                                        <hr className="" />

                                        <div className="flex items-center justify-center z-10 -mt-3 mb-10">
                                            <button className="btn btn-sm bg-[#13A2B7] border border-white] border border-white flex items-center justify-center text-white">OR/ <span className="text-indigo-700"> <Link to='/signup' >Registration</Link></span></button>
                                        </div>
                                    </div>

                                    <GoogleLogin></GoogleLogin>

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