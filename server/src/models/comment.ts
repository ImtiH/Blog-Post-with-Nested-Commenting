import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }, //objectID will be the id of the parent i.e. post/comment that we are sending from the frontend.
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
