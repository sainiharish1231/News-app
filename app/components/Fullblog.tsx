"use client";
import { Item } from "@/app/api/newblog/route";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import BlogLike from "@/lib/modals/BlogLike";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
export interface deta {
  username: string;
  posttime: string;
  userComment: string;
  urlkey: string;
}

// Define the interface for the data object with dynamic keys
export interface CommentDataModel {
  [urlkey: string]: deta;
}

export interface IdpageProps {
  item: Item;
}

const Idpage = ({ item }: IdpageProps) => {
  const [likebtnfill, setLikebtnFill] = useState("none");
  const [likebtnclour, setLikebtnClour] = useState("currentColor");
  const [likeCounter, setLikeCounter] = useState(item.Likes); // Correctly typed as number
  const [isLiked, setIsLiked] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [userLike, setuserLike] = useState(false);

  const bgColors = ["bg-purple-500", "bg-red-500", "bg-blue-500"];

  const [comments, setComments] = useState(item.Comments);
  const [newComment, setNewComment] = useState("");
  const { data: session } = useSession();

  const user = session?.user;
  const userName = user?.name || "";
  const userImage = user?.image;

  const formattedUploadTime = formatDate(new Date());

  useEffect(() => {
    setIsLiked(userLike);
  }, [userLike]);
  useEffect(() => {
    if (isLiked) {
      setLikebtnFill("red");
      setLikebtnClour("red");
    } else {
      setLikebtnFill("none");
      setLikebtnClour("currentColor");
    }
  }, [isLiked]);

  useEffect(() => {
    const fetchUserLikeStatus = async () => {
      await fetch(`/api/userlikeblog`, {
        method: "POST", // Changed to PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urlkey: item.urlkey,
          username: userName,
          userlike: !userLike,
        }),
      });
      if (session) {
        try {
          const response = await fetch(
            `/api/userlikeblog?urlkey=${item.urlkey}`
          );
          if (response.ok) {
            const data = await response.json();
            console.log("API response data:", data.userlike); // Log the API response
            setuserLike(data.userlike);
          } else {
            throw new Error("Failed to fetch user like status");
          }
        } catch (error) {
          console.error("Error fetching user like status:", error);
        }
      }
    };

    fetchUserLikeStatus();
  }, [session, item.urlkey, userName]);

  const handleInputChange = (e: any) => {
    setNewComment(e.target.value);
  };

  const UpdateLike = async () => {
    if (!session) {
      alert("You need to be logged in to like a post.");
      return;
    }

    const newCounter = isLiked ? likeCounter - 1 : likeCounter + 1;
    setLikeCounter(newCounter);
    setIsLiked(!isLiked);

    setuserLike(true);
    try {
      const response = await fetch(`/api/newblog?id=${item.urlkey}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urlkey: item.urlkey,
          Likes: newCounter,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.msg || "Something went wrong");
      }

      const userLikeResponse = await fetch(`/api/userlikeblog`, {
        method: "PUT", // Changed to PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urlkey: item.urlkey,
          username: userName,
          userlike: !userLike,
        }),
      });

      if (!userLikeResponse.ok) {
        const data = await userLikeResponse.json();
        throw new Error(data.msg || "Something went wrong");
      }

      /*    setuserLike(!userLike); */
      console.log("Requests successfully completed");
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleSubmit = async () => {
    if (!session) {
      alert("You need to be logged in to comment.");
      return;
    }

    const newCommentData = {
      urlkey: item.urlkey,
      userkey: userName,
      username: userName,
      posttime: formattedUploadTime,
      userComment: newComment,
      userImage: userImage,
    };

    const updatedComments = [...comments, newCommentData];
    setComments(updatedComments);

    try {
      const response = await fetch(`/api/newblog?id=${item.urlkey}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urlkey: item.urlkey,
          Comments: updatedComments,
          userImage: userImage,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.msg || "Something went wrong");
      }

      console.log("Comment added successfully");
    } catch (error) {
      console.error("Error updating comments:", error);
    }

    setNewComment("");
  };

  const Isopen = () => {
    setIsOpen((prev) => !prev);
  };

  const dataObject: CommentDataModel = {};
  const comment: deta[] = item.Comments;
  comment.forEach((item: any) => {
    dataObject[item.userkey] = item;
  });

  return (
    <>
      <div className="sm:m-21 p-3 mt-20 mb-20 flex justify-center">
        <div className="flex shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex s-center w-full">
            <div className="w-full">
              <div
                className="relative pb-[60%] md:pb-[25%] lg:pb-[25%] overflow-hidden 
               xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700
                ease-out"
              >
                <Image
                  className="absolute inset-0 w-full !h-full object-cover transform 
                     hover:scale-105 trans
                     export interface IdpageProps {
                       item: Item;
                     }ition duration-700 ease-out"
                  src={item.Image}
                  width={400}
                  height={50}
                  alt="Blog post"
                />
              </div>
              <p className="font-semibold text-lg mt-5 mx-3 px-2">
                {item.title}
              </p>
              <p className="mb-6 text-lg mx-3 px-2"> {item.article}</p>

              <div className="flex justify-start mb-4 border-t">
                <div onClick={Isopen} className="flex mt-1 pt-2 pl-5">
                  <h3 className="flex pr-2 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      width="30px"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0-4.418-4.03-8-9-8S3 7.582 3 12c0 3.867 3.134 7.043 7.2 7.75a.75.75 0 01.6.75v2.25a.75.75 0 001.2.6l2.9-2.32a.75.75 0 01.6-.18c4.07-.75 7.5-3.92 7.5-7.85z"
                      />
                    </svg>
                  </h3>

                  {item.Comments.slice(0, 3).map((item: any, index: any) => (
                    <div
                      key={index}
                      className={`mt-1 flex items-center justify-center rounded-full h-[25px] w-[25px] ${bgColors[index]} `}
                    >
                      <h1 className="text-xl text-[#ffff]">
                        {item.username.slice(0, 1).toUpperCase()}
                      </h1>
                    </div>
                  ))}

                  <h3 className="pt-1 text-xl pl-2 ">
                    {item.Comments.length}+
                  </h3>
                </div>

                <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                  <h1
                    className="transition ease-out duration-300 
                     h-8 w-8  flex   justify-center items-center text-center   rounded-full
                   text-[#ffff] dark:text-[black] bg-black dark:bg-[#ffff] cursor-pointer mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </h1>
                </div>
              </div>

              <div className="flex justify-between items-center border-b">
                <div className="mt-3 mx-5 flex-col flex">
                  <h3 className="text-sm">Views:{item.Views}</h3>
                </div>
                <div onClick={UpdateLike} className="mt-3 mr-9">
                  <h3 className="flex flex-col justify-center items-center">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill={likebtnfill}
                      stroke={likebtnclour}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <div className="text-xl">{likeCounter}</div>
                  </h3>
                </div>
              </div>
              <div>
                {isopen ? (
                  <div>
                    <div className="mb-4 border-t">
                      <h2 className="flex justify-center text-3xl items-center">
                        Comments
                      </h2>
                      <div className="px-6 py-4 border-b">
                        {comments.map((item: any, index: number) => (
                          <div key={index}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] mr-5 bg-black dark:bg-[#ffff]">
                                  <h1 className="text-3xl dark:text-black text-[#ffff]">
                                    {(item.userImage || item.username) && (
                                      <div>
                                        {item.userImage ? (
                                          <Image
                                            className="object-cover rounded-full"
                                            src={item.userImage}
                                            alt={item.username}
                                            width={150}
                                            height={150}
                                          />
                                        ) : (
                                          item.username
                                            .slice(0, 1)
                                            .toUpperCase()
                                        )}
                                      </div>
                                    )}
                                  </h1>{" "}
                                </div>

                                <div>
                                  <h2 className="text-lg font-medium">
                                    {item.username.slice(0, 1).toUpperCase()}
                                    {item.username.slice(
                                      1,
                                      item.username.length
                                    )}
                                  </h2>
                                  <h2>{item.posttime}</h2>
                                </div>
                              </div>
                            </div>
                            <p className="text-lg leading-relaxed mb-6">
                              {item.userComment}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative flex s-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                      <div className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer">
                        <div className="mr-5 flex items-center justify-center rounded-full h-[40px] w-[40px] bg-black dark:bg-[#ffff]">
                          <h1 className="text-3xl dark:text-black text-[#ffff]">
                            {(userImage || userName) && (
                              <div>
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
                          </h1>
                        </div>
                      </div>
                      <span className="absolute inset-y-0 right-0 flex s-center pr-6">
                        <button
                          type="submit"
                          className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                          onClick={handleSubmit}
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
                        className="w-full py-2 pl-4 pr-10 text-sm border appearance-none rounded-tg dark:bg-[#ffffff] focus:outline-none focus:shadow-outline-blue"
                        style={{ borderRadius: 25 }}
                        placeholder="Post a comment..."
                        value={newComment}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Idpage;
