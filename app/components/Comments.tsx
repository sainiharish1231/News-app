import { useSession } from "next-auth/react";
import Image from "next/image";

const Comments = ({ deta }: any) => {
  const commentdeta = Object.values(deta);
  const { data: session } = useSession<any>();
  return (
    <div>
      <div className="  mb-4 border-t ">
        <h2 className="flex justify-center  text-3xl items-center">
          {" "}
          Comments
        </h2>

        <div className="    px-6 py-4 border-b  ">
          {commentdeta.map((item: any) => (
            <>
              <div className="flex   items-center justify-between">
                <div className="flex items-center     mb-6">
                  <div
                    className=" flex items-center justify-center
        rounded-full h-[50px] w-[50px] mr-5 bg-black dark:bg-[#ffff] "
                  >
                    <h1 className=" text-2xl dark:text-black text-[#ffff]">
                      {item.username.slice(0, 1).toUpperCase()}
                    </h1>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium ">
                      {item.username.slice(0, 1).toUpperCase()}
                      {item.username.slice(1, item.username.length)}
                    </h2>
                    <h2>{item.posttime}</h2>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">{item.userComment}</p>
            </>
          ))}
        </div>
      </div>
      <div
        className="relative flex s-center self-center
               w-full p-4 overflow-hidden text-gray-600
                focus-within:text-gray-400"
      >
        <div className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer">
          {" "}
          <div
            className="mr-5   flex items-center justify-center
      rounded-full h-[40px] w-[40px]  bg-black dark:bg-[#ffff] "
          >
            <h1 className=" text-2xl dark:text-black text-[#ffff]">
              {" "}
              {session?.user?.name?.slice(0, 1).toUpperCase()}
            </h1>
          </div>
        </div>
        <span className="absolute inset-y-0 right-0 flex s-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
          >
            <svg
              fill="#000000"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z" />
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="w-full py-2 pl-4 pr-10 text-sm border appearance-none rounded-tg
                  dark:bg-[#ffffff] focus:outline-none focus:shadow-outline-blue"
          style={{ borderRadius: 25 }}
          placeholder="Post a comment..."
        />
      </div>
    </div>
  );
};

export default Comments;
