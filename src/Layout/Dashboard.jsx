import { Link, Outlet } from "react-router-dom";
import { FaBriefcaseMedical, FaEdit, FaHome } from "react-icons/fa";
import { BsPersonCircle, BsGraphUpArrow } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbVaccine } from "react-icons/tb";
import { IoMdBackspace } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="mt-10">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden bg-[#13A2B7]"><IoMdBackspace className="w-20 h-10"/> Back</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-[#13A2B7] text-white">
                        {/* Sidebar content here */}
                        <div className="mx-auto mb-3 text-[#233D64]">
                            <div className="mask overflow-hidden border-2 border-[#233D64] rounded-full w-20 h-20 mx-auto">
                                <img className="" src={user?.photoURL || 'https://i.ibb.co/c8n7mZL/1623060744486.jpg'} alt="Profile Pic" />

                            </div>
                            <div>
                                <h1 className=' hover:bg-opacity-50 text-lg font-bold px-2'>{user?.displayName}</h1>
                                <h1 className=' hover:bg-opacity-50 px-2'>{user?.email}</h1>
                            </div>
                        </div>

                        <li><Link to="personalinfo">
                            <BsPersonCircle />Personal Information
                        </Link></li>
                        <li><Link to="healthgraph">
                            <BsGraphUpArrow/>Your Health Graph 
                        </Link></li>
                        <li><Link to='medicalstatus'>
                            <FaBriefcaseMedical />Medical Status
                        </Link></li>
                        <li><Link to='viewmedicalstatus'>
                            <FaEdit />Write Medical Status
                        </Link></li>
                        <li><Link to='routinecheckup'>
                            <IoCalendarNumberOutline />Routine Checkup
                        </Link></li>
                        <li><Link to='viewroutinecheckup'>
                            <FaEdit />Write Routine Checkup
                        </Link></li>
                        <li><Link to='vaccineschedule'>
                            <TbVaccine />Vaccine Schedule
                        </Link></li>
                        <li><Link to='viewvaccineschedule'>
                            <FaEdit />Write Vaccine Schedule
                        </Link></li>

                        <div className="divider divide-text-white"></div>

                        <li><Link to='/'>
                            <FaHome/>Home
                        </Link></li>
                        <li><Link to='/healthupdate'>
                            <MdTipsAndUpdates />Health Update
                        </Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;