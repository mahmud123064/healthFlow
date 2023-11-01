// import { EmailJSResponseStatus } from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import Lottie from 'lottie-react'
import contact from '../../../../public/animation_ln6b1dys.json'
import './Contact.css'


const ContactUs = () => {

    const form = useRef();
    const sendEmail = (e) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for your email',
            showConfirmButton: false,
            timer: 1500
        })
        // reset();
        e.preventDefault();
        // EmailJSResponseStatus.sendForm('service_t0gez6h', 'template_ksydh1v', form.current, 'mgTsmNEthVNxhKcCu')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return (
        <div className="mb-16">
            <div className="mb-10">
                <hr className=" border-[#13A2B7] border-2 w-60 mx-auto mb-3" />
                <h3 className="text-white text-center text-xl mb-3">Let's Talk With Us!</h3>
                <hr className=" border-[#13A2B7] border-2 w-60  mx-auto mb-5" />
            </div>

            <div className="contact-item opacity-80 bg-fixed ">
                <div className="md:flex justify-center items-center px-5 max-w-screen-xl mx-auto">
                <div className="w-full">
                        <div className=''>
                            <Lottie animationData={contact} />
                        </div>
                    </div>

                    <div className="w-full md:w1/2 lg:1/2 bg-black rounded-xl m-2 mx-2 opacity-60">
                        {/* ref={form} onSubmit={sendEmail} */}
                        {/* shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] */}
                        <form className='card-body rounded-xl  '>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-gray-400">Name :</span>
                                </label>
                                <input type="text" placeholder="Write your name " name='from_name' className="input input-bordered w-full bg-gray-700" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-gray-400">Email :</span>
                                </label>
                                <input type="email" placeholder="Write your Email " name='from_email' className="input input-bordered w-full bg-gray-700" />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-gray-400">Country :</span>
                                </label>
                                <input type="text" placeholder="Write your Country " name='from_email' className="input input-bordered w-full bg-gray-700" />
                            </div>

                            <div className="form-control mb-7">
                                <label className="label">
                                    <span className="label-text text-gray-400">Message : </span>
                                </label>
                                <textarea className="input textarea-bordered h-36 bg-gray-700" name='message' placeholder="Write Your Message"></textarea>
                            </div>

                            <input type="submit" value="Send" className='btn bg-sky-500 border-none text-white w-full hover:bg-[#1E3A8A]' />

                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;