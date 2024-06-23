"use client";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const BlogForm: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const user = session?.user;
  const userName = user?.name || "";
  const userImage = user?.image;
  const [urlkey, setUrlkey] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");
  const [error, setError] = useState("");
  const formattedUploadTime = formatDate(new Date());

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    function blobToBase64(blob: Blob): Promise<string> {
      return new Promise<string>((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          debugger;
          resolve(reader.result as any);
        };
        reader.readAsDataURL(blob);
      });
    }
    if (file) {
      blobToBase64(file).then((fileURL: string) => setImage(fileURL));

      // Save the file for further use if needed
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blogData: { [key: string]: string } = {
      urlkey,
      Image: image,
      Category: category,
      uploadTime: formattedUploadTime,
      title,
      description,
      article,
      profilName: userName,
    };

    const formData = new FormData();

    Object.entries(blogData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("/api/newblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
      // Handle success (e.g., show a success message, redirect to another page, etc.)
    } catch (error) {
      setError("////////////");
    }
  };

  return (
    <div className="w-full min-h-screen flex mt-20 justify-center">
      <div className="lg:flex">
        <div className="mx-auto py-8 rounded-lg">
          <div className="">
            <h2 className="text-2xl font-bold tracking-wide">
              Create Blog Post
            </h2>
          </div>
          <form className="my-8 text-sm" onSubmit={handleSubmit}>
            <div className="flex flex-col my-4">
              <label htmlFor="urlkey">URL Key</label>
              <input
                type="text"
                id="urlkey"
                value={urlkey}
                onChange={(e) => setUrlkey(e.target.value)}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm"
                placeholder="Enter URL key"
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="image">Image Upload</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm"
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 rounded text-sm"
                placeholder="Enter category"
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 rounded text-sm"
                placeholder="Enter title"
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 rounded text-sm"
                placeholder="Enter description"
              />
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="article">Article</label>
              <textarea
                id="article"
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                className="mt-2 p-2 border border-purple-600 focus:outline-none focus:ring-0 rounded text-sm"
                placeholder="Enter article content"
              />
            </div>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <div className="flex justify-center m-10">
              <button
                type="submit"
                className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100  dark:bg-[#ffffff]  rounded-xl hover:bg-white group py-1.5 px-2.5"
              >
                <span className="flex justify-center w-[300px] h-48 rounded bg-purple-600 absolute bottom-0 left-0  translate-y-full ease-out duration-[1300ms] transition-all   group-hover:mb-0 group-hover:translate-y-0"></span>
                <span>
                  <h1 className="relative justify-center text-left text-black  duration-[1300ms] w-10 ease-out text-xl group-hover:text-white">
                    Post
                  </h1>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
