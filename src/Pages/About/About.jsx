import Lottie from 'lottie-react';
import AboutLottie from '../../../src/assets/About.json'
const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto mb-16'>
            <div className="px-2 mb-10">
                <div>
                    <hr className=" border-[#13A2B7] border-2 w-80 mx-auto mb-3" />
                    <h3 className="text-white text-center text-xl mb-3">Know About Us!</h3>
                    <hr className=" border-[#13A2B7] border-2 w-80  mx-auto mb-5" />
                </div>

                <h2 className="text-center text-2xl lg:text-3xl text-white mb-3">Empowering Your Health Journey
                </h2>
                <p className='text-[#F7F7F7] text-justify px-5'>Welcome to Health Flow, your trusted partner in managing your health with precision and care. We understand that your health is a deeply personal and evolving journey. That's why we've created a platform that puts you in control of your well-being, allowing you to customize and optimize every aspect of your health management.We recognize that no two individuals are the same, and neither are their health needs. </p>
            </div>

            <div className="card lg:card-side text-white mx-auto">
                <div className="card-body w-3/4 shadow-5xl mx-auto w-full">

                    <div className="collapse collapse-plus w-full border-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium bg-[#13A2B7]">
                            Our Mission
                        </div>
                        <div className="collapse-content text-[#92928b3f]">

                            <p className=''> Our mission at Health Flow is to empower you to take charge of your health like never before. We believe that when individuals are equipped with the right tools and information, they can make informed decisions that lead to healthier, happier lives.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus w-full border-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium bg-[#13A2B7]">
                            Our Vision
                        </div>
                        <div className="collapse-content text-[#92928b3f]">
                            <p>Empowering Your Health, Your Way</p>
                            <p> At Health Flow, our vision is to create a healthier world where individuals are at the center of their health journey. We believe that personalized healthcare is the key to better well-being, and we're committed to making it accessible and effortless for everyone.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus border-2">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium bg-[#13A2B7]">
                            Your Privacy and Security
                        </div>
                        <div className="collapse-content text-[#92928b3f]">
                            <p>We understand that health information is sensitive. That's why we've implemented robust security measures to ensure your data is protected. Health Flow is committed to maintaining the highest standards of privacy and compliance with data protection regulations.</p>
                        </div>
                    </div>
                </div>



                <div className=''>
                    <Lottie animationData={AboutLottie} />
                </div>
            </div>
        </div>
    );
};

export default About;