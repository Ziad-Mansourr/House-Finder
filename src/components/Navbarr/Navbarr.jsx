import { Link } from "react-router-dom";
import logo from "../../../public/img/logo.png"
export default function Navbar() {
  return (
    <nav className="bg-[#e7e7e7] px-8 py-3 flex items-center justify-between">

     {/* Logo */}
      <div className="flex items-center gap-2 ml-8">
        <Link to="/">
          <img src={logo} alt="Saraha Logo" className="w-32 h-auto" />
        </Link>
      </div>

      {/* Center Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <Link to="/Home" >
          <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
        </Link>

        <Link to="/ProfileSettings" >
          <li className="hover:text-gray-900 cursor-pointer transition">Profile Settings</li>
        </Link>


        <Link to="/SendMessage" >
          <li className="hover:text-gray-900 cursor-pointer transition">Messages</li>
        </Link>

        
        <Link to="/MessagesList" >
          <li className="hover:text-gray-900 cursor-pointer transition">Messages List</li>
        </Link>

        <Link to="/profile" >
          <li className="hover:text-gray-900 cursor-pointer transition">Updating</li>
        </Link>
      </ul>

      {/* Right Auth */}
      <div className="flex items-center gap-5 mr-6">


        <Link to="/login" className="text-gray-700 hover:text-gray-900 transition">
          Login
        </Link>

        <Link to="/" className="text-gray-800 hover:bg-gray-300 transition">
          Sign up
        </Link>



        <Link to="/Logout" className="text-sky-500 font-medium">
          <i className="fa-solid fa-arrow-right-from-bracket pl-3"></i>
        </Link>
      </div>

    </nav>
  );
}
