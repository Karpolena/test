import mongoose, { Schema } from 'mongoose';

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
        type: String
      },
      descriptions: {
        type: String
      },
      elements: {
        type: Array,
        required: true
      },
      folders: {
        type: Array,
        required: true
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
      collection: 'folders'/* ,
      timestamps: true */
    }
  );
  return mongoose.model("Folders", folderSchema);
};
