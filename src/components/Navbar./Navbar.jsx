import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="font-body flex items-center justify-between flex-wrap bg-orange-50 py-8 px-[80px] lg:px-3 ">
        <div className="flex items-center flex-shrink-0 text-stone-950 mr-14">
          <span className="font-semibold text-4xl tracking-tight">
            Byte Books
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 px-4 lg:inline-block lg:mt-0  text-base font-small text-zinc-700 hover:text-zinc-950 mr-4 md:mr-1 sm:mr-0  "
            >
              Books
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 px-4 lg:inline-block lg:mt-0 text-base font-small text-zinc-700 hover:text-zinc-950 mr-4 md:mr-1 sm:mr-0 "
            >
              Categories
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 px-4 lg:inline-block lg:mt-0 text-base font-small text-zinc-700 hover:text-zinc-950 mr-4 md:mr-1 sm:mr-0 "
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 px-4 lg:inline-block lg:mt-0 text-base font-small text-zinc-700 hover:text-zinc-950 mr-4 md:mr-1 sm:mr-0 "
            >
              Wishlist
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 px-4 lg:inline-block lg:mt-0 text-base font-small text-zinc-700 hover:text-zinc-950 mr-4 md:mr-1 sm:mr-0 "
            >
              About Us
            </a>
          </div>

          <div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 21l-4.35-4.35"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </span>
              <input
                type="search"
                name="search"
                placeholder="Search book..."
                // hide place holder for md and below
                class="w-full sm:w-32 md:w-48 lg:w-80 pl-10 pr-5 py-2 bg-transparent border-b border-zinc-950 focus:border-black focus:outline-none placeholder:text-zinc-700  md:border-0  
                "
              />
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none bg-transparent mt-4 lg:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="currentColor"
                class=" text-zinc-950 hover:text-black "
              >
                <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
              </svg>
            </a>

            <span>|</span>

            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none  rounded text-zinc-950 mt-4 lg:mt-0"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;