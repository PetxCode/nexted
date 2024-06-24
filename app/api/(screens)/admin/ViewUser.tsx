import React from "react";
import FormComp from "../../../static/FormComp";
import DisplayScreen from "../../../static/DisplayScreen";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

const ViewUserScreen = async () => {
  const session: any = await getServerSession(options);
  return (
    <div className="bg-purple-100">
      <div>
        This is the {session?.user.name} Screen, You are a Client:{" "}
        {session?.user.role}
      </div>
      <FormComp />

      <div className="my-10">
        <hr />
      </div>

      <DisplayScreen />
    </div>
  );
};

export default ViewUserScreen;
