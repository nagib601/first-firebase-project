import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2'; // ১. SweetAlert ইমপোর্ট করা হলো

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        // ২. লগআউট ক্লিক করলে প্রথমে এই ওয়ার্নিং দেখাবে
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out of your account!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            // ৩. যদি ইউজার 'Yes' বাটনে ক্লিক করে
            if (result.isConfirmed) {
                
                logOut()
                    .then(() => {
                        console.log("User logged out");
                        
                        // ৪. সফলভাবে লগআউট হওয়ার পর সাকসেস মেসেজ দেখাবে
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You have been logged out successfully.",
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => console.error(error));
            }
        });
    }

    const links = <>
        {/* ১. পাবলিক রাউট */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
        {/* ২. প্রাইভেট রাউট */}
        { user && (
            <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/awards">Awards</Link></li>
            </>
        )}

        {/* ৩. লগইন/লগআউট বাটন লজিক */}
        {
            user ? (
                <li>
                    <button 
                        onClick={handleLogOut} 
                        className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
                    >
                        Sign Out
                    </button>
                </li>
            ) : (
                <li>
                    <Link 
                        to="/login" 
                        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                    >
                        Login
                    </Link> 
                </li>
            )
        }
    </>;

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-base-300 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 text-xl font-bold">My Website</div>
                        <div className="hidden flex-none lg:block">
                            {/* Desktop Menu */}
                            <ul className="menu menu-horizontal px-1 items-center gap-2">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Drawer Sidebar */}
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 gap-2">
                        {/* Sidebar content here */}
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;