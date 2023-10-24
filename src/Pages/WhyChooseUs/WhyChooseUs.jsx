
import img1 from "../../../public/health-tips-removebg-preview.png"
import img2 from "../../../public/dashboard-removebg-preview.png"
import img3 from "../../../public/notifocations-removebg-preview.png"
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    return (
        <div className="max-w-screen-lg mx-auto mb-16 ">
            <div className="px-2">
                <div>
                <hr className=" border-[#13A2B7] border-2 w-60 mx-auto mb-3" />
                <h3 className="text-white text-center text-xl mb-3">Why Choose Us?</h3>
                <hr className=" border-[#13A2B7] border-2 w-60  mx-auto mb-3" />
                </div>
                <h3 className="text-center text-4xl text-white mb-16">Offer for you</h3>
            </div>
            <div className="mb-5">
                <div className=' w-full md:flex gap-5 px-3'>
                    <div className='p-10 hover:border-2 hover:border-[#13A2B7] rounded-2xl'>
                        <img className='w-24 bg-[#61A6FD] rounded-full mx-auto mb-3' src={img1} alt="doctor" />
                        <h3 className='text-center text-xl text-[#92928b3f] font-semibold mb-2'>Health Updates</h3>
                        <p className='text-[#F7F7F8] text-start'>Discover a wealth of carefully curated health tips and advice that are designed to fit seamlessly into your daily routine. Whether you're looking to improve your fitness, nutrition, mental well-being, or overall health, we've got you covered.</p>
                    </div>
                    <div className='p-10 hover:border-2 hover:border-[#13A2B7] rounded-2xl'>
                        <img className='w-24  rounded-full mx-auto mb-3' src={img2} alt="doctor" />
                        <h3 className='text-center text-xl text-[#92928b3f] font-semibold mb-2'>User Dashboard</h3>
                        <p className='text-[#F7F7F8] text-start'>At HealthFlow, we're committed to providing you with a personalized and empowering health experience. That's why we've created a user dashboard like no other. Our user dashboard is your health hub, putting you in control of your well-being journey. </p>
                    </div>
                    <div className='p-10 hover:border-2 hover:border-[#13A2B7] rounded-2xl'>
                        <img className='w-24 bg-[#61A6FD] rounded-full mx-auto mb-3' src={img3} alt="doctor" />
                        <h3 className='text-center text-xl text-[#92928b3f] font-semibold mb-2'>Get Notification</h3>
                        <p className='text-[#F7F7F8] text-start'>Our website name is healthFlow. In the why choose section i want to write a small text about user dashboard.With HealthFlow, you'll never miss a beat when it comes to your health. Our user-friendly platform sends you timely and personalized health notifications.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link className="btn bg-blue-950 px-10 text-white hover:bg-slate-900 rounded-lg">Health Updates</Link>
            </div>
        </div>

    );
};

export default WhyChooseUs;