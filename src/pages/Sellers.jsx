import React from 'react'

const Sellers = () => {
  return (
    <section className="best-sellers py-8">
        <div className="container mx-auto">
          <div className="flex flex-col ">
            <div className="w-full ">
              <h2 className="text-5xl font-bold font-serif mb-4 p-4">
                Best Sellers
              </h2>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-start">
                <div className="p-4">
                  <figure className="">
                    <img
                      className="max-w-full sm:h-40 md:h-60 lg:h-[400px]"
                      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqnQWlbi1AnkRDz3mTU2yYVuwkXsFiptcqQ_COdk16xkijN8yG"
                      alt="Gone Girl"
                    />
                  </figure>
                  <div className="flex flex-row items-center justify-between font-serif font-bold text-2xl">
                    <figcaption className="book-name text-lg font-semibold font-serif text-left mt-2">
                      Gone Girl
                    </figcaption>
                    <span className="">$32.00</span>
                  </div>
                  <figcaption className="author font-serif text-base text-black text-left mt-1">
                    by: Gillian Flynn
                  </figcaption>
                  <button className="flex flex-row items-center justify-center font-serif  btn bg-slate-950  text-slate-200	 px-6 py-3 mt-4 ">
                    <span className="pr-1 font-thin">Add</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill="currentColor"
                      class=" text-slate-200 "
                    >
                      <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                    </svg>
                  </button>
                </div>
                <div className=" p-4">
                  <figure className="">
                    <img
                      className="max-w-full sm:h-40 md:h-60 lg:h-[400px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWejY-YD8zulonPmb-CqVqEmsMJtg98XHIZhpepMPQbPmXuuJ"
                      alt="Lockdown"
                    />
                  </figure>
                  <div className="flex flex-row items-center justify-between font-serif font-bold text-2xl">
                    <figcaption className="book-name text-lg font-semibold font-serif text-left mt-2">
                      Lockdown
                    </figcaption>
                    <span className="">$19.99</span>
                  </div>
                  <figcaption className="author font-serif text-base text-black text-left mt-1">
                    by: Alexander Gordon Smith
                  </figcaption>
                  <button className="flex flex-row items-center justify-center font-serif  btn bg-slate-950  text-slate-200	 px-6 py-3 mt-4 ">
                    <span className="pr-1 font-thin">Add</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill="currentColor"
                      class=" text-slate-200 "
                    >
                      <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                    </svg>
                  </button>
                </div>
                <div className=" p-4">
                  <figure className="">
                    <img
                      className="max-w-full sm:h-40 md:h-60 lg:h-[400px]"
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVjYb66oLEFgZgYV4OSavlkVHr5kD-D1XubuTb7gVTgppphrDj"
                      alt="The Great Gatsby"
                    />
                  </figure>
                  <div className="flex flex-row items-center justify-between font-serif font-bold text-2xl">
                    <figcaption className="book-name text-lg font-semibold font-serif text-left mt-2">
                      The Great Gatsby
                    </figcaption>
                    <span className="">$28.99</span>
                  </div>

                  <figcaption className="author font-serif text-base text-black text-left mt-1">
                    by: F. Scott Fitzgerald
                  </figcaption>
                  <button className="flex flex-row items-center justify-center font-serif  btn bg-slate-950  text-slate-200	 px-6 py-3 mt-4 ">
                    <span className="pr-1 font-thin">Add</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill="currentColor"
                      class=" text-slate-200 "
                    >
                      <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                    </svg>
                  </button>
                </div>
                <div className=" p-4">
                  <figure className="">
                    <img
                      className="max-w-full sm:h-40 md:h-60 lg:h-[400px]"
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1tXph6SVIgQBULTiQzm3ITCpVIq2W3rLUxHFrSbErsWhznkI1"
                      alt="Don Quixote"
                    />
                  </figure>
                  <div className="flex flex-row items-center justify-between font-serif font-bold text-2xl">
                    <figcaption className="book-name text-lg font-semibold font-serif text-left mt-2">
                      Don Quixote
                    </figcaption>
                    <span className="">$46.00</span>
                  </div>

                  <figcaption className="author font-serif text-base text-black text-left mt-1">
                    by: Miguel De Cervantes
                  </figcaption>
                  <button className="flex flex-row items-center justify-center font-serif  btn bg-slate-950  text-slate-200	 px-6 py-3 mt-4 ">
                    <span className="pr-1 font-thin">Add</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 -960 960 960"
                      width="20"
                      fill="currentColor"
                      class=" text-slate-200 "
                    >
                      <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T570-570v-90H390v90q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625-12.825 0-21.325-8.625T330-570v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                    </svg>
                  </button>
                </div>

                <div />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Sellers