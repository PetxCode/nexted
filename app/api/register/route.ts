import { dbConfig } from "@/utils/dbConfig";
import postData from "@/utils/model/postModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import userData from "@/utils/model/userModel";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password, role } = await req.json();

    await dbConfig();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const post = await userData.create({
      name,
      email,
      password: hashed,
      role: "user",
    });
    return NextResponse.json({
      status: 201,
      message: "user created successfully",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};

export const GET = async () => {
  try {
    await dbConfig();

    const post = await userData.find();
    return NextResponse.json({
      status: 201,
      message: "user found successfully",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Error",
    });
  }
};
