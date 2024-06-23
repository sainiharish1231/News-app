import React from "react";
import styles from "../../public/ Placeholder.module.css";

const SkeletonPlaceholder: React.FC = () => (
  <>
    <div className=" h-full m-6 animate-pulse  ">
      <div className="flex   justify-center gap-2 ">
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
        <div className="h-10 w-[100px] rounded-full bg-slate-200"></div>
      </div>
    </div>
    <div className="sm:mr-[550px] sm:ml-[600px] sm:mt-20 sm:px-10 h-full m-6">
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
            <div className="flex  items-center  gap-6 ">
              <div className="h-10 w-10 rounded-full bg-slate-200"></div>
              <div className=" h-3 w-[200px] rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    <div className="sm:mr-[550px] sm:ml-[600px] sm:mt-20 sm:px-10 h-full m-6">
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
            <div className="flex  items-center  gap-6 ">
              <div className="h-10 w-10 rounded-full bg-slate-200"></div>
              <div className=" h-3 w-[200px] rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SkeletonPlaceholder;
