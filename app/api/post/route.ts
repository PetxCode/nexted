import { dbConfig } from "@/utils/dbConfig";
import postData from "@/utils/model/postModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    const post = await postData.find();
    return NextResponse.json({
      status: 200,
      message: "get all Post",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, image } = await req.json();
    await dbConfig();

    const post = await postData.create({ name, image });
    return NextResponse.json({
      status: 201,
      message: "create new Post",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
