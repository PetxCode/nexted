import { dbConfig } from "@/utils/dbConfig";
import postData from "@/utils/model/postModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    const { postID } = params;

    await dbConfig();

    const post = await postData.findByIdAndDelete(postID);
    return NextResponse.json({
      status: 201,
      message: "Post Deleted successfully",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
