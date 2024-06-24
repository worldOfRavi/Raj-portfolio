import logo from "../assets/RajLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center">
        <img className="w-[200px] cursor-pointer" src={logo} alt="logo" />
    </div>
    <div className=" m-8 flex items-center justify-center gap-4 text-2xl " >
    <a href="https://www.linkedin.com/in/rajendra-tharu-836a02261/" target="_blank">
    <FaLinkedin className="hover:text-purple-500 transition-all duration-300 delay-100 "/>
  </a>
    <a href="https://github.com/worldOfRavi" target="_blank"><FaGithub className="hover:text-purple-500 transition-all duration-300 delay-100"/></a>
    <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="hover:text-purple-500 transition-all duration-300 delay-100"/></a>
        
        <FaSquareXTwitter className="cursor-pointer hover:text-purple-500 transition-all duration-300 delay-100" />
    </div>
    </nav>
  )
}

export default Navbar



