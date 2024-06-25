import React from "react";

import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import ViewScreen from "./api/(screens)/users/ViewScreen";
import { redirect } from "next/navigation";
import ViewUserScreen from "./api/(screens)/admin/ViewUser";

const page = async () => {
  const session: any = await getServerSession(options);

  console.log(session);

  if (session?.user?.role === "admin") {
    return (
      <div className="border m-6 p-4 rounded-md ">
        <ViewScreen />
      </div>
    );
  } else if (session?.user?.role === "user") {
    return (
      <div className={`bg-blue-50 border m-6 p-4 rounded-md `}>
        <ViewUserScreen />
      </div>
    );
  } else {
    return redirect("/signin");
  }
};

export default page;
