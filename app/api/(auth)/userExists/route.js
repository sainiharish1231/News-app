import connectToDatabase from "@/lib/dbconnect/dbconnect";
import User from "@/lib/modals/User";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDatabase();
    const { email, name } = await req.json();
    const userByEmail = await User.findOne({ email }).select("_id");
    const userByName = await User.findOne({ name }).select("_id");

    const userExists = Boolean(userByEmail || userByName);
    /* console.log("User by Email: ", userByEmail);
    console.log("User by Name: ", userByName); */

    return NextResponse.json({ userExists });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred." });
  }
}
