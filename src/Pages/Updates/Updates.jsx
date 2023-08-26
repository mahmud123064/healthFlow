import Marquee from "react-fast-marquee";

const Updates = () => {
    return (
        <div className="bg-[#2B3440] py-2 px-5">
            <div className="flex">
                <button className="btn bg-[#13A2B7] px-10 text-white hover:bg-slate-900 rounded-lg">Updates</button>
                <Marquee className="text-white" speed={50} pauseOnHover>
                    <p> Voluptates, minus! ||  Lorem ipsum dolor sit amet....   <span className="me-12"></span>Lorem ipsum dolor sit amet.</p>
                   
                </Marquee>
            </div>
        </div>
    );
};

export default Updates;