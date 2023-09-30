import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto h-16 md:h-20
        ">
          <div>
            {/* <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." /> */}
            Byte Books
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">Books</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Categories</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Blog</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Whislist</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className=" text-black px-5 py-2 ">Sign in</button>
            {menuOpen ? (
              <FiX onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
            ) : (
              <FiMenu onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
