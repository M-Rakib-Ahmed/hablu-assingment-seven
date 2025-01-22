import { FaFacebook,  FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center  text-base-content rounded p-10 bg-[#02242A]">
  <nav className="grid grid-flow-col gap-4 text-white">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
         <FaTwitter className="text-4xl"></FaTwitter>               
      </a>
                    <Link to={"https://www.youtube.com/watch?v=ZTgsogdBuwA"}>
         <IoLogoYoutube className="text-4xl"></IoLogoYoutube>               
      </Link>
                    <Link to={"https://www.facebook.com/watch/?ref=tab"}>
                        <FaFacebook className="text-4xl"></FaFacebook>              
      </Link>
    </div>
  </nav>
  <aside>
    <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;