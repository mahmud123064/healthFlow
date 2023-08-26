import img1 from '../../../../public/Doctor.png'
const FeaturesCard = () => {
    return (
        <div className='px-16 mx-auto md:flex relative -mt-28 '>
          
                <div className='bg-[#2F89FC] w-full '>
                    <div className='p-10'>
                        <img className='w-24 bg-[#61A6FD] rounded-full mx-auto mb-3' src={img1} alt="doctor" />
                        <h3 className='text-center text-white  font-semibold mb-2'>Qualitfied Doctors</h3>
                        <p className='text-[#CBD3FD] text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
                <div className='bg-[#0C75FB] w-full'>
                    <div className='p-10 '>
                        <img className='w-24 bg-[#2F89FC] rounded-full mx-auto mb-3 ' src={img1} alt="doctor" />
                        <h3 className='text-center text-white  font-semibold '>Qualitfied Doctors</h3>
                        <p className='text-[#CBD3FD] text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
                <div className='bg-[#2F89FC] w-full '>
                    <div className='p-10'>
                        <img className='w-24 bg-[#61A6FD] rounded-full mx-auto mb-3' src={img1} alt="doctor" />
                        <h3 className='text-center text-white  font-semibold mb-2'>Qualitfied Doctors</h3>
                        <p className='text-[#CBD3FD] text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
                <div className='bg-[#0C75FB] w-full'>
                    <div className='p-10 '>
                        <img className='w-24 bg-[#2F89FC] rounded-full mx-auto mb-3 ' src={img1} alt="doctor" />
                        <h3 className='text-center text-white  font-semibold '>Qualitfied Doctors</h3>
                        <p className='text-[#CBD3FD] text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
           
        </div>
    );
};

export default FeaturesCard;