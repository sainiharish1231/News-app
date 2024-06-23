import connectToDatabase from "@/lib/dbconnect/dbconnect";
import Newblog from "@/lib/modals/Newblog";
import { NextRequest, NextResponse } from "next/server";

export interface IComment {
  urlkey: string;
  userkey: string;
  username: string;
  posttime: string;
  userComment: string;
  userImage: any;
}

export interface Item {
  Image: string;
  Category: string;
  uploadTime: string;
  title: string;
  description: string;
  article: string;
  profilName: string;
  Comments: IComment[];
  Views: string;
  Likes: number; // Ensure this is defined as a number
  disLikes: string;
  saveData: string; // renamed to avoid conflict with reserved keyword
  share: string;
  downlode: string;
  urlkey: string;
}

export interface DataModel {
  [urlkey: string]: Item;
}

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const urlkey = req.nextUrl.searchParams.get("id");

    if (urlkey) {
      const data: Item | null = await Newblog.findOne({ urlkey }).exec();
      if (data) {
        return NextResponse.json({ data });
      } else {
        return NextResponse.json({ msg: "Data not found" });
      }
    }

    const data: Item[] = await Newblog.find().exec();

    // Transform the array into an object with urlkey as the key
    const dataObject: DataModel = {};
    data.forEach((item) => {
      dataObject[item.urlkey] = item;
    });

    return NextResponse.json({ data: dataObject });
  } catch (error) {
    return NextResponse.json({
      msg: "Something went wrong in the GET request",
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Validate required fields
    if (!body.urlkey || !body.title) {
      return NextResponse.json({ msg: "Missing required fields" });
    }

    const formattedUploadTime = formatDate(new Date());

    const newData = new Newblog({
      urlkey: body.urlkey,
      Image: body.Image,
      Category: body.Category,
      uploadTime: formattedUploadTime, // Set the formatted current date and time
      title: body.title,
      description: body.description,
      article: body.article,
      profilName: body.profilName,
      Comments: [],
      Views: 0, // Initialize the views count to 0
      Likes: 0, // Ensure this is a number in your POST request
      disLikes: 0,
      saveData: 0, // renamed to avoid conflict with reserved keyword
      share: 0,
      downlode: 0,
    });

    await newData.save();
    return NextResponse.json({ msg: "POST Request Successfully" });
  } catch (error) {
    console.error("An error occurred in the POST request:", error);
    return NextResponse.json({ msg: "dedd" });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.urlkey) {
      return NextResponse.json({ msg: "Missing required urlkey" });
    }

    console.log("Received PUT request with body:", body);

    await connectToDatabase();
    const updatedData = await Newblog.findOneAndUpdate(
      { urlkey: body.urlkey },
      body,
      { new: true }
    ).exec();

    if (!updatedData) {
      return NextResponse.json({
        msg: "No document found with the provided urlkey",
      });
    }

    /* console.log("Updated data:", updatedData); */

    return NextResponse.json({
      msg: "PUT Request Successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("An error occurred in the PUT request:", error);
    return NextResponse.json({ msg: "An error occurred in the PUT request" });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const urlkey = req.nextUrl.searchParams.get("id");

    if (!urlkey) {
      return NextResponse.json({ msg: "Missing required urlkey" });
    }

    await connectToDatabase();
    await Newblog.findOneAndDelete({ urlkey }).exec();

    return NextResponse.json({ msg: "DELETE Request Successfully" });
  } catch (error) {
    console.error("An error occurred in the DELETE request:", error);
    return NextResponse.json({
      msg: "An error occurred in the DELETE request",
    });
  }
}
