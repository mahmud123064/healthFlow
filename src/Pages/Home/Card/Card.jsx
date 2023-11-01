import { Link } from "react-router-dom";
import "./Card.css"


const Card = () => {
    return (

        <div className='mx-10'>
            <div className='flex justify-center items-center my-10 md:my-20 lg:my-28'>
                <div className='bg grid grid-cols-1 gap-5 lg:grid-cols-3 rounded-[40px] px-16 lg:px-56 py-24'>
                    <div className='col-span-2'>
                        <h2 className='text-3xl font-bold text-white'>Please Go to Dashboard</h2>

                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <Link> <button className='btn bg-[#13A2B7] px-10 text-white hover:bg-[#1E3A8A] rounded-lg '> Dashboard</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;