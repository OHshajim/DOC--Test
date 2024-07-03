/* eslint-disable no-unused-vars */

const Nav = () => {
    const listItem = <>
        <li>Home</li>
        <li>Services</li>
        <li>Blog</li>
        <li>About us</li>

    </>
    return (
        <div className="">
            <div className="navbar bg-base-100 workSans md:text-lg text-base ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#020043] ">
                            {listItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-3xl text-lg font-bold px-0"><img src="/public/logo dark.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal px-1 text-[#020043] gap-3 font-semibold text-base">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="btn btn-outline border-[#343268]  md:text-lg md:px-4 min-h-[20px] h-10 text-[#343268] ">Appointment
                        <GoArrowUpRight /></button>
                </div>
            </div>
        </div>
    );
};
import { GoArrowUpRight } from "react-icons/go";
export default Nav;