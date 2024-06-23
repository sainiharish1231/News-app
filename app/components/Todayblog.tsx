import React from "react";

const Todayblog = () => {
  return (
    <>
      <div className=" mb-10 m-5 sm:m-40 ">
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Today</h1>
          <p className="text-sm dark:text-gray-300  text-gray-500 uppercase font-bold">
            THURSDAY 6 AUGUST
          </p>
        </div>
        <div className="mb-10">
          <a
            href="#"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background:
                "url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 right-0 -mt-3 mr-3">
              <div className="rounded-full bg-[blue] text-white text-lg py-1 pl-2 pr-3 leading-none">
                <i className="mdi mdi-fire text-base align-middle" />{" "}
                <span className="align-middle">FRESH</span>
              </div>
            </div>
            <div className="h-48" />
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              Tasnim Lacey New Album Out&nbsp;Now
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div className="flex-1 flex items-center">
                <div
                  className="rounded-full w-8 h-8 mr-3"
                  style={{
                    background:
                      "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                    backgroundSize: "cover",
                  }}
                />
                <div>Gwen Thomson</div>
              </div>
              <div>
                <i className="mdi mdi-thumb-up" /> 18
              </div>
            </div>
          </a>
        </div>

        <a
          href="#"
          className="block rounded-lg relative 
            p-5 transform transition-all duration-300 scale-100 hover:scale-95"
          style={{
            background:
              "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80) center",
            backgroundSize: "cover",
          }}
        >
          <div className="h-48" />
          <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
            Top 5 Cocktail Bars in&nbsp;NYC
          </h2>
          <div className="flex w-full items-center text-sm text-gray-300 font-medium">
            <div className="flex-1 flex items-center">
              <div
                className="rounded-full w-8 h-8 mr-3"
                style={{
                  background:
                    "url(https://randomuser.me/api/portraits/women/55.jpg) center",
                  backgroundSize: "cover",
                }}
              />
              <div>Kayden Buckley</div>
            </div>
            <div>
              <i className="mdi mdi-thumb-up" /> 7
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Todayblog;
