"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{setTheme("dark")}</>;
  if (resolvedTheme === "dark") {
    return (
      <>
        {/*    {isLoading ? (
          <>
            <div className=" mt-5">
              <div className="animate-pulse">
                <div className="flex justify-between">
                  <div className=" ml-5 h-[40px] w-[140px] rounded bg-slate-200"></div>
                  <div className="  mr-5 h-[40px] w-[40px] rounded-full bg-slate-200"></div>
                </div>
              </div>
            </div>
          </>
        ) : ( */}
        <div className="  flex items-center justify-between">
          <h4
            className="text-3xl
    font-bold p-5"
          >
            Bloger
          </h4>
          <FiSun
            className=" mr-5 mt-3 h-8  w-8 "
            onClick={() => setTheme("light")}
          />
        </div>
        {/* )} */}
      </>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div className="  flex items-center justify-between">
        <h4
          className="text-3xl
  font-bold p-5"
        >
          Bloger
        </h4>
        <FiMoon
          className=" mr-5 mt-3 h-8  w-8 "
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
};

export default ThemeSwitch;
