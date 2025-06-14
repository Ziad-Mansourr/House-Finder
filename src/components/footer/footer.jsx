import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import logo from "../../img/Logo.png"
import { Link } from "react-scroll";

export default function Footer() {

  return (
    <footer className="bg-[#e6edf5] py-5">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <button className="bg-transparent p-0 m-0 text-start">
            <div className="flex">
              <img src={logo} className=" h-14" alt="Logo" />
              <div className="block mt-2">
                <p className="text-[27px] leading-[20px] font-serif text-[#054E98]">Student</p>
                <span className="font-serif text-xl text-[#286EBE]">Hostel</span>
              </div>
            </div>
          </button>

          <h3 className="font-semibold mt-4">About Us</h3>
          <p className="text-gray-600 text-sm">
            Connecting students with housing near universities, hassle-free.
          </p>
        </div>


                     {/* Helpful Links */}
        <div>
          <h3 className="font-semibold">Helpful Links</h3>
          <ul className="text-gray-600 text-sm space-y-2 mt-2">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                  className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
             className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="develop"
                smooth={true}
                duration={500}
                 className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Development
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

                 {/* information */}

        <div>
          <h3 className="font-semibold">Information</h3>
          <ul className="text-gray-600 text-sm space-y-2 mt-2">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                   className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="develop"
                smooth={true}
                duration={500}
                 className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Development
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-[#054e98] cursor-pointer hover:text-[#04376a]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold">Subscribe For More</h3>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button className="w-full bg-[#054e98] text-white py-2 mt-2 rounded hover:bg-[#054689] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-600 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-[#054689] text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-600 hover:text-[#054689] text-xl"><FaGooglePlusG /></a>
          <a href="#" className="text-gray-600 hover:text-[#054689] text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-600 hover:text-[#054689] text-xl"><FaInstagram /></a>
        </div>
        <hr className="border-t border-gray-300 my-4 mx-auto w-1/2" />
        <p >© 2024-2025 HouseFinder.eg - The Real Estate Platform in Egypt</p>
      </div>
    </footer>
  );
}
