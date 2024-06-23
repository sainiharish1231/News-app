"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Custom404 from "../not-found";
import SkeletonPlaceholder from "../Dammydeta";

const NewBlog = () => {
  const [blogItem, setBlogItem] = useState("");
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Convert Set to Array using Array.from
  const categories = Array.from(
    new Set(Object.values(blogItem).map((item: any) => item.Category))
  );
  const images = Array.from(
    new Set(Object.values(blogItem).map((item: any) => item.Image))
  );

  /*  const images: any = Array.from(
    new Set(
      Object.values(blogItem).map(
        (item: any) => item.Image === selectedCategory
      )
    )
  ); */

  const filteredItems = selectedCategory
    ? Object.values(blogItem).filter(
        (item: any) => item.Category === selectedCategory
      )
    : Object.values(blogItem);
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/newblog`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      const data = responseData.data; // Assuming your data is nested under a 'data' key

      setBlogItem(data || null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  if (error) return <Custom404 />;
  if (!blogItem)
    return (
      <>
        {/*  <div className=" flex justify-center items-center">
          <div className=" animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div> */}
        <SkeletonPlaceholder />
      </>
    );
  {
    Object.values(images).filter((item) => <>{item}</>);
  }

  return (
    <>
      {isLoading ? (
        <>
          <SkeletonPlaceholder />

          {filteredItems.map((item: any, index) => (
            <div
              key={index}
              className="sm:mr-[550px] sm:ml-[600px] sm:mt-20 sm:px-10 h-full m-6"
            >
              <div className="animate-pulse space-x-9">
                <div className="sm:flex ">
                  <div className=" h-[200px] w-full  bg-slate-200 "></div>
                  <div className="sm:ms-4 w-full  mt-8 sm:mt-0  space-y-7">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                      <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                    </div>

                    <div className="space-y-7">
                      <div className="h-3 rounded bg-slate-200"></div>
                      <div className="h-4 rounded bg-slate-200"></div>
                      <div className="h-4 rounded bg-slate-200"></div>
                    </div>
                    <div className="grid grid-cols-3 space-x-3 items-center justify-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                      <div className="h-2 w-full rounded bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="flex touch-auto justify-center   items-center">
            <FiArrowLeft
              className="  text-2xl cursor-pointer  hidden sm:flex
    "
              onClick={scrollLeft}
            />

            <div
              ref={scrollContainerRef}
              className="flex m-6 max-w-[700px]  overflow-x-auto space-x-4 mb-6"
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className={`flex text-lg py-2 px-4 rounded-full ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-black dark:bg-[#ffffff] text-white dark:text-black"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}

              <button
                className={`py-2 px-4 rounded-full ${
                  selectedCategory === null
                    ? "bg-purple-600 text-white "
                    : "bg-black dark:bg-[#ffffff] text-white dark:text-black"
                }`}
                onClick={() => setSelectedCategory(null)}
              >
                All{" "}
              </button>
            </div>

            <FiArrowRight
              className="  text-2xl cursor-pointer  hidden sm:flex
    "
              onClick={scrollRight}
            />
          </div>
          <div className="sm:m-60 sm:px-6 h-full ">
            {filteredItems.map((item: any) => (
              <div key={item.urlkey} className="sm:m-20 m-6">
                <div className="mb-22 mx-auto xl:max-w-[70%] grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                  <div className="relative block group">
                    <div
                      className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                      aria-hidden="true"
                    />
                    <div className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <Image
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={item.Image}
                        width={540}
                        height={303}
                        alt={"Blog post"}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="mb-4">
                          <span className="inline-flex text-center text-[#ffffff] py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-auto">
                            {item.Category}
                          </span>{" "}
                          <span className="inline-flex text-center text-[#ffffff] py-1 px-3 rounded-full bg-red-600 hover:bg-red-500 transition duration-150 ease-in-out cursor-auto">
                            {item.urlkey}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      className="!no-underline text-2xl lg:text-3xl font-bold leading-tight mb-4"
                      href={`Blog/${item.urlkey}`}
                    >
                      <div className="transition duration-150 ease-in-out">
                        <h2 className="hover:underline">{item.title}</h2>
                      </div>
                      <p className="text-lg flex-grow">{item.description}</p>
                    </Link>
                    <Link
                      className="flex !no-underline align-middle items-center"
                      href={""}
                    >
                      <div>
                        <Image
                          className="rounded-full mt-5 flex-shrink-0 mr-4"
                          src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                          width={40}
                          height={40}
                          alt="Author 04"
                        />
                      </div>
                      <div className="flex justify-between mt-5 ">
                        <p className="hover:underline font-medium transition duration-150 ease-in-out">
                          {item.profilName}
                        </p>
                        <p className="ml-2">-</p>
                        <p className="ml-2">{item.uploadTime}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NewBlog;
