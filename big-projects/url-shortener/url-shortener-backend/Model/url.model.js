import { Model, Schema, Types } from "mongoose";

const urlSchema = new Schema(
  {
    short_url: {
      type: String,
      required: [true, "short_url is required"],
      index: true,
    },
    original_url: {
      type: String,
      required: [true, "original_url is required"],
    },
    userId: {
      type: Types.ObjectId,
      required: [true, "short_url is required"],
      ref: "User",
    },
    hits: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default URL = new Model("URL", urlSchema);
