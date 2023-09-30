import React from 'react'

const Hero = () => {
  return (
    <header className=" container bg-orange-50 py-24">
        <div className=" md:flex items-center justify-between sm:flex-col md:flex-row ">
          <section className=" w-full md:w-2/5">
            <h1 className=" text-3xl md:text-5xl lg:text-7xl lg:leading-snug font-bold font-serif ">
              Find Your Next Book
            </h1>
            <p className=" pt-4 text-base md:text-lg text-gray-900 w-3/4">
              Escape into a literary universe of imagination and inspiration.
              Let our book store be your gateway to extraordinary stories.
            </p>
            <button className=" font-serif btn bg-slate-950  text-white px-12 py-4 mt-4 ">
              Explore Now
            </button>
          </section>
          <section className=" w-full md:w-3/5">
            <div className="image-wrapper flex flex-wrap">
              <div className="item w-full md:w-1/3 p-4">
                <figure className="item-image">
                  <img
                    className="max-w-full h-auto rounded-t-full 
                    "
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqnQWlbi1AnkRDz3mTU2yYVuwkXsFiptcqQ_COdk16xkijN8yG"
                    alt="Gone Girl"
                  />
                </figure>
                <figcaption className="book-name text-xl font-semibold font-serif text-center mt-2">
                  Gone Girl
                </figcaption>
                <figcaption className="author text-sm text-black text-center mt-1">
                  Gillian Flynn
                </figcaption>
              </div>
              <div className="item w-full md:w-1/3 p-4">
                <figcaption className="book-name text-xl font-semibold font-serif text-center mt-2">
                  In The Woods
                </figcaption>
                <figcaption className="author text-sm text-black text-center mt-1">
                  Tana French
                </figcaption>
                <figure className="item-image">
                  <img
                    className="max-w-full h-auto rounded-b-full"
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQHcmRtgepAYcH_oPK6BhVO8z2yB9bWZMDsJX_JjA-P72Aibns"
                    alt="In The Woods"
                  />
                </figure>
              </div>
              <div className="item w-full md:w-1/3 p-4">
                <figure className="item-image">
                  <img
                    className="max-w-full h-auto rounded-t-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWejY-YD8zulonPmb-CqVqEmsMJtg98XHIZhpepMPQbPmXuuJ"
                    alt="Lockdown"
                  />
                </figure>
                <figcaption className="book-name text-xl font-semibold font-serif text-center mt-2">
                  Lockdown
                </figcaption>
                <figcaption className="author text-sm text-black text-center mt-1">
                  Alexander Gordon Smith
                </figcaption>
              </div>
            </div>
          </section>
        </div>
      </header>
  )
}

export default Hero