import Link from "next/link";
import React from "react";

const SearchComponent: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden px-10 py-20 text-center sm:px-16 sm:shadow-sm">
        <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl">
          {` Didn't find the component you were looking for?`}
        </p>
        <form action="/search">
          <label
            className="mx-auto mt-8 relative  min-w-sm max-w-2xl flex  md:flex-row items-center justify-center border     border-purple-600 py-2 px-2 rounded-2xl gap-2 shadow-2xl "
            htmlFor="search-bar"
          >
            <input
              id="search-bar"
              placeholder="your keyword here"
              name="id"
              className="px-6 dark:bg-[#121211] py-2 w-full rounded-md flex-1 outline-none "
              required
            />
            <div className="flex justify-center ">
              <button
                type="submit"
                className="flex items-center justify-center full-height btn relative overflow-hidden h-[40px] w-[100px]  sm:w-[150px] font-medium transition-all bg-indigo-100  dark:bg-[#ffffff]  rounded-xl hover:bg-white group py-1.5 px-2.5"
              >
                <span className="flex justify-center sm:w-[150px] w-[100px] h-[40px] rounded bg-purple-600 absolute bottom-0 left-0  translate-y-full ease-out duration-[1300ms] transition-all   group-hover:mb-0 group-hover:translate-y-0"></span>
                <span>
                  <Link
                    className="relative justify-center text-black  duration-[1300ms]  ease-out  group-hover:text-white "
                    href={``}
                  >
                    {`Search`}
                  </Link>
                </span>
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
