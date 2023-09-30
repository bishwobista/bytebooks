import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8 font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
          <div className="mb-4">
            <h4 className="text-2xl font-semibold mb-6">Company</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  About Us
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Contact Us
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Vaccancy
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Company
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-2xl font-semibold mb-6">Help</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Subscription instructions
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Help Center
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Problem with the site
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-2xl font-semibold mb-6">User</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Registration{" "}
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Basket{" "}
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Wish list
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-2xl font-semibold mb-6">Follow Us</h4>
            <ul>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Instagram
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Facebook
                </a>
              </li>
              <li className="pb-3">
                <a
                  href="#"
                  className="font-normal text-gray-600 hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form mb-4 w-full ">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form>
              <input
                type="email"
                placeholder="Enter email here"
                className="pl-5 w-80 py-3 bg-transparent border border-gray-300 focus:border  focus:outline-none placeholder:text-gray-400"
              />
              <button className=" font-serif btn bg-slate-950  text-white px-12 py-4 mt-4  w-80">
              Send Email
            </button>
            </form>
          </div>
        </div>
      </div>
      <div className="  text-center py-2 ">
        <h1 className="text-2xl font-bold text-black">Byte Books</h1>
        <p className="font-body">
          &copy;2023. All rights reserved. Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
