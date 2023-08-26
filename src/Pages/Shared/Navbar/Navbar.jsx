import { Link } from "react-router-dom";


const Navbar = () => {

    
    return (
        <div className="max-w-screen-lg mx-auto  ">
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-opacity-10 text-white">
                        <li><Link>Home</Link></li>
                        <li><Link>Dashboard</Link></li>
                        <li><Link>Health Updates</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">HealthFlow</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link>Home</Link></li>
                        <li><Link>Dashboard</Link></li>
                        <li><Link>Health Updates</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#13A2B7] px-10 text-white hover:bg-slate-900 rounded-lg">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;