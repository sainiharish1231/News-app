"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const user = session?.user;
  const userName = user?.name || "";
  const userImage = user?.image;

  return (
    <div className="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row">
      <main className="w-full flex justify-center min-h-screen">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="sm:pl-6 flex justify-center text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>
            <form>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:space-y-0">
                  {(userImage || userName) && (
                    <div className="object-cover text-8xl flex justify-center items-center p-1 rounded-full ring-2 ring-purple-600 dark:ring-purple-600 h-[150px] w-[150px]">
                      {userImage ? (
                        <Image
                          className="object-cover rounded-full"
                          src={userImage}
                          alt={userName}
                          width={150}
                          height={150}
                        />
                      ) : (
                        userName.slice(0, 1).toUpperCase()
                      )}
                    </div>
                  )}
                  <div>
                    <h2 className="sm:pl-6 mt-10 flex justify-center text-2xl font-bold sm:text-xl">
                      {userName.slice(0, 1).toUpperCase()}
                      {userName.slice(1, userName.length)}
                    </h2>
                    <h2 className="sm:pl-6 flex justify-center text-2xl font-bold sm:text-xl">
                      {user?.email}
                    </h2>
                  </div>
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100 dark:bg-[#ffffff] rounded-xl hover:bg-white group py-1.5 px-2.5"
                      >
                        <span className="flex justify-center w-[300px] h-48 rounded bg-purple-600 absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
                        <span>
                          <Link
                            className="relative justify-center text-left text-black duration-[1300ms] w-10 ease-out text-xl group-hover:text-white"
                            href={``}
                          >
                            Update Profile
                          </Link>
                        </span>
                      </button>
                    </div>
                    <div className="flex justify-center m-10">
                      <button
                        onClick={() =>
                          signOut({ callbackUrl: "/Login", redirect: true })
                        }
                        type="button"
                        className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-purple-600 rounded-xl hover:bg-white group py-1.5 px-2.5"
                      >
                        <span className="flex justify-center w-[301px] h-48 rounded bg-red-400 absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
                        <section id="Logout">
                          <div className="relative justify-center text-left text-white duration-[1300ms] w-10 ease-out text-xl group-hover:text-white">
                            Logout
                          </div>
                        </section>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
