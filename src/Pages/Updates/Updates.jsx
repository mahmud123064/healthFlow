import Marquee from "react-fast-marquee";

const Updates = () => {
    return (
        <div className="bg-[rgb(43,52,64)] py-2 px-5">
            <div className="flex ">
                <button className="px-2 lg:px-8  bg-[#13A2B7] lg:bg-[#13A2B7] py-2  hover:bg-[#99dae4]  rounded-lg text-white border border-white ">Updates</button>
                <Marquee className="text-white" speed={50} pauseOnHover>
                    <p> Voluptates, minus! ||  Lorem ipsum dolor sit amet....   <span className="me-12"></span>Lorem ipsum dolor sit amet.</p>
                   
                </Marquee>
            </div>
        </div>
    );
};

export default Updates;