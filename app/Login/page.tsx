import React from "react";
import Login from "../components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const LoginPage = async () => {
  const session: any = await getServerSession(authOptions);
  if (session) redirect("Profile");

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
