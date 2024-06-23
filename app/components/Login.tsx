"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login: any = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!response || response.error) {
        setError("Invalid Username or Password .");
        return;
      }

      router.replace("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex mt-20 justify-center">
      <div className="lg:flex">
        <div className="mx-auto py-8 rounded-lg">
          <div className="">
            <h2 className="text-2xl font-bold tracking-wide">{`Log In`}</h2>
            <p className="text-sm mt-2">
              {`   Don't have an account?`}
              <Link
                href="/SignUp"
                className="text-purple-600 hover:text-purple-600 hover:underline"
                title="Sign Up"
              >
                {`  Sign up here`}
              </Link>
            </p>
          </div>
          <form className="my-8 text-sm" onSubmit={handleSubmit}>
            <div className="flex flex-col my-4">
              <label htmlFor="email" className="">
                {`  Email Address`}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 dark:bg-[#121212] p-2 border border-purple-600 focus:outline-none focus:ring-0 rounded text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="password" className="">
                {`   Password`}
              </label>
              <div className="relative flex items-center mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="flex-1 p-2 border pr-10 border-purple-600 focus:outline-none focus:ring-0 dark:bg-[#121212] rounded text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 bg-transparent flex items-center justify-center"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember_me"
                id="remember_me"
                className="mr-2 focus:bg-purple-600"
              />
              <label htmlFor="remember_me" className="">
                {` Remember Me`}
              </label>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <div className="my-4 flex items-center justify-end space-x-4">
              <div className="flex justify-center m-10">
                <button
                  type="submit"
                  className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100 dark:bg-[#ffffff] rounded-xl hover:bg-white group py-1.5 px-2.5"
                >
                  <span className="flex justify-center w-[300px] h-48 rounded bg-purple-600 absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
                  <span className="relative justify-center text-left text-black duration-[1300ms] ease-out text-xl group-hover:text-white">
                    {` Log In`}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
