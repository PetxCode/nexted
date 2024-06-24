import { model } from "mongoose";
import { Document, Schema, models } from "mongoose";

interface iPost {
  name: string;
  image: string;
}

interface iPostData extends iPost, Document {}

const postModel = new Schema<iPostData>(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const postData = models.Posts || model<iPostData>("Posts", postModel);

export default postData;
