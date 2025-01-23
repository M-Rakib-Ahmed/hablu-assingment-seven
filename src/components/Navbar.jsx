import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import logo from '../assets/Logo.png'

const Navbar = () => {
    const links = [
        <li key="aboutus"><NavLink to={"/"}>About Us</NavLink></li>,
        <li key="pricing"><NavLink to={"pricing"}>Pricing</NavLink></li>,
        <li key="customers"><NavLink to={"customers"}>Customers</NavLink></li>,
        <li key={"solutions"}><NavLink to={"solutions"} >Solutions</NavLink></li>
    ];

   
    <ul>
        {links}
    </ul>

    return (
        <div className="navbar   bg-[#02242A] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <IoMdMenu className="text-4xl"></IoMdMenu>                        
      </div>
      <ul
        tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#02242A]">
        {links}
      </ul>
    </div>
    <a className=" hidden lg:block text-xl">
        <img src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
                <button className="btn bg-[#0FF1F6] rounded-full ">Book a Demo</button>
    <button className="btn btn-outline btn-secondary rounded-full">Secondary</button>
  </div>
</div>
    );
};

export default Navbar;