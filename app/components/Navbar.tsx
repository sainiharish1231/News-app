import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="fixed   z-[400] s-center transition ease-in duration-200 hover:text-purple-600
        inset-x-0
        bottom-0
        mt-[60px]"
      >
        <div
          className="sticky bottom-2  p-4 px-6 m-2 flex items-center justify-between dark:bg-[#ffffff] bg-[#232323] shadow-2xl
         text-[#ffffff] dark:text-[#232323] rounded-full cursor-pointer"
        >
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
            href={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              ></path>
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:fill-purple-600 "
            href={"/Blogpost"}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8,2 C8.55229,2 9,2.44771 9,3 C9,3.55228 8.55229,4 8,4 L4,4 L4,12 L12,12 L12,8 C12,7.44771 12.4477,7 13,7 C13.5523,7 14,7.44771 14,8 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L8,2 Z M11.9531,2.63268 L13.3673,4.04689 L7.41421,10 L6,10 L6,8.58579 L11.9531,2.63268 Z M14.7815,1.21846 C15.1721,1.60898 15.1721,2.24215 14.7815,2.63267 L14.0744,3.33979 L12.6602,1.92556737 L13.3673,1.21846 C13.7578,0.827937 14.391,0.827936 14.7815,1.21846 Z" />
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
            href={"/Save"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.3}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-purple-600 "
            href={"/Profile"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
