import mongoose, { Schema } from "mongoose";

export default () => {
  const folderSchema = new Schema(
    {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      context: {
        type: String,
        required: true
      },
      content: {
        type: String
      },
      descriptions: {
        type: String
      },
      create: {
        type: Date,
        default: Date.now
      },
      modify: {
        type: Date,
        default: Date.now
      }
    },
    {
      collection: "files"/* ,
      timestamps: true */
    }
  );
  return mongoose.model("Files", folderSchema);
};
