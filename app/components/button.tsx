import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center m-10">
      <button className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100  dark:bg-[#ffffff]  rounded-xl hover:bg-white group py-1.5 px-2.5">
        <span className="flex justify-center w-[300px] h-48 rounded bg-purple-600 absolute bottom-0 left-0  translate-y-full ease-out duration-[1300ms] transition-all   group-hover:mb-0 group-hover:translate-y-0"></span>
        <span>
          <Link
            className="relative justify-center text-left text-black  duration-[1300ms] w-10 ease-out text-xl group-hover:text-white"
            href={`Blog/`}
          >
            See More Blog
          </Link>
        </span>
      </button>
    </div>
  );
};

export default Button;
