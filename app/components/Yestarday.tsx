import React from "react";

const Yesterday = () => {
  return (
    <>
      <div className="mb-40 m-5 sm:m-40">
        <div className="mb-3">
          <h1 className="text-3xl font-bold">Yesterday</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            WEDNESDAY 5 AUGUST
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24" />
              <h3 className="text-lg font-bold text-white leading-tight">
                DJ Dan Spins The Wheels
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32" />
              <h3 className="text-lg font-bold text-white leading-tight">
                Top Travels Destinations For 2020
              </h3>
            </a>
          </div>
          <div className="w-1/2 px-1">
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32" />
              <h3 className="text-lg font-bold text-white leading-tight">
                M&amp;S Launches New Makeup Range!
              </h3>
            </a>
            <a
              href="#"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24" />
              <h3 className="text-lg font-bold text-white leading-tight">
                APT Set To Be A&nbsp;Ripper
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yesterday;
