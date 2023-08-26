
import { Link } from 'react-router-dom';
import "./Banner.css"
import bannerLottie from "../../../assets/Banner.json";
import Lottie from 'lottie-react'


const Banner = () => {
    return (
        <div className=" w-full mb-12 top-0 bg-[#10141F] bg-transparent md:flex">
            {/* <div id="slide1" className="carousel-item  w-full top-0 "> */}

                <div className=' w-full bg-opacity-40 '>
                    <div className='p-10 md:p-28 lg:p-28  mt-12 '>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-[#92928b3f]'> We are here,<br /> to care</span> <span className='text-red-500'></span> </h1>
                        <p className='text-white mt-5 mb-5'> “A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned..”<br /> <span className='text-indigo-950'> —Naval Ravikant</span></p>
                        <Link to='/admission'> <button className='btn bg-[#13A2B7] px-10 text-white hover:bg-slate-900 rounded-lg'> Our Services</button></Link>
                    </div>
                </div>
                <div className=''>
                    <Lottie animationData={bannerLottie}/>
                </div>
            {/* </div> */}

            {/* <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-black w-full bg-opacity-60'>
                    <div className='p-10 md:p-28 lg:p-28 md:w-1/2 mt-12'>
                        <h1 className='text-2xl md:text-xl lg:text-5xl text-white font-semibold mt-10'> <span className='text-green-500'>If you're healthy,</span> <span className='text-red-500'>you're wealthy.</span> </h1>
                        <p className='text-white mt-5'>  “A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned..” <span className='text-red-400'> — Naval Ravikant </span></p>
                        <Link> <button className='btn btn-secondary mt-3 border-none text-white'>Our Doctors</button></Link>
                    </div>
                </div>

               
            </div> */}

        </div>

    );
};

export default Banner;