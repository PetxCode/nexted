import { model } from "mongoose";
import { Document, Schema, models } from "mongoose";

interface iPost {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface iPostData extends iPost, Document {}

const userModel = new Schema<iPostData>(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const userData = models.Users || model<iPostData>("Users", userModel);

export default userData;
