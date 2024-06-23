import Fullblog from "@/app/components/Fullblog";
import Custom404 from "@/app/not-found";

import { Metadata } from "next";
import { headers } from "next/headers";

// Helper function to fetch blog data
async function fetchBlogData(id: string) {
  try {
    const header = headers();
    const scheme = header.get("x-forwarded-proto");
    const host = header.get("x-forwarded-host");
    const response = await fetch(`${scheme}://${host}/api/newblog?id=${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData = await response.json();
    return responseData.data || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Generate metadata for the blog page
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blogItem = await fetchBlogData(params.id);

  if (!blogItem) return {};

  return {
    title: `${blogItem.title} | San Raj`,
    openGraph: {
      images: [blogItem.image],
    },
  };
}

// Main blog page component
const FullblogPage = async ({ params }: any) => {
  const blogItem = await fetchBlogData(params.id);

  if (!blogItem) {
    return <Custom404 />;
  }

  return (
    <div>
      <Fullblog item={blogItem} />
    </div>
  );
};

export default FullblogPage;
