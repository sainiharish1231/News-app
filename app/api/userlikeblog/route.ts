import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/dbconnect/dbconnect";
import BlogLike from "@/lib/modals/BlogLike";
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const urlkey = searchParams.get("urlkey");
    if (urlkey) {
      const likes = await BlogLike.findOne({ urlkey });
      return NextResponse.json(likes ? likes : { msg: "No like found" });
    } else {
      const likes = await BlogLike.find({});
      return NextResponse.json(likes);
    }
  } catch (error) {
    return NextResponse.json({ msg: "Error fetching data", error });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Check for required fields
    if (!body.urlkey || !body.username) {
      return NextResponse.json({ msg: "Missing required fields" });
    }

    // Check if the combination of urlkey and username already exists
    const existingEntry = await BlogLike.findOne({
      urlkey: body.urlkey,
      username: body.username,
    });
    if (existingEntry) {
      return NextResponse.json({ msg: "Entry already exists" });
    }

    // Create a new BlogLike entry
    const newData = new BlogLike({
      urlkey: body.urlkey,
      username: body.username,
      userlike: false,
    });

    await newData.save();
    return NextResponse.json({ msg: "POST Request Successfully" });
  } catch (error) {
    return NextResponse.json({ msg: "Error occurred", error });
  }
}
export async function PUT(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    if (!body.urlkey || !body.username || body.userlike === undefined) {
      return NextResponse.json({ msg: "Missing required fields" });
    }
    const updatedLike = await BlogLike.findOneAndUpdate(
      { urlkey: body.urlkey },
      { username: body.username, userlike: body.userlike },
      { new: true }
    );
    if (!updatedLike) {
      return NextResponse.json({ msg: "Like not found" });
    }
    return NextResponse.json({ msg: "PUT Request Successfully", updatedLike });
  } catch (error) {
    return NextResponse.json({ msg: "Error updating data", error });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const urlkey = searchParams.get("urlkey");
    if (!urlkey) {
      return NextResponse.json({ msg: "urlkey is required" });
    }
    const deletedLike = await BlogLike.findOneAndDelete({ urlkey });
    if (!deletedLike) {
      return NextResponse.json({ msg: "Like not found" });
    }
    return NextResponse.json({
      msg: "DELETE Request Successfully",
      deletedLike,
    });
  } catch (error) {
    return NextResponse.json({ msg: "Error deleting data", error });
  }
}
